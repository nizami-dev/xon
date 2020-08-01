import { ImportMemberContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export class ImportMember extends BaseTree {
    name: string;
    alias: string;

    constructor(public ctx: ImportMemberContext) {
        super();
        this.name = ctx._name.text;
        this.alias = ctx._alias?.text;
    }

    toPlain() {
        return {
            ...super.toPlain(),
            name: this.name,
            alias: this.alias,
        };
    }
}
