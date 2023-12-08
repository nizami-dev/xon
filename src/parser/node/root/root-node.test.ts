import { TokenNode } from '../../../parser/node/token-node';
import { parse } from '../../../parser/parser';
import { NodeType } from '../node-type';

test('comma', () => {
  const text = ',';
  const nodes = parse(text).root.children as TokenNode[];

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe(NodeType.COMMA);
  expect(nodes[0].text).toBe(',');
});
