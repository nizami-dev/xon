import {
  $CommentBlockNode,
  COMMENT_BLOCK_CLOSE,
  COMMENT_BLOCK_OPEN,
  CommentBlockNode,
  LexicalAnalyzer,
} from '#analyzer';
import {Nothing, nothing} from '#common';

export function commentBlockNodeParse(analyzer: LexicalAnalyzer): CommentBlockNode | Nothing {
  if (!analyzer.hasTextAtIndex(COMMENT_BLOCK_OPEN)) {
    return nothing;
  }

  const stopIndex =
    analyzer.resource.data.firstItemsIndex(
      COMMENT_BLOCK_CLOSE,
      analyzer.position.index + COMMENT_BLOCK_OPEN.count(),
    ) ?? -1;

  const endSlice = stopIndex < 0 ? analyzer.resource.data.count() : stopIndex + COMMENT_BLOCK_CLOSE.count();

  const text = analyzer.resource.data.slice(analyzer.position.index, endSlice);
  // todo should we calculate nl count in place ???
  const range = analyzer.textReferenceWithNewLine(text);

  return {$: $CommentBlockNode, text, range};
}