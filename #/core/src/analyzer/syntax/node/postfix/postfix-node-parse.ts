import {ArrayData, Boolean2, Integer, nothing, Text} from '#common';
import {$OperatorNode, Node, nodeFindMap, postfixNode, SyntaxAnalyzer, SyntaxParseFn} from '#core';
import {is} from '#typing';

export function postfixNodeParse(operators: ArrayData<Text>, isLeftRecursive: Boolean2): SyntaxParseFn {
  return (analyzer: SyntaxAnalyzer, nodes: Node[], startIndex: Integer) => {
    return nodeFindMap(nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (
        !is(node, $OperatorNode) ||
        !operators.hasItem(node.text) ||
        (index !== nodes.length - 1 && !is(nodes[index + 1], $OperatorNode))
      ) {
        return nothing;
      }

      const value = nodes[index - 1];

      if (!value.isExpression) {
        return nothing;
      }

      return {node: postfixNode(analyzer, value, node), index: index - 1};
    });
  };
}