import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../parser';
import {$Node} from '../../node';
import {ObjectNode} from './object-node';

test('empty object', () => {
  const text = '{}';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as ObjectNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.OBJECT);
  expect(node.items.length).toBe(0);
});
