import { parse } from '../../../util/parse';
import { defaultFormatterConfig, FormatterConfig } from '../../formatter-config';
import { getStatementFormatter } from '../statement-formatter-helper';
import { ForStatementFormatter } from './for-statement-formatter';

test('value index', () => {
  const code = 'for val, key in [a,b,c]: make()';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ForStatementFormatter);
  expect(formatter.toString()).toBe('for val, key in [a, b, c]: make()');
  expect(formatter.indent(2).toString()).toBe('for val, key in [a, b, c]: make()');
});

test('value', () => {
  const code = 'for val in [a,b,c]: make()';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ForStatementFormatter);
  expect(formatter.toString()).toBe('for val in [a, b, c]: make()');
  expect(formatter.indent(2).toString()).toBe('for val in [a, b, c]: make()');
});

test('no value and index', () => {
  const code = 'for [a,b,c]: make()';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ForStatementFormatter);
  expect(formatter.toString()).toBe('for [a, b, c]: make()');
  expect(formatter.indent(2).toString()).toBe('for [a, b, c]: make()');
});
