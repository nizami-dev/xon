import { Nothing } from '../../../../lib/core';
import '../../../../util/extension';
import { $Node, Node } from '../../node';
import { CloseNode } from '../../token/close/close-node';
import { OpenNode } from '../../token/open/open-node';
import { SyntaxNode, getRangeAndChildren } from '../syntax-node';

export interface ArrayNode extends SyntaxNode {
  $: $Node.ARRAY;
  open: OpenNode;
  close: CloseNode | null;
  items: (Node | Nothing)[];
}

export function arrayNode(open: OpenNode, close: CloseNode | null, items: Node[]): ArrayNode {
  const lastStatement = items.lastOrNull();

  const node: ArrayNode = {
    $: $Node.ARRAY,
    ...getRangeAndChildren(open, ...items, close),
    open,
    close,
    items,
  };

  return node;
}