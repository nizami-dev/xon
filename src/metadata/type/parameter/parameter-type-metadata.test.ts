import { parseExpression } from '../../../util/parse';
import { DefinitionMetadata } from '../../declaration/definition/definition-metadata';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { getTypeMetadata } from '../type-metadata-helper';
import { ParameterTypeMetadata } from './parameter-type-metadata';

test('true', () => {
  const code = 'true';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeMetadata(tree, scope) as ParameterTypeMetadata;

  expect(metadata.attributesScope().all().length).toBe(3);
});


test('false is Boolean', () => {
  const code = 'false';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getTypeMetadata(tree, scope);

  const codeBoolean = 'Boolean';
  const treeBoolean = parseExpression(codeBoolean);
  const metadataNone = getTypeMetadata(treeBoolean, scope);

  const codeInteger = 'Integer';
  const treeInteger = parseExpression(codeInteger);
  const metadataFloat = getTypeMetadata(treeInteger, scope);

  expect(metadata.is(metadataNone)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
