import {
  AFFIX_MODIFIERS,
  idNode,
  idNodeParse,
  LexicalAnalyzer,
  LexicalNode,
  operatorNode,
  OPERATORS_SORTED,
} from '#analyzer';
import {newText, Nothing, nothing} from '#common';

export function operatorNodeParse(analyzer: LexicalAnalyzer): LexicalNode | Nothing {
  const operator = OPERATORS_SORTED.last((x) => analyzer.hasTextAtIndex(x));

  if (!operator) {
    return nothing;
  }

  const text = newText(operator);

  if (analyzer.previousNonHiddenNode && AFFIX_MODIFIERS.hasItem(analyzer.previousNonHiddenNode.text)) {
    const range = analyzer.textReference(text);

    return idNode(range, text);
  }

  const id = idNodeParse(analyzer);

  if (id && id.text.count() > text.count()) {
    return id;
  }

  const reference = analyzer.textReference(text);

  return operatorNode(reference, text);
}