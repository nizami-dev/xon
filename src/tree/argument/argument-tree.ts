import { ArgumentContext } from '@/grammar/xon-parser';
import { Null2, String2 } from '@/lib/core';
import { ExpressionTree } from '@/tree/expression/expression-tree';
import { getExpressionTree } from '@/tree/expression/expression-tree-helper';
import { IdTree } from '@/tree/id/id-tree';
import { getIdTree } from '@/tree/id/id-tree-helper';
import { Tree } from '@/tree/tree';
import { SourceRange } from '@/util/source-range';

export class ArgumentTree extends Tree {
  ctx: ArgumentContext;
  sourceRange: SourceRange;
  name?: IdTree | Null2;
  value?: ExpressionTree | Null2;

  constructor(ctx: ArgumentContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.value = getExpressionTree(ctx.expression());
    this.addChildren(this.name, this.value);
  }

  toString(): String2 {
    const name = (this.name && this.name + ': ') || '';
    return name + this.value;
  }
}

// this code was generated
