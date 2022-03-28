import { IfStatementContext, StatementContext } from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { none } from '../../lib/core';
import { FormatterConfig } from '../formatter-config';
import { IfStatementFormatter } from './if/if-statement-formatter';
import { StatementFormatter } from './statement-formatter';

export const getStatementFormatter = (
  ctx: StatementContext,
  config: FormatterConfig,
): StatementFormatter => {
  if (!ctx) return none;

  if (ctx instanceof IfStatementContext) return new IfStatementFormatter(ctx, config);

  Issue.errorFromContext(ctx, `Statement formatter not found for "${ctx.constructor.name}"`);
};
