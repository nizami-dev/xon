import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';
import { IntegerExpressionTree } from '~/tree/expression/integer/integer-expression-tree';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';
import { parseStatement } from '~/util/parse';

test('variable assignment colon', () => {
  const code = 'a : 1';
  const tree = parseStatement(code) as DeclarationStatementTree;

  expect(tree).toBeInstanceOf(DeclarationStatementTree);
  const parameter = tree.declaration as ParameterDeclarationTree;
  expect(parameter).toBeInstanceOf(ParameterDeclarationTree);
  expect(parameter.name?.text).toBe('a');
  expect(parameter.type).toBeInstanceOf(IntegerExpressionTree);
  expect((parameter.type as IntegerExpressionTree).value).toBe(1);
  expect(parameter.value).toBe(null);
});

test('variable assignment equals', () => {
  const code = 'a  =  1';
  const tree = parseStatement(code) as DeclarationStatementTree;

  expect(tree).toBeInstanceOf(DeclarationStatementTree);
  const parameter = tree.declaration as ParameterDeclarationTree;
  expect(parameter).toBeInstanceOf(ParameterDeclarationTree);
  expect(parameter.name?.text).toBe('a');
  expect(parameter.type).toBe(null);
  expect(parameter.value).toBeInstanceOf(IntegerExpressionTree);
  expect((parameter.value as IntegerExpressionTree).value).toBe(1);
});
