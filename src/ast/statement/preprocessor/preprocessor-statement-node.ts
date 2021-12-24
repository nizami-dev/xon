import { PreprocessorStatementContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class PreprocessorStatementNode implements StatementNode {
  sourceReference: SourceReference;
  value: string;

  constructor(public ctx: PreprocessorStatementContext) {
    this.sourceReference = SourceReference.fromContext(this.ctx);

    const beforeSymbolsCount = 2;
    this.value = ctx.PREPROCESSOR().text.trim().slice(beforeSymbolsCount, -1);
  }

  toString(): string {
    return this.ctx.text;
  }
}
