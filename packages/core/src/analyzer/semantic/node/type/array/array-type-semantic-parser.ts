import {Nothing, nothing} from '#common';
import {
  $,
  ArrayTypeSemantic,
  arrayTypeSemantic,
  BracketGroupNode,
  is,
  Node,
  SemanticAnalyzer,
  typeSemanticParse,
  unknownTypeSemantic,
} from '#core';

export function arrayTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): ArrayTypeSemantic | Nothing {
  if (!is(node, $.BracketGroupNode)) {
    return nothing;
  }

  return arrayTypeSemanticParse(analyzer, node);
}

export function arrayTypeSemanticParse(
  analyzer: SemanticAnalyzer,
  node: BracketGroupNode,
): ArrayTypeSemantic {
  const items = node.items.map((x) =>
    x.value ? typeSemanticParse(analyzer, x.value) : unknownTypeSemantic(analyzer, x),
  );
  const semantic = arrayTypeSemantic(analyzer, node, items);

  return semantic;
}
