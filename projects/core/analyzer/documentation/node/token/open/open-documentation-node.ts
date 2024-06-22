import {String2} from '../../../../../../lib/types';
import {TextRange} from '../../../../../util/resource/text/text-range';
import {TokenNode, tokenNode} from '../../../../lexical/node/token-node';
import {$Node} from '../../../../syntax/node';

export type OpenDocumentationNode = TokenNode<$Node.OPEN_DOCUMENTATION>;

export function openDocumentationNode(range: TextRange, text: String2): OpenDocumentationNode {
  return tokenNode({$: $Node.OPEN_DOCUMENTATION, range, text});
}
