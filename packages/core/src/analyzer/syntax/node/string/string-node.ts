import {newText, Nothing, nothing, Text} from '#common';
import {
  $SyntaxNode,
  corePackageType,
  StringCloseNode,
  StringContentNode,
  StringOpenNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#core';

export type StringNode = SyntaxNode & {
  value: Text;

  open: StringOpenNode;
  content?: StringContentNode | Nothing;
  close?: StringCloseNode | Nothing;
};

export const $StringNode = corePackageType<StringNode>('StringNode', $SyntaxNode);

export function stringNode(
  analyzer: SyntaxAnalyzer,
  open: StringOpenNode,
  content: StringContentNode | Nothing,
  close?: StringCloseNode | Nothing,
): StringNode {
  const value = content?.text ?? newText();

  return syntaxNode(analyzer, {
    $: $StringNode,
    open,
    content,
    close,
    value,
    semantics: nothing,
    isExpression: true,
  });
}
