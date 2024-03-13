import {sourceFromText} from '../../../../../source/source';
import {parseSyntax} from '../../../../syntax';
import {$Node} from '../../../node';
import {IntegerLiteralNode} from './integer-literal-node';

test('integer', () => {
  const text = '123';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as IntegerLiteralNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INTEGER);
  expect(node.text).toBe('123');
});

test('zero int number', () => {
  const text = '0';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as IntegerLiteralNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.INTEGER);
  expect(node.text).toBe('0');
});