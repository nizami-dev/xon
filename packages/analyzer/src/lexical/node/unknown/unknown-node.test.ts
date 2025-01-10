import {$UnknownNode, parseUnknownNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('unknown', () => {
  const text = newText('abc');
  const source = charStreamFromText(text);
  const node = parseUnknownNode(source);

  expect(node).toBeTruthy();
  expect(is(node, $UnknownNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('a');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});
