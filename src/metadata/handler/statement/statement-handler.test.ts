import { LiteralExpressionTree } from '../../../tree/expression/literal-expression/literal-expression.tree';
import { parseStatement } from '../../../tree/parse';
import { ExpressionStatementTree } from '../../../tree/statement/expression-statement/expression-statement.tree';
import { AttributeStatementTree } from '../../../tree/statement/variable-declaration-statement/variable-declaration-statement.tree';
import { StatementHandler } from './statement-handler';

test('expression', () => {
  const code = '123';
  const tree = parseStatement<ExpressionStatementTree>(code);
  expect(tree).toBeInstanceOf(ExpressionStatementTree);

  new StatementHandler().handle(tree);
  expect((tree.expression as LiteralExpressionTree).literal.value).toBe(123);
  expect(tree.expression.typeMetadata.name).toBe('Integer');
});

test('variable declaration: type from value', () => {
  const code = 'a := 123';
  const tree = parseStatement<AttributeStatementTree>(code);
  expect(tree).toBeInstanceOf(AttributeStatementTree);

  new StatementHandler().handle(tree);
  expect(tree.id.declarationLink).toBe(tree.id.sourceReference);
  expect(tree.typeMetadata.name).toBe('Integer');
  expect(tree.type).toBe(null);
  expect(tree.value.typeMetadata.name).toBe('Integer');
});
