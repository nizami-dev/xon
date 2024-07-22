import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Nothing} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {DeclarationManager} from '../../../declaration-manager';
import {NominalTypeDeclarationSemantic} from '../../declaration/type/nominal/nominal-type-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface ArrayTypeSemantic extends TypeSemantic {
  $: $.ArrayTypeSemantic;
  declaration: NominalTypeDeclarationSemantic;
  items: (TypeSemantic | Nothing)[];
}

export function integerTypeSemantic(
  reference: TextResourceRange,
  declaration: NominalTypeDeclarationSemantic,
  items: ArrayTypeSemantic['items'],
): ArrayTypeSemantic {
  return {
    $: $.ArrayTypeSemantic,
    reference,
    declaration,
    items,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (is(other, $.TypeDeclarationSemantic)) {
        return this.declaration.eq(other) || (this.declaration.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $.ArrayTypeSemantic)) {
        return this.items === other.items;
      }

      return false;
    },

    attributes(): DeclarationManager {
      throw new Error('Not implemented');
    },
  };
}
