/* eslint-disable @typescript-eslint/no-use-before-define */
import {
  ArrayExpressionContext,
  ExpressionContext,
  GroupExpressionContext,
  IdExpressionContext,
  InfixExpressionContext,
  InvokeExpressionContext,
  LiteralExpressionContext,
  MemberExpressionContext,
  MethodExpressionContext,
  NullableExpressionContext,
  PrefixExpressionContext,
  PreprocessorExpressionContext,
} from '../../grammar/xon-parser';
import { Issue } from '../../issue-service/issue';
import { IdTree } from '../id/id-tree';
import { getIdTree } from '../id/id-tree-helper';
import { ArrayExpressionTree } from './array/array-expression-tree';
import { ExpressionTree } from './expression-tree';
import { GroupExpressionTree } from './group/group-expression-tree';
import { IdExpressionTree } from './id/id-expression-tree';
import { InfixExpressionTree } from './infix/infix-expression-tree';
import { InvokeExpressionTree } from './invoke/invoke-expression-tree';
import { LiteralExpressionTree } from './literal/literal-expression-tree';
import { MemberExpressionTree } from './member/member-expression-tree';
import { MethodExpressionTree } from './method/method-expression-tree';
import { NullableExpressionTree } from './nullable/nullable-expression-tree';
import { PrefixExpressionTree } from './prefix/prefix-expression-tree';
import { PreprocessorExpressionTree } from './preprocessor/preprocessor-expression-tree';

export const getExpressionTree = (ctx: ExpressionContext): ExpressionTree => {
  if (!ctx) return null;

  if (ctx instanceof PreprocessorExpressionContext) return new PreprocessorExpressionTree(ctx);
  if (ctx instanceof ArrayExpressionContext) return new ArrayExpressionTree(ctx);
  if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
  if (ctx instanceof InvokeExpressionContext) return new InvokeExpressionTree(ctx);
  if (ctx instanceof LiteralExpressionContext) return new LiteralExpressionTree(ctx);
  if (ctx instanceof MemberExpressionContext) return new MemberExpressionTree(ctx);
  if (ctx instanceof MethodExpressionContext) return new MethodExpressionTree(ctx);
  if (ctx instanceof NullableExpressionContext) return new NullableExpressionTree(ctx);
  if (ctx instanceof GroupExpressionContext) return new GroupExpressionTree(ctx);
  if (ctx instanceof PrefixExpressionContext) return new PrefixExpressionTree(ctx);

  if (ctx instanceof InfixExpressionContext) {
    // todo each module can use own priority
    const operatorsPriorities = ['^', '* / %', '+ -', '..', '< <= >= >', '== !=', '&', '|'].map(
      (x) => x.split(' '),
    );
    const flatExpressions = (x) =>
      x instanceof InfixExpressionContext
        ? [...flatExpressions(x._left), getIdTree(x.operator()._name), getExpressionTree(x._right)]
        : [getExpressionTree(x)];
    const expressions: (IdTree | ExpressionTree)[] = flatExpressions(ctx);

    for (const operators of operatorsPriorities) {
      const operatorsCount = expressions.filter(
        (x) => x instanceof IdTree && operators.includes(x.text),
      ).length;
      for (let i = 0; i < operatorsCount; i++) {
        const operatorIndex = expressions.findIndex(
          (x) => x instanceof IdTree && operators.includes(x?.text),
        );
        if (operatorIndex >= 0) {
          expressions[operatorIndex] = new InfixExpressionTree(
            expressions[operatorIndex] as IdTree,
            expressions[operatorIndex - 1] as ExpressionTree,
            expressions[operatorIndex + 1] as ExpressionTree,
          );
          expressions.splice(operatorIndex - 1, 1);
          expressions.splice(operatorIndex, 1);
        }
      }
    }
    return expressions[0] as ExpressionTree;
  }

  Issue.errorFromContext(ctx, `Expression tree not found for "${ctx.constructor.name}"`);
};

export const getExpressionTrees = (contexts: ExpressionContext[]): ExpressionTree[] => {
  return contexts?.map(getExpressionTree) || [];
};
