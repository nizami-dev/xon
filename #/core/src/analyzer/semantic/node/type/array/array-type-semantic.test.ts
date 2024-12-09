import {newTextData, newTextResource, nothing} from '#common';
import {
  ArrayTypeSemantic,
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  IntegerTypeSemantic,
  StringTypeSemantic,
  syntaxFromResource,
  TEST_SEMANTIC_CONFIG,
  typeNodeType,
} from '#core';
import {$} from '#typing';

test('a is array', () => {
  const text = newTextData(`
    const a: [1, 2, "A"]
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).$).toBe(
    $.AttributeValueDeclarationSemantic,
  );
  expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).name).toBe('a');

  const constNode = syntax.statements[0].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as ArrayTypeSemantic)
    : nothing;
  expect(typeSemantic?.$).toBe($.ArrayTypeSemantic);
  expect(typeSemantic?.items.length).toBe(3);
  expect((typeSemantic?.items[0] as IntegerTypeSemantic).value).toBe(1);
  expect((typeSemantic?.items[1] as IntegerTypeSemantic).value).toBe(2);
  expect((typeSemantic?.items[2] as StringTypeSemantic).value).toBe('A');
});