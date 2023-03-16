import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';
import { PrefixNode } from '~/node/prefix/prefix-node';
import { evaluate } from '~/util/evaluate';

test('negative integer', () => {
  const code = '- 1';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PrefixNode;

  expect(tree.type).toBe(NodeType.PREFIX);
  expect(evaluate(source, tree.value)).toBe(1);
});

test('not boolean', () => {
  const code = '!  true';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PrefixNode;

  expect(tree.type).toBe(NodeType.PREFIX);
});

test('double not', () => {
  const code = '!!ctx.parameters[]';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PrefixNode;

  expect(tree.type).toBe(NodeType.PREFIX);
});

// test('less operator', () => {
//   const code = '<123';
//   const source = Source.fromText(code);
//   const tree = parseExpression(source) as PrefixNode;

//   expect(tree.type).toBe(NodeType.PREFIX);
//   expect(source.nodeText(tree)).toBe('<');
//   expect(source.nodeText(tree.value)).toBe('123');
// });

// test('great operator', () => {
//   const code = '>123';
//   const source = Source.fromText(code);
//   const tree = parseExpression(source) as PrefixNode;

//   expect(tree.type).toBe(NodeType.PREFIX);
//   expect(source.nodeText(tree)).toBe('>');
//   expect(source.nodeText(tree.value)).toBe('123');
// });
