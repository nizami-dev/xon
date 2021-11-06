import { InstanceExpressionContext } from '../../../grammar/xon-parser';
import { IdToken } from '../../id-token';
import { ExpressionTree } from '../expression.tree';

export class InstanceExpressionTree extends ExpressionTree {
  id: IdToken;

  constructor(public ctx?: InstanceExpressionContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
  }

  toString(): string {
    return `${this.id}`;
  }
}
