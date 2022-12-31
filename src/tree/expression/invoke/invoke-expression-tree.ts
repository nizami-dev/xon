import { InvokeExpressionContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { getArgumentTree } from '~/tree/argument/argument-tree-helper';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { getExpressionTree } from '~/tree/expression/expression-tree-helper';

export class InvokeExpressionTree extends ExpressionTree {
  ctx: InvokeExpressionContext;
  sourceSpan: SourceSpan;
  instance: ExpressionTree;
  generics: ArgumentTree[] | null = null;
  arguments: ArgumentTree[] | null = null;
  indexers: ArgumentTree[] | null = null;

  constructor(ctx: InvokeExpressionContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.instance = getExpressionTree(ctx.expression());

    const generics = ctx.arguments().find((x) => x.OPEN().text === '{');
    this.generics = generics?.argument().map(getArgumentTree) ?? null;

    const args = ctx.arguments().find((x) => x.OPEN().text === '(');
    this.arguments = args?.argument().map(getArgumentTree) ?? null;

    const indexers = ctx.arguments().find((x) => x.OPEN().text === '[');
    this.indexers = indexers?.argument().map(getArgumentTree) ?? null;

    this.addChildren(this.instance, ...(this.generics ?? []), ...(this.arguments ?? []));
  }
}
