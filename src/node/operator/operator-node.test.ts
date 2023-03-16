import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';
import { PostfixNode } from '~/node/postfix/postfix-node';
import { evaluate } from '~/util/evaluate';

test('after integer', () => {
  const code = '1!';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PostfixNode;

  expect(tree.type).toBe(NodeType.POSTFIX);
  expect(source.nodeText(tree.operator)).toBe('!');
  expect(evaluate(source, tree.value)).toBe(1);
});

test('after invoke', () => {
  const code = 'ctx.parameters[]!';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as PostfixNode;

  expect(tree.type).toBe(NodeType.POSTFIX);
  expect(source.nodeText(tree.operator)).toBe('!');
});
