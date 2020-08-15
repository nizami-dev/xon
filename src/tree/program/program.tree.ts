import { ProgramContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { ImportsTree } from '../imports/imports.tree';
import { LineBreakStatementTree } from '../statement/line-break-statement/line-break-statement.tree';
import { getStatementTree } from '../statement/statement-helper';
import { StatementTree } from '../statement/statement.tree';

export class ProgramTree extends BaseTree {
    imports: ImportsTree[];
    statements: StatementTree[];
    definitions: DefinitionTree[];

    constructor(public ctx: ProgramContext) {
        super();
        this.imports = ctx
            .imports()
            .filter((x) => !x.LineBreak())
            .map((x) => new ImportsTree(x));
        this.statements = ctx
            .statement()
            ?.map(getStatementTree)
            .filter((x) => !(x instanceof LineBreakStatementTree));

        this.definitions = ctx.definition()?.map((x) => new DefinitionTree(x));
    }

    toPlain() {
        return {
            ...super.toPlain(),
            imports: this.imports.map((x) => x.toPlain()),
            statements: this.statements.map((x) => x.toPlain()),
            definitions: this.definitions.map((x) => x.toPlain()),
        };
    }
}
