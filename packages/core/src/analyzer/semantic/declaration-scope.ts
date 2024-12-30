import {
  ArrayData,
  Boolean2,
  Dictionary,
  Integer,
  newArrayData,
  newDictionary,
  newText,
  Nothing,
  nothing,
  Text,
} from '#common';
import {corePackageType, DeclarationSemantic, TypeSemantic} from '#core';
import {$Type, is, Model} from '#typing';

export type DeclarationScope<T extends DeclarationSemantic = DeclarationSemantic> = Model & {
  imports: ArrayData<DeclarationScope> | Nothing;
  parent: DeclarationScope | Nothing;
  declarations: Dictionary<Text, ArrayData<T>>;

  count(): Integer;
  add(declaration: T): void;
  all(): ArrayData<T>;

  filterByName<V extends $Type>(type: V, name: Text): ArrayData<Exclude<V['type'], undefined>>;

  find<V extends $Type>(
    type: V,
    name: Text,
    generics?: ArrayData<TypeSemantic | Nothing> | Nothing,
    parameters?: ArrayData<TypeSemantic | Nothing> | Nothing,
  ): Exclude<V['type'], undefined> | Nothing;

  clone(generics?: ArrayData<TypeSemantic | Nothing> | Nothing): DeclarationScope<T>;
  union(other: DeclarationScope<T>): DeclarationScope<T>;
  intersection(other: DeclarationScope<T>): DeclarationScope<T>;
  complement(other: DeclarationScope<T>): DeclarationScope<T>;
};

export const $DeclarationScope = corePackageType<DeclarationScope>('DeclarationScope');

export function newDeclarationScope<T extends DeclarationSemantic = DeclarationSemantic>(
  parent?: DeclarationScope<T> | Nothing,
  imports?: ArrayData<DeclarationScope<T>> | Nothing,
): DeclarationScope<T> {
  return {
    $: $DeclarationScope,
    imports,
    parent,
    declarations: newDictionary(),

    count(): Integer {
      return Object.keys(this.declarations).length;
    },

    add(declaration: T): void {
      // if (is(declaration, $ValueDeclarationSemantic) && this.find($DeclarationSemantic, declaration.name)) {
      //   analyzer.diagnosticManager.addPredefinedDiagnostic(declaration.nodeLink.reference, (x) =>
      //     x.declarationAlreadyExists(),
      //   );
      // }

      if (!this.declarations.has(declaration.name)) {
        this.declarations.set(declaration.name, newArrayData());
      }

      this.declarations.get(declaration.name)?.addLast(declaration);
    },

    all(): ArrayData<T> {
      return this.declarations.values().flat();
    },

    filterByName<V extends $Type>(type: V, name: Text): ArrayData<Exclude<V['type'], undefined>> {
      const thisDeclarations = this.declarations.get(name);
      const parentDeclarations = this.parent?.filterByName(type, name);
      const declarations = (thisDeclarations! ?? parentDeclarations)?.filter((x) => is(x, type));

      if (declarations && declarations.length() > 0) {
        return declarations;
      }

      const importDeclarations = this.imports?.toNativeArray()?.flatMap(
        (x) =>
          x.declarations
            .get(name)
            ?.toNativeArray()
            ?.filter((x) => is(x, type)) ?? [],
      );

      if (importDeclarations && importDeclarations.length > 0) {
        return newArrayData(importDeclarations);
      }

      return newArrayData();
    },

    find<V extends $Type>(
      type: V,
      name: Text,
      generics?: ArrayData<TypeSemantic | Nothing> | Nothing,
      parameters?: ArrayData<TypeSemantic | Nothing> | Nothing,
    ): Exclude<V['type'], undefined> | Nothing {
      const declarations = this.filterByName(type, newText(name));

      if (declarations.length() === 0) {
        // analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) =>
        //   x.declarationNotFound(analyzer.config.literalTypeNames.integerTypeName),
        // );

        return nothing;
      }

      // todo fix it
      const filtered = declarations; // .filter((x) =>
      //   generics && x.generics ? x.generics.length === generics.length : true,
      // );

      if (filtered.length() !== 1) {
        // diagnosticManager.addError(node, DIAGNOSTIC_MESSAGE.tooManyDeclarationsFoundWithName(node.text));

        return nothing;
      }

      return filtered.first();
    },

    clone(generics?: ArrayData<TypeSemantic | Nothing> | Nothing): DeclarationScope<T> {
      const declarationManager = newDeclarationScope<T>();

      // todo simplify it. allow create declaration manager from 'declarations' field
      for (const declaration of this.all()) {
        declarationManager.add(declaration);
      }

      return declarationManager;
    },

    union(other: DeclarationScope<T>): DeclarationScope<T> {
      const newDeclarationManager = newDeclarationScope<T>();
      const allDeclarations = [...this.all(), ...other.all()];

      for (const declaration of allDeclarations) {
        newDeclarationManager.add(declaration);
      }

      return newDeclarationManager;
    },

    intersection(other: DeclarationScope<T>): DeclarationScope<T> {
      // todo add 'intersection' logic instead of 'union'
      return this.union(other);
    },

    complement(other: DeclarationScope<T>): DeclarationScope<T> {
      // todo add 'complement' logic instead of 'union'
      return this.union(other);
    },

    equals(other: DeclarationScope): Boolean2 {
      return this === other;
    },
  };
}