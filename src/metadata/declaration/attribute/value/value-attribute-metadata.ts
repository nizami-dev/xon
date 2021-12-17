import { ValueAttributeNode } from '../../../../tree/attribute/value/value-attribute-node';
import { DeclarationScope } from '../../../declaration-scope';
import { getExpressionMetadata } from '../../../expression/expression-metadata-helper';
import { TypeMetadata } from '../../../type/type-metadata';
import { getTypeMetadata } from '../../../type/type-metadata-helper';
import { AttributeMetadata } from '../attribute-metadata';

export class ValueAttributeMetadata extends AttributeMetadata {
  name: string;

  constructor(private tree: ValueAttributeNode, private scope: DeclarationScope) {
    super();

    this.name = tree.id.text;
  }

  type(): TypeMetadata {
    if (this.tree.type) return getTypeMetadata(this.tree.type, this.scope);

    const expression = getExpressionMetadata(this.tree.value, this.scope);
    return expression.type;
  }
}
