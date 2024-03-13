import {Boolean2, Integer} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic, semanticIs} from '../../semantic';
import {LiteralSemantic} from '../literal-semantic';

export interface IntegerLiteralSemantic extends LiteralSemantic {
  $: $Semantic.INTEGER_LITERAL;
  // todo use inner presentation ???
  value: Integer;
}

export function integerLiteralUsageSemantic(reference: SourceReference, value: Integer): IntegerLiteralSemantic {
  const semantic: IntegerLiteralSemantic = {
    $: $Semantic.INTEGER_LITERAL,
    reference,
    value,

    eq(semantic: LiteralSemantic): Boolean2 {
      if (semanticIs<IntegerLiteralSemantic>(semantic, $Semantic.INTEGER_LITERAL)) {
        return this.value === semantic.value;
      }

      return false;
    },
  };

  return semantic;
}