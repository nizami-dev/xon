import { ArrayExpressionContext } from '../../../grammar/xon-parser';
import { getExpressionsTrees } from '../expression-tree.helper';
import { ExpressionTree } from '../expression.tree';

export class ArrayExpressionTree extends ExpressionTree {
  items: ExpressionTree[];

  constructor(public ctx?: ArrayExpressionContext) {
    super();
    if (!ctx) return;

    this.items = getExpressionsTrees(ctx.expression());
  }

  toString(): string {
    return `[${this.items.join(', ')}]`;
  }
}
