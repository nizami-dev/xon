import {$StringOpenNode, parseStringOpenNode} from '#analyzer';
import {charStreamFromText, newText} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('string open', () => {
  const text = newText('"a');
  const source = charStreamFromText(text);
  const node = parseStringOpenNode(source);

  expect(is(node, $StringOpenNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('"');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});