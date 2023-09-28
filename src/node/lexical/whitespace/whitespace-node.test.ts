import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/node/lexical-node';
import { NodeType } from '~/node/node';
import { Source } from '~/source/source';

test('whitespace', () => {
  const text = '    ';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const statements = lexer.body().statements;
  const nodes = statements[0].nodes as LexicalNode[];

  expect(statements.length).toBe(1);
  expect(statements[0].hidden.length).toBe(1);
  expect(statements[0].hidden[0].text).toBe('    ');
  expect(statements[0].hidden[0].$).toBe(NodeType.WHITESPACE);
  expect(nodes.length).toBe(0);
});
