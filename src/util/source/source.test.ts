import { Source } from '~/util/source/source';

test('1', () => {
  const source = Source.fromPath('src/util/source/test-files/1.xon');

  expect(source.text).toBe('abc = 123\n');
});
