import {formatChildNode} from '../../../../formatter/formatter';
import {ASSIGN, TYPE} from '../../../lexical/lexical-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode} from '../../node';
import {OperatorNode} from '../../../lexical/token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type PrefixNode = SyntaxNode<$Node.PREFIX> &
  ExpressionNode & {
    operator: OperatorNode;
    value: ExpressionNode;
  };

export function prefixNode(
  context: SyntaxContext,
  operator: OperatorNode,
  value: ExpressionNode,
): PrefixNode {
  const node = syntaxNode($Node.PREFIX, {operator, value});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: PrefixNode): void {
  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetter(0) || x === TYPE || x === ASSIGN);
  formatChildNode(context, node.value, keepSingleWhitespace);
}
