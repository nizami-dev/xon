import {Nothing, nothing} from '#common';
import {COMMENT_LINE, CommentLineNode, LexicalAnalyzer, NL, commentLineNode} from '#core';

export function commentLineNodeParse(analyzer: LexicalAnalyzer): CommentLineNode | Nothing {
  if (!analyzer.hasTextAtIndex(COMMENT_LINE)) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile((x) => !x.equals(NL), analyzer.position.index);
  const reference = analyzer.textReference(text);

  return commentLineNode(reference, text);
}
