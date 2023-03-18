import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { NodeType } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface UnknownNode extends LexicalNode {
  $: NodeType.UNKNOWN;
}

export function unexpectedNode(start: Integer, stop: Integer, text: String2): UnknownNode {
  return {
    $: NodeType.UNKNOWN,
    start,
    stop,
    text,
  };
}
