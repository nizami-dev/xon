import { readFileSync, writeFileSync } from 'fs';
import { getParser } from '~/compiler/parser/parser';
import { defaultFormatterConfig } from '~/formatter/formatter-config';
import { SourceFormatter } from '~/formatter/source/source-formatter';
import { getSourceFormatter } from '~/formatter/source/source-formatter-helper';

test('has type', () => {
  const code = 'object Integer (a,b,c)  :   Number\n  abc\n\n\n\ndef\n';
  const ctx = getParser(code).source();
  const formatter = getSourceFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(SourceFormatter);
  expect(formatter.toString()).toBe('object Integer(a, b, c): Number\n  abc\n\ndef\n');
});

test('1.xon', () => {
  const code = readFileSync('src/formatter/source/test-files/1.source.xon').toString();
  const ctx = getParser(code).source();
  const formatter = getSourceFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(SourceFormatter);
  writeFileSync('src/formatter/source/test-files/1.actual.xon', formatter.toString());
  const expectString = readFileSync('src/formatter/source/test-files/1.expect.xon').toString();
  expect(formatter.toString()).toBe(expectString);
});
