import { ActionTypeContext } from '../../../grammar/xon-parser';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class ActionTypeTree extends TypeTree {
  public parameters: TypeTree[];

  public constructor(public ctx?: ActionTypeContext) {
    super();
    if (!ctx) return;

    this.parameters = ctx._params.map(getTypeTree);
    this.generics = this.parameters;
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof ActionTypeTree &&
      this.parameters.length === other.parameters.length &&
      this.parameters.every((x, i) => x.equals(other.parameters[i]))
    );
  }

  public replaceGenerics(genericsMap: Map<string, TypeTree> = new Map()): ActionTypeTree {
    const type = new ActionTypeTree();
    type.parameters = this.parameters.map((x) => x.replaceGenerics(genericsMap));
    type.generics = this.generics.map((x) => x.replaceGenerics(genericsMap));
    return type;
  }
}
