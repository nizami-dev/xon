import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {$Node} from '../../../node';
import {syntaxParse} from '../../../syntax/syntax-analyzer';
import {CommentBlockNode} from './comment-block-node';

test('block comment', () => {
  const text = '--- abc\n\n\n def---';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes[0] as CommentBlockNode;

  expect(statements.length).toBe(0);
  expect(syntax.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($Node.COMMENT_BLOCK);
  expect(node.text).toBe('--- abc\n\n\n def---');
});
