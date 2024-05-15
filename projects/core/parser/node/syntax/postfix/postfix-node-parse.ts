import {Boolean2, Integer, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, is, isExpressionNode, nodeFindMap} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {OperatorNode} from '../../token/operator/operator-node';
import {postfixNode} from './postfix-node';

export function postfixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer) => {
    return nodeFindMap(context.nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (!is<OperatorNode>(node, $Node.OPERATOR) || !operators.includes(node.text)) {
        return nothing;
      }

      const value = nodes[index - 1];

      // todo move it up
      if (
        (index !== nodes.length - 1 && !is<OperatorNode>(nodes[index + 1], $Node.OPERATOR)) ||
        !isExpressionNode(value)
      ) {
        return nothing;
      }

      return {node: postfixNode(context, value, node), spliceIndex: index - 1};
    });
  };
}
