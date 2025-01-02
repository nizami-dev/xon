import {newArrayData} from '#common';
import '#core';
import {expect, test} from 'vitest';

test('remove', () => {
  const arr = newArrayData([0, 1, 2, -3, 5, 7, 3]);
  const removedItems = arr.remove((x) => x < 1);

  expect(arr.length()).toBe(5);
  expect(removedItems?.length()).toBe(2);
  expect(removedItems?.at(0)).toBe(0);
  expect(removedItems?.at(1)).toBe(-3);
});