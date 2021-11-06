import { LiteralExpressionContext } from '../../../grammar/xon-parser';
import { getLiteralTree } from '../../literal/literal-tree.helper';
import { LiteralTree } from '../../literal/literal.tree';
import { ExpressionTree } from '../expression.tree';

export class LiteralExpressionTree extends ExpressionTree {
  literal: LiteralTree;

  constructor(public ctx?: LiteralExpressionContext) {
    super();
    if (!ctx) return;

    this.literal = ctx && getLiteralTree(ctx.literal());
  }

  toString(): string {
    return `${this.literal}`;
  }
}
