import { Issue } from '@/issue/issue';
import { Unknown2 } from '@/lib/core';
import { ArrayExpressionTree } from '@/tree/expression/array/array-expression-tree';
import { ExpressionTree } from '@/tree/expression/expression-tree';
import { GroupExpressionTree } from '@/tree/expression/group/group-expression-tree';
import { IdExpressionTree } from '@/tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '@/tree/expression/infix/infix-expression-tree';
import { LiteralExpressionTree } from '@/tree/expression/literal/literal-expression-tree';
import { PrefixExpressionTree } from '@/tree/expression/prefix/prefix-expression-tree';

function _escapeIfString(s: Unknown2) {
  return (typeof s === 'string' && `\`${s}\``) || s;
}

export function evaluate(tree: ExpressionTree | null, argsMap = {}): Unknown2 {
  if (!tree) {
    return null;
  }
  if (tree instanceof ArrayExpressionTree) {
    return tree.arguments.map((x) => evaluate(x.value));
  }
  if (tree instanceof LiteralExpressionTree) {
    return tree.literal.value;
  }
  if (tree instanceof GroupExpressionTree) {
    return evaluate(tree.expression);
  }
  if (tree instanceof InfixExpressionTree) {
    const a = evaluate(tree.left, argsMap);
    const b = evaluate(tree.right, argsMap);
    const o = (tree.name.text === '^' && '**') || tree.name.text;
    return eval(`${_escapeIfString(a)} ${o} ${_escapeIfString(b)}`);
  }
  if (tree instanceof PrefixExpressionTree) {
    const a = evaluate(tree.value, argsMap);
    return eval(`${tree.name.text}${_escapeIfString(a)}`);
  }
  if (tree instanceof IdExpressionTree) {
    if (tree.name.text in argsMap) {
      return argsMap[tree.name.text];
    }
    Issue.errorFromTree(tree, `Undefined key '${tree.name}'`);
  }
  Issue.errorFromTree(tree, 'Unsupported operation');
}
