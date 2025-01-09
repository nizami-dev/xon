import {
  angleCloseNodeParse,
  angleOpenNodeParse,
  braceCloseNodeParse,
  braceOpenNodeParse,
  bracketCloseNodeParse,
  bracketOpenNodeParse,
  commaNodeParse,
  commentBlockNodeParse,
  commentLineNodeParse,
  documentationCloseNodeParse,
  documentationDescriptionNodeParse,
  documentationLabelNodeParse,
  documentationOpenNodeParse,
  idNodeParse,
  integerContentNodeParse,
  joiningNodeParse,
  LexicalNodeParseFn,
  nlNodeParse,
  operatorNodeParse,
  parenCloseNodeParse,
  parenOpenNodeParse,
  parseCharCloseNode,
  parseCharContentNode,
  parseCharOpenNode,
  stringCloseNodeParse,
  stringLexicalNodeParse,
  stringOpenNodeParse,
  unknownNodeParse,
  whitespaceNodeParse,
} from '#analyzer';
import {ArrayData, FunctionData, newArrayData, newFunctionData} from '#common';

// todo remove function and use static field
// todo remove all nodes if possible and use single node (e.g. 'TokenNode')
export function codeLexicalParsers(): ArrayData<FunctionData<LexicalNodeParseFn>> {
  return newArrayData([
    newFunctionData(documentationOpenNodeParse),
    newFunctionData(documentationCloseNodeParse),
    newFunctionData(documentationLabelNodeParse),
    newFunctionData(documentationDescriptionNodeParse),

    newFunctionData(parseCharOpenNode),
    newFunctionData(parseCharContentNode),
    newFunctionData(parseCharCloseNode),

    newFunctionData(stringOpenNodeParse),
    newFunctionData(stringLexicalNodeParse),
    newFunctionData(stringCloseNodeParse),

    newFunctionData(parenOpenNodeParse),
    newFunctionData(parenCloseNodeParse),

    newFunctionData(bracketOpenNodeParse),
    newFunctionData(bracketCloseNodeParse),

    newFunctionData(angleOpenNodeParse),
    newFunctionData(angleCloseNodeParse),

    newFunctionData(braceOpenNodeParse),
    newFunctionData(braceCloseNodeParse),

    newFunctionData(integerContentNodeParse),

    newFunctionData(commaNodeParse),

    newFunctionData(commentLineNodeParse),
    newFunctionData(commentBlockNodeParse),
    newFunctionData(whitespaceNodeParse),
    newFunctionData(nlNodeParse),
    newFunctionData(joiningNodeParse),

    // todo should we add 'documentationOpenNodeParse' in codeAnalyzer instead of documentationAnalyzer ???
    newFunctionData(documentationOpenNodeParse),
    newFunctionData(stringOpenNodeParse),
    newFunctionData(parseCharOpenNode),
    newFunctionData(operatorNodeParse),
    newFunctionData(idNodeParse),
    newFunctionData(unknownNodeParse),
  ]);
}