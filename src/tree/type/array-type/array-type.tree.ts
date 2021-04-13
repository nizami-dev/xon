import { ArrayTypeContext } from '../../../grammar/xon-parser';
import { ActionTypeTree } from '../action-type/action-type.tree';
import { FunctionTypeTree } from '../function-type/function-type.tree';
import { createArrayType, getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';
import { UnionTypeTree } from '../union-type/union-type.tree';

export class ArrayTypeTree extends TypeTree {
  public itemType: TypeTree;

  public constructor(public ctx?: ArrayTypeContext) {
    super();
    if (!ctx) return;

    this.itemType = getTypeTree(ctx.type());
    this.generics = [this.itemType];
  }

  public equals(other: TypeTree): boolean {
    return other instanceof ArrayTypeTree && this.itemType.equals(other.itemType);
  }

  public fromExplicitTypes(explicitTypes: Map<string, TypeTree> = new Map()): ArrayTypeTree {
    return createArrayType(this.itemType.fromExplicitTypes(explicitTypes));
  }

  public fromImplicitType(implicitType: TypeTree): TypeTree {
    if (!(implicitType instanceof ArrayTypeTree))
      throw new Error(`Type "${implicitType.name}" is not an "${this.name}" type`);

    return createArrayType(this.itemType.fromImplicitType(implicitType.itemType));
  }

  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    if (!(type instanceof ArrayTypeTree))
      throw new Error(`Type "${type.name}" is not an "${this.name}" type`);

    const entries = this.generics
      .map((x, i) => x.getGenericsMap(type.generics[i]).entries())
      .map((x) => Array.from(x))
      .flat();
    return new Map<string, TypeTree>(entries);
  }

  public toString(): string {
    if (
      this.itemType instanceof ActionTypeTree ||
      this.itemType instanceof FunctionTypeTree ||
      this.itemType instanceof UnionTypeTree
    ) {
      const itemType = `(${this.itemType.toString()})`;
      return `${itemType}[]`;
    }
    return `${this.itemType.toString()}[]`;
  }
}
