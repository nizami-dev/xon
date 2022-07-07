import { none } from '../../lib/core';
import { parseDefinition, parseSourceFile } from '../../util/parse';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { ParameterTree } from '../parameter/parameter-tree';
import { SourceTree } from '../source/source-tree';
import { DeclarationStatementTree } from '../statement/declaration/declaration-statement-tree';
import { DefinitionTree } from './definition-tree';

test('model animal', () => {
  const code = 'model Animal';
  const tree = parseDefinition(code) as DefinitionTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.base).toBe(null);
  expect(tree.attributes.length).toBe(0);
});

test('object with parameters', () => {
  const code = 'object Cat(name: String) is Animal';
  const tree = parseDefinition(code) as DefinitionTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('object');
  expect(tree.name.text).toBe('Cat');
  expect((tree.base as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name.text).toBe('name');
  expect((tree.parameters[0].type as IdExpressionTree).name.text).toBe('String');
  expect(tree.attributes.length).toBe(0);
});

test('model cat', () => {
  const code = 'model Cat is Animal';
  const tree = parseDefinition(code) as DefinitionTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Cat');
  expect((tree.base as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.attributes.length).toBe(0);
});

test('model animal with only attribute', () => {
  const code = 'model Animal\n   abc: Integer';
  const tree = parseDefinition(code) as DefinitionTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.base).toBe(none);
  expect(tree.attributes.length).toBe(1);

  const attributes = tree.attributes.map(
    (x) => (x as DeclarationStatementTree).declaration as ParameterTree,
  );
  expect(attributes[0].name.text).toBe('abc');
  expect((attributes[0].type as IdExpressionTree).name.text).toBe('Integer');
});

test('1-error.xon', () => {
  const tree = parseSourceFile('src/tree/definition/test-files/1-error.xon');

  expect(tree).toBeInstanceOf(SourceTree);
  expect(tree.issues.length).toBe(1);
  expect(tree.issues[0].sourceRange.start.line).toBe(4);
  expect(tree.issues[0].sourceRange.start.column).toBe(14);
  expect(tree.issues[0].sourceRange.stop.line).toBe(4);
  expect(tree.issues[0].sourceRange.stop.column).toBe(20);
});

test('2-error.xon', () => {
  const tree = parseSourceFile('src/tree/definition/test-files/2-error.xon');

  expect(tree).toBeInstanceOf(SourceTree);
  expect(tree.issues.length).toBe(1);
  expect(tree.issues[0].sourceRange.start.line).toBe(6);
  expect(tree.issues[0].sourceRange.start.column).toBe(7);
  expect(tree.issues[0].sourceRange.stop.line).toBe(6);
  expect(tree.issues[0].sourceRange.stop.column).toBe(12);
});
