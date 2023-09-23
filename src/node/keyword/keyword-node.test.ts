import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, TokenNode } from '~/node/node';
import { Source } from '~/source/source';

test('if keyword', () => {
  const text = 'if';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.body().statements[0].nodes as TokenNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.KEYWORD);
  expect(tokens[0].text).toBe('if');
});
