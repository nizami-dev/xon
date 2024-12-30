import {Text, TextReference} from '#common';
import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#core';
import {Brand} from '#typing';

export type BracketCloseNode = CloseNode & Brand<'Core.BracketCloseNode'>;

export const $BracketCloseNode = corePackageType<BracketCloseNode>('BracketCloseNode', $CloseNode);

export function bracketCloseNode(reference: TextReference, text: Text): BracketCloseNode {
  return lexicalNode({$: $BracketCloseNode, reference, text});
}