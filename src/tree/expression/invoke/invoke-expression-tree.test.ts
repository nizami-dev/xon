import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { MemberExpressionTree } from '~/tree/expression/member/member-expression-tree';
import { StringExpressionTree } from '~/tree/expression/string/string-expression-tree';
import { parseExpression } from '~/util/parse';

test('method call', () => {
  const code = 'f[3, \'str\']';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.arguments.length).toBe(2);
  expect(tree.arguments[0].value as IntegerExpressionTree).toBeInstanceOf(IntegerExpressionTree);
  expect((tree.arguments[0].value as IntegerExpressionTree).value).toBe(3);
  expect(tree.arguments[1].value as StringExpressionTree).toBeInstanceOf(StringExpressionTree);
  expect((tree.arguments[1].value as StringExpressionTree).value).toBe('str');
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('method on several lines', () => {
  const code = `f[3,
        'str', 123, 
    415]`;
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.arguments.length).toBe(4);
  const [arg1, arg2] = tree.arguments.map((x) => x.value);
  expect(arg1).toBeInstanceOf(IntegerExpressionTree);
  expect(arg2).toBeInstanceOf(StringExpressionTree);
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('can call with type parameter', () => {
  const code = 'a.get [1]';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.arguments.length).toBe(1);
  const [arg] = tree.arguments.map((x) => x.value);
  expect(arg).toBeInstanceOf(IntegerExpressionTree);
  expect(tree.instance).toBeInstanceOf(MemberExpressionTree);
});
