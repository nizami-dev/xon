import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { StringNode } from '~/analysis/lexical/node/string/string-node';
import { NodeType } from '~/analysis/node';
import { syntaxNode } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';

test('string', () => {
  const text = "'abc   def'";
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].text).toBe("'abc   def'");
  expect(tokens[0].$).toBe(NodeType.STRING);
});

test('single line string', () => {
  const code = `'some string'`;
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as StringNode;

  expect(tree.$).toBe(NodeType.STRING);
  expect(tree.text).toBe(code);
});

test('multiline string', () => {
  const code = `'some\nmultiline\n\t\n\t\nstring\n'`;
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as StringNode;

  expect(tree.$).toBe(NodeType.STRING);
  expect(tree.text).toBe(code);
});

test('empty string', () => {
  const code = `''`;
  const source = Source.fromText(code);
  const tree = syntaxNode(source) as StringNode;

  expect(tree.$).toBe(NodeType.STRING);
  expect(tree.text).toBe(code);
});
