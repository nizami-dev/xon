import {Nothing, nothing} from '#common';
import {
  $SyntaxNode,
  corePackageType,
  Node,
  OperatorNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#core';

export type ReturnNode = SyntaxNode & {
  semantic: Nothing;
  operator: OperatorNode;
  value?: Node | Nothing;
};

export const $ReturnNode = corePackageType<ReturnNode>('ReturnNode', $SyntaxNode);

export function returnNode(
  analyzer: SyntaxAnalyzer,
  operator: OperatorNode,
  value: Node | Nothing,
): ReturnNode {
  const node = syntaxNode(analyzer, {$: $ReturnNode, operator, value, semantic: nothing});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: ReturnNode): void {
  if (node.value) {
    analyzer.formatterManager.formatChildNode(node.value, true);
  }
}