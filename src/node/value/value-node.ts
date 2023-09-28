import { DataType } from '~/analysis/semantic/data-type';
import { Node, NodeType } from '~/node/node';
import { LexicalNode } from '../lexical-node';

export interface ValueNode extends Node {
  $: NodeType.VALUE;
  node: LexicalNode;
  dataType: DataType;
}

export function typeNode(node: LexicalNode, dataType: DataType): ValueNode {
  return {
    $: NodeType.VALUE,
    start: node.start,
    stop: node.stop,
    node,
    dataType,
  };
}
