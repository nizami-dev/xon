import {$IntegerNode, IntegerNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {expect, test} from 'vitest';

test('integer', () => {
  const text = newText('123');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as IntegerNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($IntegerNode);
  expect(node.content.text.toNativeString()).toBe('123');
});

test('zero int number', () => {
  const text = newText('0');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as IntegerNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($IntegerNode);
  expect(node.content.text.toNativeString()).toBe('0');
});