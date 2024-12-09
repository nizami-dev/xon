import {newTextData, newTextResource, nothing, Text} from '#common';
import {
  AttributeValueDeclarationSemantic,
  createSemanticAnalyzer,
  DeclarationNode,
  IdTypeSemantic,
  IntersectionTypeSemantic,
  syntaxFromResource,
  typeNodeType,
  TypeSemantic,
} from '#core';
import {$} from '#typing';

test('a is integer', () => {
  const text = newTextData(`
    type Integer
    type Float

    const a: Integer & Float
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).$).toBe(
    $.AttributeValueDeclarationSemantic,
  );
  expect(semantic.declarationManager.declarations.get(newTextData('a'))?.at2(0).name).toBe('a');

  const constNode = syntax.statements[2].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.AttributeValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as AttributeValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as IntersectionTypeSemantic)
    : nothing;
  expect(typeSemantic?.$).toBe($.IntersectionTypeSemantic);
  expect(typeSemantic?.left.$).toBe($.IdTypeSemantic);
  expect((typeSemantic?.left as IdTypeSemantic).declaration?.name).toBe('Integer');
  expect(typeSemantic?.right.$).toBe($.IdTypeSemantic);
  expect((typeSemantic?.right as IdTypeSemantic).declaration?.name).toBe('Float');
});

test('check type', () => {
  const text = newTextData(`
    type Number
    type Integer: Number
    type Float: Number
    type String

    const a: Number & Float
    const b: Float
    const c: String
  `);
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax);

  const getConst = (name: Text) =>
    (
      semantic.declarationManager.find(
        $.ValueDeclarationSemantic,
        name,
        nothing,
        nothing,
      ) as AttributeValueDeclarationSemantic
    ).type as TypeSemantic;

  const aType = getConst(newTextData('a'));
  const bType = getConst(newTextData('b'));
  const cType = getConst(newTextData('c'));

  expect(aType.$).toBe($.IntersectionTypeSemantic);
  expect(bType.$).toBe($.IdTypeSemantic);
  expect(cType.$).toBe($.IdTypeSemantic);

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
