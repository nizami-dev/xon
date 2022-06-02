import { ParameterStatementTree } from '../../../tree/statement/parameter/parameter-statement-tree';
import { getParameterMetadata } from '../../declaration/parameter/parameter-metadata-helper';
import { DeclarationScope } from '../../declaration/scope/declaration-scope';
import { StatementMetadata } from '../statement-metadata';

export class ParameterStatementMetadata implements StatementMetadata {
  constructor(private tree: ParameterStatementTree, private scope: DeclarationScope) {
    const parameters = getParameterMetadata(tree.parameter, scope);
    parameters.forEach((x) => scope.addParameter(x));
  }
}