import { SimpleTypeContext } from '../../../grammar/xon-parser';
import { TypeTree } from '../type.tree';

export class SimpleTypeTree extends TypeTree {
  constructor(public ctx?: SimpleTypeContext) {
    super();
    if (!ctx) return;
    this.name = ctx.ID().text;
  }

  eq(anotherType: TypeTree): boolean {
    return (
      this === anotherType ||
      (anotherType instanceof SimpleTypeTree && anotherType.name === this.name)
    );
  }
}
