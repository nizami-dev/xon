import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {sourceFromText} from '../../../../source/source';
import {parseSyntax} from '../../../syntax';
import {OPEN_CLOSE_PAIR} from '../../../syntax-config';
import {$Node, is} from '../../node';
import {GroupNode} from './group-node';

test('empty closed', () => {
  const text = '()';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as GroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.GROUP)).toBe(true);
  expect(is(node.open, $Node.OPEN)).toBe(true);
  expect(is(node.close, $Node.CLOSE)).toBe(true);
  expect(node.items.length).toBe(0);
});

test('validate close pair', () => {
  const text = '(';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as GroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $Node.GROUP)).toBe(true);
  expect(is(node.open, $Node.OPEN)).toBe(true);
  expect(node.close).toBe(null);
  expect(node.items.length).toBe(0);
  expect(syntax.issueManager.issues.length).toBe(1);

  const issueMessage = ISSUE_MESSAGE.expectCloseToken(node.open.text, OPEN_CLOSE_PAIR[node.open.text]);

  expect(syntax.issueManager.issues[0].message.actual).toBe(issueMessage.actual);
  expect(syntax.issueManager.issues[0].message.expect).toBe(issueMessage.expect);
});
