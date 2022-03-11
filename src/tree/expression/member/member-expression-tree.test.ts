import { parseExpression } from '../../../util/parse';
import { IdExpressionTree } from '../id/id-expression-tree';
import { MemberExpressionTree } from './member-expression-tree';

test('not safe', () => {
  const code = 'abc.def';
  const tree = parseExpression(code) as MemberExpressionTree;
  expect(tree).toBeInstanceOf(MemberExpressionTree);

  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
  expect((tree.instance as IdExpressionTree).id.text).toBe('abc');
  expect(tree.id.text).toBe('def');
});
