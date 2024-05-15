import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Array2, Nothing} from '../../../lib/core';
import '../../../util/extension';
import {SyntaxContext} from '../../syntax-context';
import {$Node} from '../node';
import {SyntaxNode, syntaxNode} from '../syntax/syntax-node';
import {CloseNode} from '../token/close/close-node';
import {OpenNode} from '../token/open/open-node';
import {ItemNode} from './item-node';

export type $Group = $Node.GROUP | $Node.ARRAY | $Node.OBJECT;
export type Group = GroupNode | ArrayNode | ObjectNode;
export type ArrayNode = GroupNode;
export type ObjectNode = GroupNode;

export interface GroupNode extends SyntaxNode {
  $: $Node.GROUP | $Node.ARRAY | $Node.OBJECT;
  open: OpenNode;
  close: CloseNode | Nothing;
  items: Array2<ItemNode>;
}

export function groupNode(
  context: SyntaxContext,
  $: $Group,
  open: OpenNode,
  items: Array2<ItemNode>,
  close: CloseNode | Nothing,
): GroupNode {
  const node = syntaxNode($, {open, items, close});

  validate(context, node);
  // format(context, node);

  return node;
}

function validate(context: SyntaxContext, node: GroupNode): Nothing {
  if (!node.close) {
    context.issueManager.addError(node.open.range, ISSUE_MESSAGE.expectCloseToken(node.open.text));
  }
}

// function format(context: SyntaxContext, node: GroupNode): Nothing {
//   if (node.items.length > 0) {
//     formatBetweenHiddenNodes(context, node.items[0], false);

//     for (let i = 1; i < node.items.length; i++) {
//       formatBetweenHiddenNodes(context, node.items[i], true);
//     }
//   }

//   if (node.close) {
//     formatBetweenHiddenNodes(context, node.close, false);
//   }
// }
