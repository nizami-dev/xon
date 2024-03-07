import {sourceFromText} from '../../../../source/source';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {ObjectNode} from './object-node';

test('empty object', () => {
  const text = '{}';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as ObjectNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.OBJECT);
  expect(node.items.length).toBe(0);
});
