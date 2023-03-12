import { LadderNode } from '~/node/bodyable/bodyable-expression-tree';
import { NodeType } from '~/node/node';
import { parseExpression } from '~/util/parse';

test('single expression', () => {
  const code = 'abc\n  a = 1';
  const tree = parseExpression(code) as LadderNode;

  expect(tree.nodeType).toBe(NodeType.LADDER);
  expect(tree.header.nodeType).toBe(NodeType.ID);
  expect(tree.header.text).toBe('abc');
  expect(tree.body.source.nodes.length).toBe(1);
});
