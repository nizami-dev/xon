import { StatementContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { ExpressionStatementTree } from './expression-statement/expression-statement.tree';

export class StatementTree extends BaseTree {
    ctx: StatementContext;

    asExpression() {
        const self = this as any;
        return (self as ExpressionStatementTree)?.value;
    }
}
