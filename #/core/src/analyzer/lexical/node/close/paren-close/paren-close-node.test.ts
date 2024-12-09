import {newTextData, newTextResource, nothing} from '#common';
import {ParenCloseNode, syntaxFromResource} from '#core';
import {$} from '#typing';

test('close paren', () => {
  const text = newTextData(')');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ParenCloseNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ParenCloseNode);
  expect(node.text.toString()).toBe(')');
});