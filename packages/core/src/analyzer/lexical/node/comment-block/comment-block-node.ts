import {String2, TextData, TextResourceRange} from '#common';
import {COMMENT_BLOCK_CLOSE, COMMENT_BLOCK_OPEN, LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type CommentBlockNode = LexicalNode<$.CommentBlockNode> & {
  value: String2;
};

export function commentBlockNode(reference: TextResourceRange, text: TextData): CommentBlockNode {
  let value = '';
  const lastCloseIndex = text.firstIndex(COMMENT_BLOCK_CLOSE);

  if (lastCloseIndex > 0) {
    value = text.slice(COMMENT_BLOCK_OPEN.length, lastCloseIndex).toString();
  } else {
    value = text.slice(COMMENT_BLOCK_OPEN.length).toString();
  }

  return lexicalNode({$: $.CommentBlockNode, reference, text, value, isHidden: true});
}
