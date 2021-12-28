import { parseExpression } from '../../../util/parse';
import { CoreDeclarationScope } from '../../core-declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('member', () => {
  const code = 'true.toString()';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope());

  expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
  expect(metadata.type.declaration.name).toBe('String');
});
