import { Node, NodeType } from '~/analysis/Node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface PrefixNode extends Node {
  type: NodeType.PREFIX;
  operator: OperatorNode;
  value: Node;
}

export function prefixNode(operator: OperatorNode, value: Node): PrefixNode {
  return {
    type: NodeType.PREFIX,
    operator,
    value,
  };
}
