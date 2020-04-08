import { FunctionStatementContext } from '../../../grammar/xon-parser';
import { getExpressionTree } from '../../expression/expression-helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { getStatementsTree } from '../statement-helper';
import { StatementTree } from '../statement.tree';

export class FunctionStatementTree extends StatementTree {
    name: string;
    args: {
        name: string;
        valueType: string;
        value: ExpressionTree;
    }[];

    statements: StatementTree[];

    constructor(public ctx: FunctionStatementContext) {
        super();
        this.name = ctx.ID().text;
        this.args =
            ctx.argument()?.map(x => ({
                name: x._name.text,
                valueType: x._valueType.text,
                value: x._value && getExpressionTree(x._value),
            })) || [];
        this.statements = getStatementsTree(ctx.body().statement());
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            args: this.args.map(x => ({
                name: x.name,
                valueType: x.valueType,
                value: x.value?.toPlain(),
            })),
            statements: this.statements.map(x => x.toPlain()),
        };
    }
}
