import { ExpressionContext } from '../../grammar/xon-parser';
import { ExpressionMetadata } from '../../metadata/expression-metadata';
import { BaseTree } from '../base.tree';

export abstract class ExpressionTree extends BaseTree {
  abstract ctx?: ExpressionContext;
  metadata: ExpressionMetadata;
}
