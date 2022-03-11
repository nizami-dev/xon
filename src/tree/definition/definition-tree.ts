import { DefinitionContext } from '../../grammar/xon-parser';
import { none } from '../../lib/core';
import { DefinitionDeclarationMetadata } from '../../metadata/declaration/definition/definition-declaration-metadata';
import { getIdToken, IdToken } from '../../util/id-token';
import { SourceRange } from '../../util/source-range';
import { AttributeTree } from '../attribute/attribute-tree';
import { getAttributeTrees } from '../attribute/attribute-tree-helper';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { ParameterTree } from '../parameter/parameter-tree';
import { getParameterTrees } from '../parameter/parameter-tree-helper';
import { Tree } from '../tree';

export class DefinitionTree implements Tree {
  sourceRange: SourceRange;
  metadata: DefinitionDeclarationMetadata;
  modifier: IdToken;
  name: IdToken;
  generics: ParameterTree[];
  parameters: ParameterTree[];
  base?: ExpressionTree;
  attributes: AttributeTree[];

  constructor(private ctx: DefinitionContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.modifier = getIdToken(ctx._modifier);
    this.name = getIdToken(ctx._name);
    this.generics = getParameterTrees(ctx.generics()?.parameter());
    this.parameters = getParameterTrees(ctx.methodParameters()?.parameter()) || none;
    this.base = getExpressionTree(ctx.expr()) || none;
    this.attributes = getAttributeTrees(ctx.attribute());
  }

  toString() {
    const modifier = (this.modifier && this.modifier.text + ' ') || '';
    let base = (this.base && ' ' + this.base) || '';
    let generics = (this.generics.length && `<|${this.generics.join(', ')}|>`) || '';
    let parameters = (this.ctx.methodParameters() && `(${this.parameters.join(', ')})`) || '';
    const properties = this.attributes.filter((x) => !x.isMethod).join('\n');
    const methodsWithBody = this.attributes.filter((x) => x.isMethod && x.body).join('\n\n');
    const methodsWithNoBody = this.attributes.filter((x) => x.isMethod && !x.body).join('\n');
    const attributes = [properties, methodsWithBody, methodsWithNoBody]
      .filter(Boolean)
      .join('\n\n')
      .replace(/^(.+)/gm, '  $1');
    return (
      modifier +
      this.name +
      generics +
      parameters +
      base +
      ((attributes && '\n' + attributes) || '')
    );
  }
}
