import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';
import {Brand} from '#typing';

export type NlNode = LexicalNode & Brand<'Core.NlNode'>;

export const $NlNode = corePackageType<NlNode>('NlNode', $LexicalNode);

export function nlNode(reference: TextReference, text: Text): NlNode {
  return lexicalNode({$: $NlNode, reference, text, isHidden: true});
}