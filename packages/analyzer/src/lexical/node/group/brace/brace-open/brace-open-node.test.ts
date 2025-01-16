import {$BraceOpenNode, parseBraceOpenNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('open brace', () => {
  const text = newText('{');
  const source = charStreamFromText(text);
  const node = parseBraceOpenNode(source);

  expect(is(node, $BraceOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('{');
});