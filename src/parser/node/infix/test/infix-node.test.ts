import { IdNode } from '../../../../parser/node/id/id-node';
import { InfixNode } from '../../../../parser/node/infix/infix-node';
import { IntegerNode } from '../../../../parser/node/integer/integer-node';
import { MemberNode } from '../../../../parser/node/member/member-node';
import { PrefixNode } from '../../../../parser/node/prefix/prefix-node';
import { parse } from '../../../../parser/parser';
import { evaluate } from '../../../../util/evaluate';
import { NodeType } from '../../node-type';
import { TokenNode } from '../../token-node';

test('infix operator', () => {
  const text = 'abc.def';
  const nodes = parse(text).root.children;
  const node = nodes[0] as MemberNode;

  expect(node.$).toBe(NodeType.MEMBER);
  expect((node.instance as TokenNode).text).toBe('abc');
  expect(node.operator.text).toBe('.');
  expect(node.id.text).toBe('def');
});

test('several operands with different priorities', () => {
  const text = '1*1+1+2^5*2/2';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
  expect(node.operator.text).toBe('+');
  expect(evaluate(node)).toBe(34);
});

// test('infix declaration', () => {
//   const text = 'infix + (a: Number, b: Number): Number = a+b';
//   const source = Source.fromText(text);
//   const lexer = new LexicalAnalysis(source.text);
//   const nodes = lexer.body().statements[0].nodes;
//   const node = nodes[0] as InfixNode;

//   expect(node.$).toBe(NodeType.INFIX);
//   expect(node.operator.text).toBe('=');

//   const left = node.left as InfixNode;
//   expect(left.$).toBe(NodeType.INFIX);
//   expect(left.operator.text).toBe(':');

//   const invoke = left.left as InvokeNode;
//   expect(invoke.$).toBe(NodeType.INVOKE);
//   expect(invoke.instance.$).toBe(NodeType.PREFIX);
//   const instance = invoke.instance as PrefixNode;

//   expect(instance.operator.text).toBe('infix');
//   expect(instance.value.$).toBe(NodeType.OPERATOR);
//   expect((instance.value as OperatorNode).text).toBe('+');

//   const type = left.right as IdNode;
//   expect(type.$).toBe(NodeType.ID);
//   expect(type.text).toBe('Number');

//   const right = node.right as InfixNode;
//   expect(right.$).toBe(NodeType.INFIX);
//   expect(right.operator.text).toBe('+');
//   expect(right.left.$).toBe(NodeType.ID);
//   expect(right.right.$).toBe(NodeType.ID);
//   expect((right.left as IdNode).text).toBe('a');
//   expect((right.right as IdNode).text).toBe('b');
// });

test('num plus str', () => {
  const text = '1  + "str"';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
  expect(node.operator.text).toBe('+');
  expect(evaluate(node)).toBe('1str');
});

test('num is number', () => {
  const text = '1 & Number';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
  expect(node.operator.text).toBe('&');
  expect((node.left as IntegerNode).text).toBe('1');
  expect((node.right as IdNode).text).toBe('Number');
});

test('equals', () => {
  const text = 'this.text == 123';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
  expect(node.operator.text).toBe('==');
  expect((node.right as IntegerNode).text).toBe('123');
});

test('has several relational operators', () => {
  const text = 'a<b>c';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
  expect(node.operator.text).toBe('>');
  expect(node.left.$).toBe(NodeType.INFIX);
  expect(node.right?.$).toBe(NodeType.ID);

  const left = node.left as InfixNode;
  expect(left.operator.text).toBe('<');
  expect((left.left as IdNode).text).toBe('a');
  expect((left.right as IdNode).text).toBe('b');
  expect((node.right as IdNode).text).toBe('c');
});

test('several operators', () => {
  const text = '1 /+ 2';
  const nodes = parse(text).root.children;
  const node = nodes[0] as InfixNode;

  expect(node.$).toBe(NodeType.INFIX);
  expect(node.left.$).toBe(NodeType.INTEGER);
  expect(node.operator.text).toBe('/');

  expect(node.right?.$).toBe(NodeType.PREFIX);
  expect((node.right as PrefixNode).operator.text).toBe('+');
  expect((node.right as PrefixNode).value.$).toBe(NodeType.INTEGER);
  expect(((node.right as PrefixNode).value as IntegerNode).text).toBe('2');
});
