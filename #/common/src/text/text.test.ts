import {$Text, is, newTextData} from '#common';

test('text data', () => {
  const a = newTextData('ABC');

  expect(is(a, $Text)).toBe(true);
});