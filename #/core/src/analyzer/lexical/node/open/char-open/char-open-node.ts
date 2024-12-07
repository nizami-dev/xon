import {TextData, TextReference} from '#common';
import {$OpenNode, OpenNode, corePackageType, lexicalNode} from '#core';

export type CharOpenNode = OpenNode;

export const $CharOpenNode = corePackageType<CharOpenNode>('CharOpenNode', $OpenNode);

export function charOpenNode(reference: TextReference, text: TextData): CharOpenNode {
  return lexicalNode({$: $CharOpenNode, reference, text});
}
