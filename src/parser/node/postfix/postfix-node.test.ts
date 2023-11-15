import { PostfixNode } from '~/parser/node/postfix/postfix-node';
import { Parser } from '~/parser/parser';
import { evaluate } from '~/util/evaluate';
import { NodeType } from '../node-type';

test('after integer', () => {
  const text = '1!';
  const parser = new Parser(text);
  const nodes = parser.parse();
  const node = nodes[0] as PostfixNode;

  expect(node.$).toBe(NodeType.POSTFIX);
  expect(node.operator.text).toBe('!');
  expect(evaluate(node.value)).toBe(1);
});
