import { Boolean } from '../../../lib/core';
import { DeclarationMetadata } from '../declaration-metadata';
import { CoreDeclarationScope } from './core/core-declaration-scope';

export class DeclarationScope {
  core = new CoreDeclarationScope(this);
  declarations: DeclarationMetadata[] = [];

  constructor(public parent?: DeclarationScope) {}

  add(metadata: DeclarationMetadata) {
    this.declarations.push(metadata);
  }

  all(): DeclarationMetadata[] {
    const parentDeclarations = this.parent?.all() || [];
    return [...this.declarations, ...parentDeclarations];
  }

  clone() {
    const scope = new DeclarationScope();
    scope.declarations = this.declarations.slice();
    scope.parent = this.parent;
    scope.core = this.core;
    return scope;
  }

  filter(name: String, predicate?: (x: DeclarationMetadata) => Boolean): DeclarationMetadata[] {
    const declarations = this.declarations.filter(
      (x) => x.name === name && (!predicate || predicate(x)),
    );
    if (declarations.length) {
      return declarations;
    }
    return this.parent?.filter(name, predicate) || [];
  }

  // operators
  union(other: DeclarationScope): DeclarationScope {
    const scope = this.clone();
    const leftAll = this.all();
    other
      .all()
      .filter((x) => !leftAll.some((z) => z.equals(x)))
      .forEach((x) => scope.add(x));
    return scope;
  }

  intersect(other: DeclarationScope): DeclarationScope {
    const left = this.all();
    const right = other.all();
    const scope = new DeclarationScope(this);
    const commons = left.filter((x) => right.some((z) => x.name === z.name));
    scope.declarations = left.concat(right).filter((x) => !commons.some((z) => x.name === z.name));
    return scope;
  }
}
