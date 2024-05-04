import {Array2, Nothing} from '../../../../lib/core';
import '../../../../util/extension';
import {$Node} from '../../node';
import {CloseNode} from '../../token/close/close-node';
import {OpenNode} from '../../token/open/open-node';
import {ItemNode} from '../item/item-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface ArrayNode extends SyntaxNode {
  $: $Node.ARRAY;
  open: OpenNode;
  close: CloseNode | Nothing;
  items: Array2<ItemNode>;
}

export function arrayNode(open: OpenNode, items: Array2<ItemNode>, close: CloseNode | Nothing): ArrayNode {
  const node = syntaxNode($Node.ARRAY, {open, items, close});

  return node;
}
