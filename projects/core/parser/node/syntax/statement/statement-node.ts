import {Array2, Integer, Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {TokenNode} from '../../token/token-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface StatementNode extends SyntaxNode {
  $: $Node.STATEMENT;
  indentLevel: Integer;
  indentStopColumn: Integer;
  beforeIndentHiddenNodes: Array2<TokenNode>;
  indentHiddenNodes: Array2<TokenNode>;
  parentStatement: StatementNode | Nothing;
  children: Array2<Node>;
  item: Node;
}

export function statementNode(
  context: SyntaxContext,
  children: Array2<Node>,
  parentStatement: StatementNode | Nothing,
  indentStopColumn: Integer,
  beforeIndentHiddenNodes: Array2<TokenNode>,
  indentHiddenNodes: Array2<TokenNode>,
): StatementNode {
  const node = syntaxNode($Node.STATEMENT, {children});
  const indentLevel = parentStatement ? parentStatement.indentLevel + 1 : 0;
  const item = children[0];

  const statement: StatementNode = {
    ...node,

    indentLevel,
    indentStopColumn,
    beforeIndentHiddenNodes,
    indentHiddenNodes,
    parentStatement: parentStatement,
    item,
  };

  return statement;
}
