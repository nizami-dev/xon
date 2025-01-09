import {
  $IntegerNode,
  $LexicalNode,
  IntegerNode,
  LexicalNode,
  syntaxFromResource,
  UnknownNode,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('unknown 1', () => {
  const text = newText('123 §•∞•456');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node0 = statements.at(0)?.value as IntegerNode;
  const node1 = statements.at(0)?.children.at(1) as UnknownNode;

  expect(statements.count()).toBe(1);
  expect(node0.$).toBe($IntegerNode);
  expect(node0.content.text.toNativeString()).toBe('123');

  expect(node1.hiddenNodes?.count()).toBe(1);
  expect(is(node1.hiddenNodes?.at(0), $LexicalNode)).toBe(true);
  expect((node1.hiddenNodes?.at(0) as LexicalNode)?.text.toNativeString()).toBe(' ');
  expect(node1.text.toNativeString()).toBe('§');
});

test('unknown 2', () => {
  const text = newText('ºª¶');
  const resource = newTextResource(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as UnknownNode;

  expect(statements.count()).toBe(1);
  expect(syntax.diagnosticManager.diagnostics.count()).toBe(5);
  const {start, stop} = syntax.diagnosticManager.diagnostics.at2(0).reference.range;
  expect(resource.data.slice(start.index, stop.index).toNativeString()).toBe('º');
  expect(node.text.toNativeString()).toBe('º');
});