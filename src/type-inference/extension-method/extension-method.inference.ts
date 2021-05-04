import { ExtensionMethodTree } from '../../tree/extension-method/extension-method.tree';
import { createFunctionType } from '../../tree/type/type-tree.helper';
import { TypeTree } from '../../tree/type/type.tree';
import { BaseInference } from '../base.inference';
import { GenericsMap } from '../generics-map';
import { addToScope, popScope, pushScope } from '../id-scope';
import { getParameterInference } from '../parameter/parameter-inference.helper';
import { ParameterInference } from '../parameter/parameter.inference';
import { getStatementInference } from '../statement/statement-inference.helper';
import { StatementInference } from '../statement/statement.inference';

export class FunctionInference extends BaseInference {
  public name: string;

  public extensionType: TypeTree;

  public declaredGenerics: string[];

  public parameters: ParameterInference[] = [];

  public returnType: TypeTree;

  public body?: StatementInference[];

  public constructor(public tree: ExtensionMethodTree, public genericsMap: GenericsMap) {
    super();

    pushScope();
    this.name = tree.name;
    this.extensionType = tree.extensionType.useGenericsMap(this.genericsMap);
    this.declaredGenerics = tree.declaredGenerics;
    addToScope('this', this.extensionType);
    this.parameters = tree.parameters.map((x) => getParameterInference(x, genericsMap));
    this.parameters.forEach((x) => addToScope(x.name, x.type));
    this.returnType = tree.returnType.useGenericsMap(this.genericsMap);

    this.type = createFunctionType(
      this.declaredGenerics,
      this.parameters.map((x) => x.type),
      this.returnType,
    );

    this.body = tree.body.map((x) => getStatementInference(x, this.genericsMap));
    popScope();
  }
}
