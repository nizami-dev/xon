import { ReturnStatementContext } from '@/grammar/xon-parser';
import { ExpressionTree } from '@/tree/expression/expression-tree';
import { getExpressionTree } from '@/tree/expression/expression-tree-helper';
import { StatementTree } from '@/tree/statement/statement-tree';
import { SourceRange } from '@/util/source-range';

export class ReturnStatementTree extends StatementTree {
  ctx: ReturnStatementContext;
  sourceRange: SourceRange;
  value?: ExpressionTree | null;

  constructor(ctx: ReturnStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = ctx.expression() && getExpressionTree(ctx.expression());
    this.addChildren(this.value);
  }
}
