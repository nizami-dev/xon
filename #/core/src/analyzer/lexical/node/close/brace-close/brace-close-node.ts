import {Text, TextReference} from '#common';
import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#core';

export type BraceCloseNode = CloseNode;

export const $BraceCloseNode = corePackageType<BraceCloseNode>('BraceCloseNode', $CloseNode);

export function braceCloseNode(reference: TextReference, text: Text): BraceCloseNode {
  return lexicalNode({$: $BraceCloseNode, reference, text});
}