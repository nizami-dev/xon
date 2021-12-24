import { parseExpression } from '../../../ast/util/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { LambdaTypeMetadata } from '../../type/lambda/lambda-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('lambda', () => {
  const code = '(x String): x + x';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(LambdaTypeMetadata);
});
