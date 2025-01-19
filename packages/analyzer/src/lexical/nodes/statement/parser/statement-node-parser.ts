import {
  $NlNode,
  AnalyzerContext,
  newStatementNode,
  Node2,
  NodeParserFunction,
  parseCharacterNode,
  parseCommaNode,
  parseCommentNode,
  parseDocumentationNode,
  parseGroupCloseNode,
  parseGroupNode,
  parseIdNode,
  parseJoiningNode,
  parseNlNode,
  parseNumberNode,
  parseOperatorNode,
  parseStringNode,
  parseUnknownNode,
  parseWhitespaceNode,
  StatementNode2,
} from '#analyzer';
import {ArrayData, Boolean2, newArrayData, Nothing, nothing, TextPosition} from '#common';
import {is} from '#typing';

function nodeParsers(): ArrayData<NodeParserFunction> {
  return newArrayData([
    parseWhitespaceNode,
    parseNlNode,
    parseStringNode,
    parseCharacterNode,
    parseNumberNode,
    parseOperatorNode,
    parseIdNode,
    parseGroupNode,
    parseCommaNode,
    parseGroupCloseNode,
    parseDocumentationNode,
    parseCommentNode,
    parseJoiningNode,
    parseUnknownNode,
  ]);
}

export function parseStatementsUntil(
  context: AnalyzerContext,
  predicate?: ((node: Node2) => Boolean2) | Nothing,
): {
  statements: ArrayData<StatementNode2>;
  breakNode?: Node2 | Nothing;
  hiddenNodes: ArrayData<Node2>;
} {
  let hiddenNodes = newArrayData<Node2>();
  let lastStatement: StatementNode2 | Nothing = nothing;
  let statements = newArrayData<StatementNode2>();
  let breakNode: Node2 | Nothing = nothing;
  let nodes = newArrayData<Node2>();

  const handleStatement = () => {
    if (nodes.isEmpty()) {
      return;
    }

    const firstNode = nodes.first()!;
    const parentStatement = getParentStatement(lastStatement, firstNode.range.start);
    // todo !!! collapse nodes
    const errorNodes = nodes.slice(1);
    const statement = newStatementNode(parentStatement, firstNode, errorNodes);

    // if context.shouldDiagnose then
    if (statement.diagnose) {
      statement.diagnose();
    }

    if (parentStatement) {
      parentStatement.body ??= newArrayData();
      parentStatement.body.addLastItem(statement);
    } else {
      statements.addLastItem(statement);
    }

    lastStatement = statement;

    nodes = newArrayData();
  };

  while (true) {
    const node = nodeParsers().findMap((parse) => parse(context));

    if (!node) {
      break;
    }

    // if (is(node, $GroupOpenNode)) {
    //   node = groupNodeParse(this, node);
    // }

    if (predicate && predicate(node)) {
      breakNode = node;

      break;
    }

    if (node.isHidden) {
      if (is(node, $NlNode)) {
        handleStatement();
      }

      hiddenNodes.addLastItem(node);

      continue;
    }

    node.hiddenNodes = hiddenNodes;
    hiddenNodes = newArrayData();
    nodes.addLastItem(node);
  }

  handleStatement();

  // this.formatterManager.formatRemainingHiddenNodes(statements, lastStatement, hiddenNodes);

  return {
    statements,
    breakNode,
    hiddenNodes,
  };
}

function getParentStatement(
  statement: StatementNode2 | Nothing,
  indentPosition: TextPosition,
): StatementNode2 | Nothing {
  if (!statement) {
    return nothing;
  }

  if (indentPosition.column > statement.value.range.start.column) {
    return statement;
  }

  return getParentStatement(statement.parent, indentPosition);
}