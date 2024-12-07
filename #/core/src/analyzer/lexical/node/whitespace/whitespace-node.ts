import {TextData, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type WhitespaceNode = LexicalNode;

export const $WhitespaceNode = corePackageType<WhitespaceNode>('WhitespaceNode', $LexicalNode);

export function whitespaceNode(reference: TextReference, text: TextData): WhitespaceNode {
  return lexicalNode({$: $WhitespaceNode, reference, text, isHidden: true});
}
