import {
  $BraceGroupNode,
  $BracketCloseNode,
  $BracketGroupNode,
  $BracketOpenNode,
  $ParenCloseNode,
  $ParenGroupNode,
  $ParenOpenNode,
  BraceGroupNode,
  BracketGroupNode,
  InfixNode,
  IntegerNode,
  ParenGroupNode,
  syntaxFromResource,
} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {predefinedDiagnostics} from '#diagnostic';
import {is} from '#typing';
import {expect, test} from 'vitest';

test('empty closed', () => {
  const text = newText('()');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as ParenGroupNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $ParenGroupNode)).toBe(true);
  expect(is(node.open, $ParenOpenNode)).toBe(true);
  expect(is(node.close, $ParenCloseNode)).toBe(true);
  expect(node.items.count()).toBe(0);
});

test('validate close pair', () => {
  const text = newText('(');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as ParenGroupNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $ParenGroupNode)).toBe(true);
  expect(is(node.open, $ParenOpenNode)).toBe(true);
  expect(node.close).toBe(nothing);
  expect(node.items.count()).toBe(0);
  expect(syntax.diagnosticManager.diagnostics.count()).toBe(1);

  const diagnosticMessage = predefinedDiagnostics(node.reference).expectCloseToken(node.open.text).message;

  expect(syntax.diagnosticManager.diagnostics.at(0)?.message.actual.toNativeString()).toBe(
    diagnosticMessage.actual.toNativeString(),
  );
  expect(syntax.diagnosticManager.diagnostics.at(0)?.message.expect?.toNativeString()).toBe(
    diagnosticMessage.expect?.toNativeString(),
  );
});

test('a in group', () => {
  const text = newText('(a)');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as ParenGroupNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($ParenGroupNode);
});

test('empty object', () => {
  const text = newText('{}');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BraceGroupNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($BraceGroupNode);
  expect(node.items.count()).toBe(0);
});

test('single item', () => {
  const text = newText('[123 456]');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BracketGroupNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $BracketGroupNode)).toBe(true);
  expect(node.items.count()).toBe(1);
  expect((node.items.at(0)?.value as IntegerNode).content.text.toNativeString()).toBe('123');
});

test('single comma', () => {
  const text = newText('[,]');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BracketGroupNode;

  expect(statements.count()).toBe(1);
  expect(node.items.count()).toBe(2);
  expect(is(node, $BracketGroupNode)).toBe(true);
  expect(is(node.open, $BracketOpenNode)).toBe(true);
  expect(is(node.close, $BracketCloseNode)).toBe(true);
});

test('empty not closed', () => {
  const text = newText('[');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BracketGroupNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $BracketGroupNode)).toBe(true);
  expect(is(node.open, $BracketOpenNode)).toBe(true);
  expect(node.close).toBe(nothing);
  expect(node.items.count()).toBe(0);
});

test('inner group', () => {
  const text = newText('[()]');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BracketGroupNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $BracketGroupNode)).toBe(true);
  expect(node.items.count()).toBe(1);

  const innerGroup = node.items.at(0)?.value as ParenGroupNode;
  expect(is(innerGroup, $ParenGroupNode)).toBe(true);
  expect(innerGroup.items.count()).toBe(0);
});

test('inner empty group', () => {
  const text = newText('[[[]]]');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BracketGroupNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $BracketGroupNode)).toBe(true);
  expect(node.items.count()).toBe(1);

  const innerGroup = node.items.at(0)?.value as ParenGroupNode;
  expect(is(innerGroup, $BracketGroupNode)).toBe(true);
  expect(innerGroup.items.count()).toBe(1);

  const innerInnerGroup = innerGroup.items.at(0)?.value as ParenGroupNode;
  expect(is(innerInnerGroup, $BracketGroupNode)).toBe(true);
  expect(innerInnerGroup.items.count()).toBe(0);
});

test('two integers no comma and ws at the end', () => {
  const text = newText('[1, 2]');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BracketGroupNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $BracketGroupNode)).toBe(true);
  expect(node.items.count()).toBe(2);
  expect((node.items.at(0)?.value as IntegerNode).content.text.toNativeString()).toBe('1');
  expect((node.items.at(1)?.value as IntegerNode).content.text.toNativeString()).toBe('2');
});

test('two integers and comma no ws at the end', () => {
  const text = newText('[1, 2,]');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BracketGroupNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $BracketGroupNode)).toBe(true);
  expect(node.items.count()).toBe(3);
  expect((node.items.at(0)?.value as IntegerNode).content.text.toNativeString()).toBe('1');
  expect((node.items.at(1)?.value as IntegerNode).content.text.toNativeString()).toBe('2');
});

test('two integers and comma and ws', () => {
  const text = newText('[1, 2, ]');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BracketGroupNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $BracketGroupNode)).toBe(true);
  expect(node.items.count()).toBe(3);
  expect((node.items.at(0)?.value as IntegerNode).content.text.toNativeString()).toBe('1');
  expect((node.items.at(1)?.value as IntegerNode).content.text.toNativeString()).toBe('2');
});

test('array on several lines', () => {
  const text = newText(`[1,
                2+2
                3,
     4,    6+6]`);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BracketGroupNode;

  expect(statements.count()).toBe(1);
  expect(is(node, $BracketGroupNode)).toBe(true);
  expect(node.items.count()).toBe(4);
  expect((node.items.at(0)?.value as IntegerNode).content.text.toNativeString()).toBe('1');
  expect((node.items.at(1)?.value as InfixNode).operator.text.toNativeString()).toBe('+');
});

test('debug 1', () => {
  const text = newText('[1, , 2 ]');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BracketGroupNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($BracketGroupNode);
  expect(node.items.count()).toBe(3);
  expect((node.items.at(0)?.value as IntegerNode).content.text.toNativeString()).toBe('1');
  expect((node.items.at(2)?.value as IntegerNode).content.text.toNativeString()).toBe('2');
});

test('empty object', () => {
  const text = newText('{}');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as BraceGroupNode;

  expect(statements.count()).toBe(1);
  expect(node.$).toBe($BraceGroupNode);
  expect(node.items.count()).toBe(0);
});

// test('group with nl', () => {
//   const text = `  (123 ,456
//   7)`;
//   const source = textResourceFrom(nothing, text);
//   const syntax = syntaxParse(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as ParenGroupNode;

//   expect(statements.length()).toBe(1);
//   expect(node.$).toBe($Node.GROUP);
//   expect(node.items.length()).toBe(2);
//   expect((node.items.at(0)?.value as IntegerNode).text.toString()).toBe('123');
//   expect(node.items.at(0)?.statements.length()).toBe(1);
//   expect((node.items.at(1)?.value as IntegerNode).text.toString()).toBe('456');
//   expect(node.items[1]?.statements.length()).toBe(1);
//   expect(node.items[1]?.statements[0].body.length()).toBe(1);
//   expect((node.items[1]?.statements[0].body[0].item as IntegerNode).text.toString()).toBe('7');
// });