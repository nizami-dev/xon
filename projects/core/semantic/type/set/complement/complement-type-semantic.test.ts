import {String2, nothing} from '../../../../lib/core';
import {DeclarationNode} from '../../../../parser/node/syntax/declaration/declaration-node';
import {syntaxParse} from '../../../../parser/resource-parser';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {DeclarationKind} from '../../../declaration-manager';
import {DeclarationSemantic} from '../../../declaration/declaration-semantic';
import {ValueDeclarationSemantic} from '../../../declaration/value/value-declaration-semantic';
import {$Semantic, semanticParse} from '../../../semantic';
import {DeclarationTypeSemantic} from '../../declaration/declaration-type-semantic';
import {TypeSemantic} from '../../type-semantic';
import {typeSemanticParse} from '../../type-semantic-parser';
import {ComplementTypeSemantic} from './complement-type-semantic';

test('a is integer or float', () => {
  const text = `
    model Integer
    model Float

    const a: Integer \\ Float
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax);

  expect(semantic.declarationManager.count()).toBe(3);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($Semantic.VALUE_DECLARATION);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[2].item as DeclarationNode;
  expect(constNode.id?.text).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($Semantic.VALUE_DECLARATION);

  const idSemantic = constNode.id?.semantic as DeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = typeSemanticParse(semantic, constNode.type) as ComplementTypeSemantic;
  expect(typeSemantic.$).toBe($Semantic.COMPLEMENT_TYPE);
  expect(typeSemantic.left.$).toBe($Semantic.DECLARATION_TYPE);
  expect((typeSemantic.left as DeclarationTypeSemantic).declaration?.name).toBe('Integer');
  expect(typeSemantic.right.$).toBe($Semantic.DECLARATION_TYPE);
  expect((typeSemantic.right as DeclarationTypeSemantic).declaration?.name).toBe('Float');
});

test('check type', () => {
  const text = `
    model Number
    model Integer: Number
    model Float: Number
    model String

    const a: Number \\ Float
    const b: Integer
    const c: Float
  `;
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const semantic = semanticParse(syntax);

  const getConst = (name: String2) =>
    (semantic.declarationManager.single(DeclarationKind.VALUE, name, nothing, nothing) as ValueDeclarationSemantic)
      .type as TypeSemantic;

  const aType = getConst('a');
  const bType = getConst('b');
  const cType = getConst('c');

  expect(aType.$).toBe($Semantic.COMPLEMENT_TYPE);
  expect(bType.$).toBe($Semantic.DECLARATION_TYPE);
  expect(cType.$).toBe($Semantic.DECLARATION_TYPE);

  expect(bType.is(aType)).toBe(true);
  expect(cType.is(aType)).toBe(false);
});
