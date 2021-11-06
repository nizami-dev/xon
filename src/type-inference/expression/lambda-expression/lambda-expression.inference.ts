import { LambdaExpressionTree } from '../../../tree/expression/lambda-expression/lambda-expression.tree';
import { createFunctionType, createPlainType } from '../../../tree/type/type-tree.helper';
import { GenericsMap } from '../../generics-map';
import { getExpressionInference } from '../expression-inference.helper';
import { ExpressionInference } from '../expression.inference';

export class LambdaExpressionInference extends ExpressionInference {
  parameters: string[];
  body: ExpressionInference;

  constructor(public tree: LambdaExpressionTree, public genericsMap: GenericsMap) {
    super();

    this.parameters = tree.parameters;

    this.body = getExpressionInference(tree.body, genericsMap);
    this.type = createFunctionType(
      [],
      tree.parameters.map(() => createPlainType('Any')),
      this.body.type,
    );
  }
}
