import { PrefixExpressionTree } from '../../../tree/expression/prefix/prefix-expression-tree';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { ValueMetadata } from '../value-metadata';

export class PrefixValueMetadata extends ValueMetadata {
  constructor(tree: PrefixExpressionTree, scope: DeclarationScope) {
    super();
    // const declaration = getExpressionMetadata(tree.value, scope).type.declaration;
    // const attributeType = declaration.attribute(tree.id.text, [], [], none).type([]);
    // if (attributeType instanceof LambdaTypeMetadata) this.type = attributeType.resultType;
    // else throw new Error('Wrong method type');
  }

  declaration(): DeclarationScope {
    throw new Error('Method not implemented.');
  }
}