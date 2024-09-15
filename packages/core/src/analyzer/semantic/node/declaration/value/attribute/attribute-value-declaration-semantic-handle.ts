import {nothing, Nothing} from '../../../../../../../../lib/src/types';
import {DeclarationNode} from '../../../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {functionTypeSemantic} from '../../../type/function/function-type-semantic';
import {parametersParse} from '../../../type/function/function-type-semantic-parser';
import {TypeSemantic} from '../../../type/type-semantic';
import {typeSemanticParse} from '../../../type/type-semantic-parser';
import {unknownTypeSemantic} from '../../../type/unknown/unknown-type-semantic';
import {AttributeValueDeclarationSemantic} from './attribute-value-declaration-semantic';

export function attributeValueDeclarationSemanticHandle(
  analyzer: SemanticAnalyzer,
  semantic: AttributeValueDeclarationSemantic,
  node: DeclarationNode,
): void {
  let generics: ReturnType<typeof parametersParse> | Nothing = nothing;
  let parameters: ReturnType<typeof parametersParse> | Nothing = nothing;
  let type: TypeSemantic = unknownTypeSemantic(analyzer, node.type?.value ?? node.assign?.value ?? node);

  if (node.generics) {
    generics = parametersParse(analyzer, node, node.generics);
  }

  if (node.parameters) {
    parameters = parametersParse(analyzer, node, node.parameters);
  }

  if (node.type) {
    type = typeSemanticParse(analyzer, node.type.value);
  }

  if (node.assign) {
    const valueType = typeSemanticParse(analyzer, node.assign.value);

    if (!node.type) {
      type = valueType;
    } else if (!valueType.is(type)) {
      analyzer.diagnosticManager.addPredefinedDiagnostic(node.assign.value.reference, (x) => x.wrongType());
    }
  }

  if (node.parameters && parameters) {
    type = functionTypeSemantic(analyzer, node.parameters, parameters, type);
  }

  if (node.generics && generics) {
    type = functionTypeSemantic(analyzer, node.generics, generics, type);
  }

  semantic.type = type;
}
