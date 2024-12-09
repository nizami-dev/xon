import {newTextData, newTextResource, nothing} from '#common';
import {
  DeclarationNode,
  DeclarationSemantic,
  newTypescriptTranslator,
  semanticFromResource,
  TEST_SEMANTIC_CONFIG,
} from '#core';

test('type union', () => {
  const text = newTextData('a: Integer | String');
  const resource = newTextResource(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as DeclarationSemantic;
  const translator = newTypescriptTranslator(semanticAnalyzer);
  const translated = translator.valueDeclaration(semantic);

  expect(translated).toBe('a: Integer | String');
});

test('type function', () => {
  const text = newTextData('infix + (a: Integer, b: Integer): Integer');
  const resource = newTextResource(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as DeclarationSemantic;
  const translator = newTypescriptTranslator(semanticAnalyzer);
  const translated = translator.valueDeclaration(semantic);

  expect(translated).toBe('__plus__: (a: Integer, b: Integer) => Integer');
});