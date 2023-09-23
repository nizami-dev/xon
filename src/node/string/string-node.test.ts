import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, TokenNode } from '~/analysis/node';
import { StringNode } from '~/node/string/string-node';
import { Source } from '~/source/source';

test('string', () => {
  const text = "'abc   def'";
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(nodes.length).toBe(1);
  expect(tree.$).toBe(NodeType.STRING);
  expect(tree.text).toBe(text);
});

test('multiline string', () => {
  const text = `'some\nmultiline\n\t\n\t\nstring\n'`;
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(tree.$).toBe(NodeType.STRING);
  expect(tree.text).toBe(text);
});

test('empty string', () => {
  const text = "''";
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(tree.$).toBe(NodeType.STRING);
  expect(tree.text).toBe(text);
});

test('not closed', () => {
  const text = "'abc";
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.STRING);
  expect(nodes[0].text).toBe("'abc");
});