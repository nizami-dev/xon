import { StringNode } from '../../../parser/node/string/string-node';
import { parse } from '../../../parser/parser';
import { $Node, TokenNode } from '../node';

test('string', () => {
  const text = '"abc   def"';
  const nodes = parse(text).root.children as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(nodes.length).toBe(1);
  expect(tree.$).toBe($Node.STRING);
  expect(tree.text).toBe(text);
});

test('multiline string', () => {
  const text = '"some\nmultiline\n\t\n\t\nstring\n"';
  const nodes = parse(text).root.children as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(tree.$).toBe($Node.STRING);
  expect(tree.text).toBe(text);
});

test('empty string', () => {
  const text = '"';
  const nodes = parse(text).root.children as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(tree.$).toBe($Node.STRING);
  expect(tree.text).toBe(text);
  expect(tree.type.name).toBe('String');
  expect(tree.type.base?.name).toBe('Array');
  expect(tree.type.base?.parameters.length).toBe(1);
  expect(tree.type.base?.parameters[0].name).toBe('Char');
  expect(Object.keys(tree.type.attributes).length).toBe(1);
  expect(Object.keys(tree.type.attributes)[0]).toBe('length');
  expect(tree.type.attributes.length.length).toBe(1);
  expect(tree.type.attributes.length[0].name).toBe('Integer');
});

test('not closed', () => {
  const text = '"abc';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.STRING);
  expect(nodes[0].text).toBe('"abc');
});
