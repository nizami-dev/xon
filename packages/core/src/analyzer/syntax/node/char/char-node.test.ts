import {nothing, textResourceFromData} from '#common';
import {CharNode, syntaxFromResource} from '#core';
import {$} from '#typing';

test('a', () => {
  const text = "'a'";
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as CharNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.CharNode);
  expect(node.content?.text.toString()).toBe(text.slice(1, -1));
});
