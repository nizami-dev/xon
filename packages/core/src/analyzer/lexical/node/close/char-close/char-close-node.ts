import {Text, TextReference} from '#common';
import {$CloseNode, CloseNode, corePackageType, lexicalNode} from '#core';
import {Brand} from '#typing';

export type CharCloseNode = CloseNode & Brand<'Core.CharCloseNode'>;

export const $CharCloseNode = corePackageType<CharCloseNode>('CharCloseNode', $CloseNode);

export function charCloseNode(reference: TextReference, text: Text): CharCloseNode {
  return lexicalNode({$: $CharCloseNode, reference, text});
}