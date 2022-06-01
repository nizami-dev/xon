import { ImportProvider } from "../../import-provider";
import { DefinitionMetadata } from "../definition/definition-metadata";
import { DeclarationScope } from "../scope/declaration-scope";

export class CoreDeclarationScope extends DeclarationScope {
  get boolean(): DefinitionMetadata {
    return this.findDefinitionByName('Boolean');
  }
  get integer(): DefinitionMetadata {
    return this.findDefinitionByName('Integer');
  }
  get float(): DefinitionMetadata {
    return this.findDefinitionByName('Float');
  }
  get number(): DefinitionMetadata {
    return this.findDefinitionByName('Number');
  }
  get none(): DefinitionMetadata {
    return this.findDefinitionByName('None');
  }
  get string(): DefinitionMetadata {
    return this.findDefinitionByName('String');
  }

  constructor() {
    super();

    const corePath = 'src/lib/@xon/core';
    const importProvider = new ImportProvider(corePath);
    this.parameters = importProvider.scope().parameters;
  }
}
