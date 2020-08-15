import { parseCode } from '../../../parse';
import { FloatLiteralTree } from './float-literal.tree';

test('positive number', () => {
    const code = '123.123';
    const tree = parseCode(code, FloatLiteralTree);
    expect(tree.value).toBe(123.123);
});

test('zero number', () => {
    const code = '0.0';
    const tree = parseCode(code, FloatLiteralTree);
    expect(tree.value).toBe(0.0);
});

test('underscore in number', () => {
    const code = '5_999_245.15463_64';
    const tree = parseCode(code, FloatLiteralTree);
    expect(tree.value).toBe(5999245.1546364);
});
