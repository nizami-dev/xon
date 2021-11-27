import { InfixExpressionTree } from '../../../tree/expression/infix-expression/infix-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class InfixExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: InfixExpressionTree, scope: DeclarationScope) {
    super();

    const declaration = getExpressionMetadata(tree.left, scope).type.declaration;
    const rightType = getExpressionMetadata(tree.right, scope).type;
    this.type = declaration.get(tree.id.text);
  }
}
