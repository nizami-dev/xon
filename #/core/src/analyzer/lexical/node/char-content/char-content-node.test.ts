import {newArrayData, newTextData, newTextResource, nothing} from '#common';
import {$CharContentNode, CharContentNode, charLexicalParsers, newLexicalAnalyzer} from '#core';
import {is} from '#typing';

test('char content', () => {
  const text = newTextData("'a'");
  const source = newTextResource(nothing, text);
  const analyzer = newLexicalAnalyzer(source);
  const nodes = newArrayData(Array.from(analyzer.iterator(charLexicalParsers())));
  const node = nodes.at(1) as CharContentNode;

  expect(nodes.length()).toBe(3);
  expect(is(node, $CharContentNode)).toBe(true);
  expect(node.text.toString()).toBe('a');
});
