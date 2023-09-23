import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { Integer, String2 } from '~/lib/core';
import { HiddenTokenNode, NodeType } from '~/node/node';

export interface NlNode extends HiddenTokenNode {
  $: NodeType.NL;
}

export function nlNode(start: Integer, stop: Integer, text: String2): NlNode {
  return {
    $: NodeType.NL,
    start,
    stop,
    text,
  };
}

const LF = '\n';
const CR = '\r';

export function scanNlNode({ text, index }: LexicalAnalysis): NlNode | null {
  if (text[index] === LF) {
    return nlNode(index, index, LF);
  }

  if (text[index] === CR) {
    if (text[index + 1] === LF) {
      return nlNode(index, index + 1, CR + LF);
    }

    return nlNode(index, index, CR);
  }

  return null;
}
