import { parseExpression } from '../../../tree/util/parse';
import { CoreDeclarationScope } from '../../core-declaration-scope';
import { LambdaTypeMetadata } from '../../type/lambda/lambda-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('lambda', () => {
  const code = '(x String): x + x';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope());

  expect(metadata.type).toBeInstanceOf(LambdaTypeMetadata);
});