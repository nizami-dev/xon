import {newText, newTextResource, nothing} from '#common';
import {$DocumentationNode, DocumentationNode, syntaxFromResource} from '#core';
import {expect, test} from 'vitest';

test('documentation', () => {
  const text = newText('===a===');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const hiddenNodes = syntax.hiddenNodes;

  expect(statements.count()).toBe(0);
  expect(hiddenNodes.count()).toBe(1);

  const node = hiddenNodes.at(0) as DocumentationNode;
  expect(node.$).toBe($DocumentationNode);
  expect(node.description?.text.toNativeString()).toBe('a');
});

test('documentation 2', () => {
  const text = newText('=== abc\n\n\n def==');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const hiddenNodes = syntax.hiddenNodes;

  expect(statements.count()).toBe(0);
  expect(hiddenNodes.count()).toBe(1);

  const node = hiddenNodes.at(0) as DocumentationNode;
  expect(node.$).toBe($DocumentationNode);
  expect(node.description?.text.toNativeString()).toBe(' abc\n\n\n def==');
});

test('documentation labels', () => {
  const text = newText('=== abc\n\n\n def @in a1 b2 c 3     @return _123 _ ===');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const hiddenNodes = syntax.hiddenNodes;

  expect(statements.count()).toBe(0);
  expect(hiddenNodes.count()).toBe(1);

  const node = hiddenNodes.at(0) as DocumentationNode;
  expect(node.$).toBe($DocumentationNode);
  expect(node.description?.text.toNativeString()).toBe(' abc\n\n\n def ');
  expect(node.items?.count()).toBe(2);

  expect(node.items?.at(0)?.operator.text.toNativeString()).toBe('@');
  expect(node.items?.at(0)?.id.text.toNativeString()).toBe('in');
  expect(node.items?.at(0)?.description?.text.toNativeString()).toBe(' a1 b2 c 3     ');

  expect(node.items?.at(1)?.operator.text.toNativeString()).toBe('@');
  expect(node.items?.at(1)?.id.text.toNativeString()).toBe('return');
  expect(node.items?.at(1)?.description?.text.toNativeString()).toBe(' _123 _ ');
});

test('documentation operator id', () => {
  const text = newText('===@abc desc===');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const hiddenNodes = syntax.hiddenNodes;

  expect(statements.count()).toBe(0);
  expect(hiddenNodes.count()).toBe(1);

  const node = hiddenNodes.at(0) as DocumentationNode;
  expect(node.$).toBe($DocumentationNode);
  expect(node.description).toBeFalsy();
  expect(node.items?.count()).toBe(1);

  expect(node.items?.at(0)?.operator.text.toNativeString()).toBe('@');
  expect(node.items?.at(0)?.operator.reference.range.start.index).toBe(3);
  expect(node.items?.at(0)?.operator.reference.range.start.line).toBe(0);
  expect(node.items?.at(0)?.operator.reference.range.start.column).toBe(3);
  expect(node.items?.at(0)?.operator.reference.range.stop.index).toBe(4);
  expect(node.items?.at(0)?.operator.reference.range.stop.line).toBe(0);
  expect(node.items?.at(0)?.operator.reference.range.stop.column).toBe(4);

  expect(node.items?.at(0)?.id.reference.range.start.index).toBe(4);
  expect(node.items?.at(0)?.id.reference.range.start.line).toBe(0);
  expect(node.items?.at(0)?.id.reference.range.start.column).toBe(4);
  expect(node.items?.at(0)?.id.reference.range.stop.index).toBe(7);
  expect(node.items?.at(0)?.id.reference.range.stop.line).toBe(0);
  expect(node.items?.at(0)?.id.reference.range.stop.column).toBe(7);

  expect(node.items?.at(0)?.description?.text.toNativeString()).toBe(' desc');
});
