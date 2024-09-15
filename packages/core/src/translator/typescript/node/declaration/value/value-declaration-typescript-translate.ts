import {$, is} from '../../../../../$';
import {String2} from '../../../../../../../lib/src/types';
import {ValueDeclarationSemantic} from '../../../../../analyzer/semantic/node/declaration/value/value-declaration-semantic';
import {TypescriptTranslator} from '../../../typescript-translator';

export function valueDeclarationTypescriptTranslate(
  translator: TypescriptTranslator,
  semantic: ValueDeclarationSemantic,
): String2 {
  if (is(semantic, $.AttributeValueDeclarationSemantic)) {
    const name = semantic.alternativeName;
    const type = translator.type(semantic.type);

    return `${name}: ${type}`;
  }

  if (is(semantic, $.ParameterValueDeclarationSemantic)) {
    const name = semantic.name;
    const type = translator.type(semantic.type);

    return `${name}: ${type}`;
  }

  return translator.error(semantic.nodeLink);
}
