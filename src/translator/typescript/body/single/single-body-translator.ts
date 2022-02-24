import { SingleBodyTree } from '../../../../tree/body/single/single-body-tree';
import { getStatementTranslator } from '../../statement/statement-translator-helper';
import { BodyTranslator } from '../body-translator';

export class SingleBodyTranslator implements BodyTranslator {
  constructor(private tree: SingleBodyTree) {}

  toString(): string {
    return getStatementTranslator(this.tree.statement).toString();
  }
}