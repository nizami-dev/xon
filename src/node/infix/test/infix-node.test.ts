import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { IdNode } from '~/node/id/id-node';
import { InfixNode } from '~/node/infix/infix-node';
import { IntegerNode } from '~/node/integer/integer-node';
import { NodeType } from '~/node/node';
import { OperatorNode } from '~/node/operator/operator-node';
import { PrefixNode } from '~/node/prefix/prefix-node';
import { evaluate } from '~/util/evaluate';

test('several operands with different priorities', () => {
  const code = '1*1+1+2^5*2/2';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('+');
  expect(evaluate(source, tree)).toBe(34);
});

test('several operands with different priorities', () => {
  const code = 'infix +: (a: Number, b: Number) = Number';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe(':');

  const left = tree.left as PrefixNode;
  expect(left.operator.text).toBe('infix');
  expect((left.value as OperatorNode).text).toBe('+');

  const right = tree.right as InfixNode;
  expect(right.operator.text).toBe('=');
});

test('num plus str', () => {
  const code = "1  + 'str'";
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('+');
  expect(evaluate(source, tree)).toBe('1str');
});

test('num is number', () => {
  const code = '1 & Number';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('&');
  expect((tree.left as IntegerNode).text).toBe('1');
});

test('equals', () => {
  const code = 'this.text == 123';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('==');
  expect((tree.right as IntegerNode).text).toBe('123');
});

test('has several relational operators', () => {
  const code = 'a<b>c';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.operator.text).toBe('>');
  expect(tree.left.type).toBe(NodeType.INFIX);
  expect(tree.right.type).toBe(NodeType.ID);

  const left = tree.left as InfixNode;
  expect(left.operator.text).toBe('<');
  expect((left.left as IdNode).text).toBe('a');
  expect((left.right as IdNode).text).toBe('b');
  expect((tree.right as IdNode).text).toBe('c');
});

test('several operators', () => {
  const code = '1 /+ 2';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as InfixNode;

  expect(tree.type).toBe(NodeType.INFIX);
  expect(tree.left.type).toBe(NodeType.INTEGER);
  expect(tree.operator.text).toBe('/');

  expect(tree.right.type).toBe(NodeType.PREFIX);
  expect((tree.right as PrefixNode).operator.text).toBe('+');
  expect((tree.right as PrefixNode).value.type).toBe(NodeType.INTEGER);
  expect(((tree.right as PrefixNode).value as IntegerNode).text).toBe('2');
});
