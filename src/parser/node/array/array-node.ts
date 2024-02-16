import '../../../extensions';
import { CloseNode } from '../../../parser/node/close/close-node';
import { OpenNode } from '../../../parser/node/open/open-node';
import { rangeFromNodes } from '../../../source/source-range';
import { coreDeclarationMeta } from '../../type/core';
import { LiteralMeta, literalMeta } from '../../type/type';
import { $Node, Node, SyntaxNode, addNodeParent } from '../node';

export interface ArrayNode extends SyntaxNode {
  $: $Node.ARRAY;
  meta: LiteralMeta;
  open: OpenNode;
  close: CloseNode | null;
  items: Node[];
}

export function arrayNode(open: OpenNode, close: CloseNode | null, items: Node[]): ArrayNode {
  const lastStatement = items.lastOrNull();

  const node: ArrayNode = {
    $: $Node.ARRAY,
    // todo fix it
    meta: literalMeta(coreDeclarationMeta('Array'), 0),
    range: rangeFromNodes(open, close ?? lastStatement ?? open),
    children: [],
    open,
    close,
    items,
  };

  addNodeParent(node, open, ...items, close);

  return node;
}
