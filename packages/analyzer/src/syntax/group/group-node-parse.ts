import {
  $AngleGroupNode,
  $BraceGroupNode,
  $BraceOpenNode,
  $BracketGroupNode,
  $BracketOpenNode,
  $CloseNode,
  $CommaNode,
  $ParenGroupNode,
  $ParenOpenNode,
  ANGLE_CLOSE,
  BRACE_CLOSE,
  BRACKET_CLOSE,
  CommaNode,
  GroupNode,
  groupNode,
  ItemNode,
  itemNode,
  OpenNode,
  PAREN_CLOSE,
  SyntaxAnalyzer,
} from '#analyzer';
import {newArrayData, Nothing, nothing, Text} from '#common';
import {$Type, is} from '#typing';

export function groupNodeParse(analyzer: SyntaxAnalyzer, openNode: OpenNode): GroupNode {
  if (is(openNode, $ParenOpenNode)) {
    return groupNodeParseInner(analyzer, $ParenGroupNode, openNode, PAREN_CLOSE);
  }

  if (is(openNode, $BracketOpenNode)) {
    return groupNodeParseInner(analyzer, $BracketGroupNode, openNode, BRACKET_CLOSE);
  }

  if (is(openNode, $BraceOpenNode)) {
    return groupNodeParseInner(analyzer, $BraceGroupNode, openNode, BRACE_CLOSE);
  }

  return groupNodeParseInner(analyzer, $AngleGroupNode, openNode, ANGLE_CLOSE);
}

function groupNodeParseInner(
  analyzer: SyntaxAnalyzer,
  $groupType: $Type,
  openNode: OpenNode,
  closeText: Text,
): GroupNode {
  const items = newArrayData<ItemNode>();

  let itemIndex = 0;
  let commaNode: CommaNode | Nothing = nothing;

  while (analyzer.lexicalAnalyzer.position.index < analyzer.lexicalAnalyzer.resource.data.count()) {
    const {breakNode, statements} = analyzer.parseStatements(
      (node) => is(node, $CommaNode) || (is(node, $CloseNode) && node.text.equals(closeText)),
    );

    if (is(breakNode, $CommaNode)) {
      const item = itemNode(analyzer, itemIndex, commaNode, statements);
      items.addLastItem(item);
      commaNode = breakNode;
    } else if (is(breakNode, $CloseNode)) {
      if (!items.isEmpty() || !statements.isEmpty()) {
        const item = itemNode(analyzer, itemIndex, commaNode, statements);
        items.addLastItem(item);
      }

      return groupNode(analyzer, $groupType, openNode, items, breakNode);
    }

    itemIndex += 1;
  }

  return groupNode(analyzer, $groupType, openNode, items, nothing);
}