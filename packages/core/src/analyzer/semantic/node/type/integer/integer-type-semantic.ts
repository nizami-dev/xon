import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Integer, Nothing} from '../../../../../../../lib/src/types';
import {Node} from '../../../../node';
import {createDeclarationScope, DeclarationScope} from '../../../declaration-scope';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {NominalTypeDeclarationSemantic} from '../../declaration/type/nominal/nominal-type-declaration-semantic';
import {AttributeValueDeclarationSemantic} from '../../declaration/value/attribute/attribute-value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface IntegerTypeSemantic extends TypeSemantic {
  $: $.IntegerTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: Integer;
}

export function integerTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  value: Integer,
): IntegerTypeSemantic {
  return {
    $: $.IntegerTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.integerTypeName,
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
      if (is(other, $.IntegerTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return this.declaration?.attributes?.clone() ?? createDeclarationScope(analyzer);
    },
  };
}