import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { NodeType } from '~/analysis/node';
import { LadderNode } from '~/analysis/syntax/node/ladder/ladder-node';
import { syntaxNode } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';

test('single expression', () => {
  const code = 'abc\n  a = 1';
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as LadderNode;

  expect(tree.$).toBe(NodeType.LADDER);
  expect(tree.header.$).toBe(NodeType.ID);
  expect((tree.header as IdNode).text).toBe('abc');
  expect(tree.body.nodes.length).toBe(1);
});
