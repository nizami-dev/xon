import {Boolean2} from '#common';
import {
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SemanticAnalyzer,
  TypeSemantic,
  corePackageType,
  isInSet,
  newDeclarationScope,
} from '#core';
import {is} from '#typing';

export type InvokeTypeSemantic = TypeSemantic & {
  instance: TypeSemantic;
  // todo use a separate semantic than array
  args: TypeSemantic[];
};

export const $InvokeTypeSemantic = corePackageType<InvokeTypeSemantic>('InvokeTypeSemantic', $TypeSemantic);

export function invokeTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  instance: TypeSemantic,
  args: TypeSemantic[],
): InvokeTypeSemantic {
  return {
    $: $InvokeTypeSemantic,
    nodeLink,
    instance,
    args,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return newDeclarationScope();
      // throw new Error('Not implemented');
    },
  };
}