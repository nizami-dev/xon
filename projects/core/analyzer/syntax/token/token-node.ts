import {Anything, String2} from '../../../../lib/types';
import {$Node, Node} from '../node';

export type HiddenNode = TokenNode;

export type TokenNode<T extends $Node = $Node> = Node<T> & {
  text: String2;
};

export function tokenNode<T extends TokenNode & Record<String2, Anything>>(params: T): T {
  return params;
}