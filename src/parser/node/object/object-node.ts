import '~/extensions';
import { CloseNode } from '~/parser/node/close/close-node';
import { textRangeFromNodes } from '~/parser/node/node-position';
import { OpenNode } from '~/parser/node/open/open-node';
import { Node } from '../node';
import { NodeType } from '../node-type';

export const OBJECT_NODE_OPEN = '{';
export const OBJECT_NODE_CLOSE = '}';

export interface ObjectNode extends Node {
  $: NodeType.OBJECT;
  open: OpenNode;
  close: CloseNode | null;
  items: Node[];
}

export function objectNode(open: OpenNode, close: CloseNode | null, items: Node[]): ObjectNode {
  const lastStatement = items.lastOrNull();

  return {
    $: NodeType.OBJECT,
    range: textRangeFromNodes(open, close ?? lastStatement ?? open),
    open,
    close,
    items,
  };
}
