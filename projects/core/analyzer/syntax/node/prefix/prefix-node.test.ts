import {$} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {LexicalNode} from '../../../lexical/node/lexical-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {syntaxFromResource} from '../../syntax-analyzer';
import {PrefixNode} from './prefix-node';

test('negative integer', () => {
  const text = '-1';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as PrefixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.PrefixNode);
  expect(node.operator.text).toBe('-');
  expect(evaluate(node)).toBe(-1);
});

test('infix modifier', () => {
  const text = 'infix';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as OperatorNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.OperatorNode);
  expect(node.text).toBe('infix');
});

test('hidden nodes', () => {
  const text = '-    1\n';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as PrefixNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.PrefixNode);
  expect(node.operator.text).toBe('-');

  expect(node.value.hiddenNodes?.length).toBe(1);
  expect(node.value.hiddenNodes?.at(0)?.$).toBe($.WhitespaceNode);
  expect((node.value.hiddenNodes?.at(0) as LexicalNode)?.text).toBe('    ');

  expect(evaluate(node)).toBe(-1);
});
