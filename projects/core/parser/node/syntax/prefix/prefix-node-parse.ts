import {Boolean2, Integer, nothing} from '../../../../../lib/types';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, is, isExpressionNode, nodeFindMap} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {OperatorNode} from '../../token/operator/operator-node';
import {prefixNode} from './prefix-node';

export function prefixNodeParse(operators: String[], isLeftRecursive: Boolean2): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer) => {
    return nodeFindMap(context.nodes, startIndex, isLeftRecursive, (node, index, nodes) => {
      if (
        !is<OperatorNode>(node, $Node.OPERATOR) ||
        !operators.includes(node.text) ||
        (index !== 0 && !is<OperatorNode>(nodes[index - 1], $Node.OPERATOR))
      ) {
        return nothing;
      }

      const value = nodes[index + 1];

      if (!isExpressionNode(value)) {
        return nothing;
      }

      return {node: prefixNode(context, node, value), index: index};
    });
  };
}
