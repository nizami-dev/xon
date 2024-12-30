import {Text, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';
import {Brand} from '#typing';

export type BracketOpenNode = OpenNode & Brand<'Core.BracketOpenNode'>;

export const $BracketOpenNode = corePackageType<BracketOpenNode>('BracketOpenNode', $OpenNode);

export function bracketOpenNode(reference: TextReference, text: Text): BracketOpenNode {
  return lexicalNode({$: $BracketOpenNode, reference, text});
}