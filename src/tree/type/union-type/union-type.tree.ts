import { UnionTypeContext } from '../../../grammar/xon-parser';
import { createUnionType, getTypesTrees } from '../type-helper';
import { TypeTree } from '../type.tree';

export class UnionTypeTree extends TypeTree {
  public types: TypeTree[];

  public constructor(public ctx?: UnionTypeContext) {
    super();
    if (!ctx) return;

    this.types = getTypesTrees(ctx.type());
    this.generics = this.types;
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof UnionTypeTree &&
      this.types.length === other.types.length &&
      this.types.every((x, i) => x.equals(other.types[i]))
    );
  }

  public markIfGeneric(generics: string[]): void {
    this.types.forEach((x) => x.markGenerics(generics));
  }

  public fromExplicitTypes(explicitTypes: Map<string, TypeTree> = new Map()): UnionTypeTree {
    return createUnionType(this.types.map((x) => x.fromExplicitTypes(explicitTypes)));
  }

  public fromImplicitType(implicitType: TypeTree): TypeTree {
    if (!(implicitType instanceof UnionTypeTree))
      throw new Error(`Type "${implicitType.name}" is not a "${this.name}" type`);

    if (implicitType.types.length !== this.types.length)
      throw new Error(
        `Type "${implicitType.name}" has ${implicitType.types.length} type but this type has ${this.types.length}`,
      );

    return createUnionType(this.types.map((x, i) => x.fromImplicitType(implicitType.types[i])));
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    return new Map();
  }

  public toString(): string {
    return this.types.map((x) => x.toString()).join(' | ');
  }
}
