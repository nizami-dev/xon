import { ExpressionTree } from '../../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../../tree/expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { IdToken } from '../../../tree/id-token';
import { IdTokenMetadata } from '../../declaration-metadata';
import { DeclarationScope } from '../declaration-scope';
import { ExpressionMetadata } from './expression-metadata';

export function expressionHandler(
  tree: ExpressionTree,
  scope: DeclarationScope,
): ExpressionMetadata {
  if (tree instanceof LiteralExpressionTree) {
    const literalName = tree.literal.constructor.name.replace('LiteralTree', '');
    tree.metadata = new ExpressionMetadata(scope.get(literalName));
  } else if (tree instanceof IdExpressionTree) {
    tree.metadata = new ExpressionMetadata(scope.get(tree.id.text));
    tree.id = new IdTokenMetadata(tree.metadata.type, )
  }

  if (!tree.metadata) throw new Error(`Metadata not found for '${tree.constructor.name}'`);
  if ('id' in tree && tree['id'] instanceof IdToken && !tree['id'].metadata)
    throw new Error(`Metadata not set for id token in '${tree.constructor.name}'`);
  return tree.metadata;
}
