import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, TokenNode } from '~/analysis/node';
import { Source } from '~/source/source';

test('infix modifier', () => {
  const text = 'infix';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.body().statements[0].nodes as TokenNode[];

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.MODIFIER);
  expect(tokens[0].text).toBe('infix');
});