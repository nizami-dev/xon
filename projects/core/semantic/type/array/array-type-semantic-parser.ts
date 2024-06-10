import {ArrayNode} from 'projects/core/analyzer/node/group/group-node';
import {Nothing, nothing} from '../../../../lib/types';
import {$Node, Node, is} from '../../../analyzer/node/node';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {DeclarationKind} from '../../declaration-manager';
import {isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../type-semantic-parser';
import {ArrayTypeSemantic, integerTypeSemantic} from './array-type-semantic';

export function arrayTypeSemanticTryParse(context: SemanticContext, node: Node): ArrayTypeSemantic | Nothing {
  if (!is<ArrayNode>(node, $Node.ARRAY)) {
    return nothing;
  }

  const declaration = context.declarationManager.single(
    DeclarationKind.TYPE,
    context.config.literalTypeNames.integerTypeName,
    nothing,
    nothing,
  );

  if (!declaration || !isTypeDeclarationSemantic(declaration)) {
    context.issueManager.addError(
      node.range,
      ISSUE_MESSAGE.declarationNotFound(context.config.literalTypeNames.integerTypeName),
    );

    return nothing;
  }

  const reference = context.createReference(node);
  const items = node.items.map((x) => typeSemanticParse(context, x.value));
  const semantic = integerTypeSemantic(reference, declaration, items);

  return semantic;
}
