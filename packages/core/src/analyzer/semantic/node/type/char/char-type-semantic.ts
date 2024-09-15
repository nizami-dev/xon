import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Char, Nothing} from '../../../../../../../lib/src/types';
import {Node} from '../../../../node';
import {DeclarationScope, createDeclarationScope} from '../../../declaration-scope';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {NominalTypeDeclarationSemantic} from '../../declaration/type/nominal/nominal-type-declaration-semantic';
import {AttributeValueDeclarationSemantic} from '../../declaration/value/attribute/attribute-value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface CharTypeSemantic extends TypeSemantic {
  $: $.CharTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: Char;
}

export function charTypeSemantic(analyzer: SemanticAnalyzer, nodeLink: Node, value: Char): CharTypeSemantic {
  return {
    $: $.CharTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.charTypeName,
    ),
    value,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (is(other, $.IdTypeSemantic) && other.declaration) {
        return this.declaration?.eq(other.declaration) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $.CharTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return this.declaration?.attributes?.clone() ?? createDeclarationScope(analyzer);
    },
  };
}