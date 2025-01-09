import {$IdNode, parseIdNode} from '#analyzer';
import {charStreamFromText, newText, nothing} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('underscore', () => {
  const text = newText('_');
  const source = charStreamFromText(text);
  const node = parseIdNode(source);

  expect(is(node, $IdNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('_');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

test('underscore letters', () => {
  const text = newText('_abc');
  const source = charStreamFromText(text);
  const node = parseIdNode(source);

  expect(is(node, $IdNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('_abc');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(4);
});

test('underscore gap letters', () => {
  const text = newText('_ abc');
  const source = charStreamFromText(text);
  const node = parseIdNode(source);

  expect(is(node, $IdNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('_');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(1);
});

test('digits gap letters', () => {
  const text = newText('123 abc');
  const source = charStreamFromText(text);
  const node = parseIdNode(source);

  expect(node).toBe(nothing);
});

test('letters and digits', () => {
  const text = newText('abc123');
  const source = charStreamFromText(text);
  const node = parseIdNode(source);

  expect(is(node, $IdNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('abc123');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(6);
});

test('letters and underscore', () => {
  const text = newText('abc_');
  const source = charStreamFromText(text);
  const node = parseIdNode(source);

  expect(is(node, $IdNode)).toBe(true);
  expect(node?.text.toNativeString()).toBe('abc_');
  expect(node?.range.start.index).toBe(0);
  expect(node?.range.stop.index).toBe(4);
});