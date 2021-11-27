import { InfixExpressionTree } from '../../../tree/expression/infix-expression/infix-expression.tree';
import { DeclarationScope } from '../../declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { TypeMetadata } from '../../type/type-metadata';
import { ExpressionMetadata } from '../expression-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

export class InfixExpressionMetadata extends ExpressionMetadata {
  type: TypeMetadata;

  constructor(tree: InfixExpressionTree, scope: DeclarationScope) {
    super();

    const declaration = getExpressionMetadata(tree.left, scope).type.declaration;
    const rightType = getExpressionMetadata(tree.right, scope).type;
    const attribute = declaration.getMethodAttribute(tree.id.text, [], [rightType]);
    if (attribute.type instanceof FunctionTypeMetadata) this.type = attribute.type.resultType;
    else throw new Error('Wrong method type');
  }
}
