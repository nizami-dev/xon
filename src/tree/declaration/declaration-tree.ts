import { DeclarationContext } from '../../grammar/xon-parser';
import { BodyTree } from '../body/body-tree';
import { getBodyTree } from '../body/body-tree-helper';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { IdTree } from '../id/id-tree';
import { getIdTree } from '../id/id-tree-helper';
import { Tree } from '../tree';
import { SourceReference } from '../util/source-reference';

export class DeclarationTree implements Tree {
  sourceReference: SourceReference;
  modifier?: Modifier;
  hasSpread: boolean;
  id: IdTree;
  type?: ExpressionTree;
  base: ExpressionTree;
  body?: BodyTree;

  constructor(ctx: DeclarationContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.modifier = (ctx.modifier() && Modifier[ctx.modifier().text]) || null;
    this.hasSpread = !!ctx.SPREAD();
    this.id = getIdTree(ctx.id());
    this.type = getExpressionTree(ctx._type) || null;
    this.base = getExpressionTree(ctx._base);
    this.body = getBodyTree(ctx.body()) || null;
  }

  toString(): string {
    if (this.type) return `${this.id} ${this.type}`;
    return this.id.toString();
  }
}

export enum Modifier {
  class,
  interface,
  object,
}