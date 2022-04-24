import { InvokeExpressionContext } from '../../../grammar/xon-parser';
import { getArgumentsFormatter } from '../../arguments/arguments-formatter-helper';
import { FormatterConfig } from '../../formatter-config';
import { ExpressionFormatter } from '../expression-formatter';
import { getExpressionFormatter } from '../expression-formatter-helper';
import { MemberExpressionFormatter } from '../member/member-expression-formatter';

export class InvokeExpressionFormatter extends ExpressionFormatter {
  constructor(public ctx: InvokeExpressionContext, public config: FormatterConfig) {
    super();
  }

  toString() {
    const expression = getExpressionFormatter(this.ctx.expression(), this.config).indent(
      this.indentCount,
    );

    const args = getArgumentsFormatter(this.ctx.arguments(), this.config).indent(this.indentCount);

    if (this.broken && expression instanceof MemberExpressionFormatter) {
      expression.break(true);
      args.indent(this.indentCount + 1);
    }

    const endLineLength = this.config.endLineLength(expression.toString());
    const startLineLength = this.config.endLineLength(args.toString());

    if (endLineLength + startLineLength > this.config.printWidth) {
      this.broken = true;
      args.break(true);
    }

    return expression + args.toString();
  }
}