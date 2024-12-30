import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';
import {Brand} from '#typing';

export type DocumentationDescriptionNode = LexicalNode & Brand<'Core.DocumentationDescriptionNode'>;

export const $DocumentationDescriptionNode = corePackageType<DocumentationDescriptionNode>(
  'DocumentationDescriptionNode',
  $LexicalNode,
);

export function documentationDescriptionNode(
  reference: TextReference,
  text: Text,
): DocumentationDescriptionNode {
  return lexicalNode({$: $DocumentationDescriptionNode, reference, text});
}