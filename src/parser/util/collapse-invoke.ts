import { isGroupNode } from '../../parser/node/declaration/declaration-node';
import { invokeNode } from '../../parser/node/invoke/invoke-node';
import { OperatorNode } from '../../parser/node/operator/operator-node';
import { ParserContext } from '../../parser/parser-context';
import { NodeType } from '../node/node-type';
import { is } from './is';

export function collapseInvoke(context: ParserContext): void {
  for (let i = 0; i < context.nodes.length; i++) {
    const node = context.nodes[i];

    if (isGroupNode(node) && i > 0) {
      const prevNode = context.nodes[i - 1];

      if (!is<OperatorNode>(prevNode, NodeType.OPERATOR)) {
        context.nodes[i] = invokeNode(prevNode, node);
        context.nodes.splice(i - 1, 1);
        collapseInvoke(context);

        return;
      }
    }
  }
}
