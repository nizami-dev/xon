import { ParameterContext } from '../../grammar/xon-parser';
import { ParameterTree } from './parameter-tree';

export const getParameterTree = (ctx: ParameterContext): ParameterTree => {
  if (ctx === undefined) return undefined;
  return new ParameterTree(ctx);
};

export const getParameterTrees = (contexts: ParameterContext[]): ParameterTree[] => {
  return contexts?.map((x) => getParameterTree(x)) || [];
};
