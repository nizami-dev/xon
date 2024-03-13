import {sourceFromText} from '../../../../../source/source';
import {parseSyntax} from '../../../../syntax';
import {$Node} from '../../../node';
import {CharLiteralNode} from './char-literal-node';

test('a', () => {
  const text = "'a'";
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as CharLiteralNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.CHAR);
  expect(node.text).toBe(text);
});