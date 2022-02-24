import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { MultipleBodyTree } from '../../../tree/body/multiple/multiple-body-tree';
import { SingleBodyTree } from '../../../tree/body/single/single-body-tree';
import { Translator } from '../../translator';
import { getBodyTranslator } from '../body/body-translator-helper';
import { getExpressionTranslator } from '../expression/expression-translator-helper';
import { getIdTranslator } from '../id/id-translator-helper';

export class AttributeTranslator implements Translator {
  constructor(private tree: AttributeTree) {}

  toString(): string {
    const modifier = (this.tree.id.name.text.startsWith('_') && 'private') || 'public';
    const id = getIdTranslator(this.tree.id);
    let parameters = (this.tree.parameters && `(${this.tree.parameters.join(', ')})`) || '';
    const type = getExpressionTranslator(this.tree.type, true) || 'any';
    let body = '';
    if (this.tree.body) {
      body = getBodyTranslator(this.tree.body).toString();
      if (this.tree.body instanceof SingleBodyTree) {
        body = ` = ${body}`;
      }
      if (this.tree.body instanceof MultipleBodyTree) {
        body = ` {\n${body.replace(/^(.+)/gm, '  $1')}\n}`;
      }
    }

    return `${modifier} ${id}${parameters}: ${type}${body}`;
  }
}
