import {Integer} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {UnknownNode, unknownNode} from './unknown-node';

export function unknownNodeParse(context: SyntaxContext, index: Integer): UnknownNode {
  const text = context.resource.data[index];
  const range = context.getRange(1, false);

  return unknownNode(range, text);
}
