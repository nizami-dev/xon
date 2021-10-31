import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { IdTypeTree } from '../../../tree/type/id-type/id-type.tree';
import { TypeTree } from '../../../tree/type/type.tree';
import { getDefinitionMetadata } from '../../type/type-metadata-helper';
import { MetadataHandler } from '../metadata-handler';

export class TypeHandler extends MetadataHandler {
  handle(tree: TypeTree) {
    if (tree instanceof IdTypeTree) {
      tree.genericArguments.forEach((x) => this.handle(x));
      const genericArguments = tree.genericArguments.map((x) => x.typeMetadata);
      const definitionTree = this.scope.findDefinition(tree.name, genericArguments.length);
      if (definitionTree instanceof ClassDefinitionTree)
        tree.typeMetadata = getDefinitionMetadata(definitionTree, genericArguments);
      tree.id.declarationLink = tree.typeMetadata.sourceReference;
      return;
    }

    throw new Error(`'${tree.constructor.name}' handler not found`);
  }
}
