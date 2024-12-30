import {newText, Nothing, nothing} from '#common';
import {COMMA, CommaNode, commaNode, LexicalAnalyzer} from '#core';

export function commaNodeParse(analyzer: LexicalAnalyzer): CommaNode | Nothing {
  if (!analyzer.hasTextAtIndex(COMMA)) {
    return nothing;
  }

  const text = newText(COMMA);
  const reference = analyzer.textReference(text);

  return commaNode(reference, text);
}