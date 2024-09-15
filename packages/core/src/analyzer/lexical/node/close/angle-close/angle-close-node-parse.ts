import {Nothing, nothing} from '#common';
import {ANGLE_CLOSE, AngleCloseNode, angleCloseNode, LexicalAnalyzer, textData} from '#core';

export function angleCloseNodeParse(analyzer: LexicalAnalyzer): AngleCloseNode | Nothing {
  if (!analyzer.checkTextAtIndex(ANGLE_CLOSE)) {
    return nothing;
  }

  const text = textData(ANGLE_CLOSE);
  const reference = analyzer.getResourceRange(text);

  return angleCloseNode(reference, text);
}
