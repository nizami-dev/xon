import { MethodMemberContext } from '../../../../grammar/xon-parser';
import { ParameterTree } from '../../../parameter/parameter.tree';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { getTypeTree } from '../../../type/type-helper';
import { MemberTree } from '../member.tree';

export class MethodMemberTree extends MemberTree {
  public isPrivate: boolean;

  public generics: string[];

  public statements: StatementTree[];

  public constructor(public ctx?: MethodMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.isPrivate = this.name.startsWith('_');
    this.generics =
      ctx
        .generics()
        ?.id()
        .map((x) => x.text) || [];
    this.parameters = ParameterTree.fromContext(ctx.parameters());
    this.returnType = getTypeTree(ctx.type());
    this.statements = getStatementsTrees(ctx.body());

    this.markGenerics(this.generics);
  }
}
