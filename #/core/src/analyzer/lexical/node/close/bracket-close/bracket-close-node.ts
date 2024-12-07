import {TextData, TextReference} from '#common';
import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#core';

export type BracketCloseNode = CloseNode;

export const $BracketCloseNode = corePackageType<BracketCloseNode>('BracketCloseNode', $CloseNode);

export function bracketCloseNode(reference: TextReference, text: TextData): BracketCloseNode {
  return lexicalNode({$: $BracketCloseNode, reference, text});
}
