import {Array2, Nothing, nothing} from '../../../../../lib/types';
import {$Node, is} from '../../../node';
import {DeclarationNode} from '../../../syntax/node/declaration/declaration-node';
import {StatementNode} from '../../../syntax/statement/statement-node';
import {SemanticAnalyzerContext} from '../../semantic-analyzer-context';
import {DeclarationSemantic} from './declaration-semantic';
import {declarationDeepParse} from './declaration-semantic-deep-parser';
import {declarationShallowParse} from './declaration-semantic-shallow-parser';

export function syntaxDeclarationsParse(
  context: SemanticAnalyzerContext,
  statements: Array2<StatementNode>,
): void {
  const declarationNodes = statements.filterMap((x) =>
    is<DeclarationNode>(x.value, $Node.DECLARATION) ? x.value : nothing,
  );

  declarationsParse(context, declarationNodes);
}

export function declarationsParse(
  context: SemanticAnalyzerContext,
  declarationNodes: Array2<DeclarationNode | Nothing>,
): Array2<DeclarationSemantic | Nothing> {
  const declarations = declarationNodes.map((x) => (x ? declarationShallowParse(context, x) : nothing));

  for (const node of declarationNodes) {
    if (!node) {
      continue;
    }

    declarationDeepParse(context, node);
  }

  return declarations;
}
