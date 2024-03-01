import {Formatter, formatNodes} from '../formatter/formatter';
import {ISSUE_MESSAGE} from '../issue/issue-message';
import {Boolean2, Nothing, String2, nothing} from '../lib/core';
import {Source, createSource} from '../source/source';
import {SourcePosition, zeroPosition} from '../source/source-position';
import {rangeFromPosition} from '../source/source-range';
import {$Node, Node, is} from './node/node';
import {scanGroupNode} from './node/syntax/group/group-node';
import {StatementNode} from './node/syntax/statement/statement-node';
import {scanCharNode} from './node/token/char/char-node';
import {scanCloseNode} from './node/token/close/close-node';
import {scanCommentBlockNode} from './node/token/comment-block/comment-block-node';
import {scanCommentLineNode} from './node/token/comment-line/comment-line-node';
import {scanIdNode} from './node/token/id/id-node';
import {scanIntegerNode} from './node/token/integer/integer-node';
import {scanJoiningNode} from './node/token/joining/joining-node';
import {NlNode, scanNlNode} from './node/token/nl/nl-node';
import {scanOperatorNode} from './node/token/operator/operator-node';
import {scanStringNode} from './node/token/string/string-node';
import {isHiddenToken} from './node/token/token-node';
import {UnknownNode, scanUnknownNode} from './node/token/unknown/unknown-node';
import {scanWhitespaceNode} from './node/token/whitespace/whitespace-node';
import {SyntaxContext, syntaxContext} from './syntax-context';
import {SyntaxResult} from './syntax-result';
import {putStatementNode} from './util/put-statement-node';

type SyntaxScanFn = (context: SyntaxContext) => Node | Nothing;

const scanFunctions: SyntaxScanFn[] = [
  scanCommentBlockNode,
  scanCommentLineNode,
  scanIntegerNode,
  scanStringNode,
  scanCharNode,
  scanNlNode,
  scanCloseNode,
  scanJoiningNode,
  scanWhitespaceNode,
  scanOperatorNode,
  scanIdNode,
  // todo should we remove scan group from here
  scanGroupNode,
  scanUnknownNode,
];

export function parseSyntax(text: String2): SyntaxResult {
  const source = createSource(nothing, text);
  const result = parseSyntaxUntil(source, zeroPosition(), nothing);
  result.issueManager.issues.forEach((x) => result.issueManager.log(x));

  return result;
}

export function parseSyntaxUntil(
  source: Source,
  startPosition: SourcePosition,
  breakOnNodeFn: ((node: Node) => Boolean2) | Nothing,
): SyntaxResult {
  const context = syntaxContext(source, startPosition);

  while (context.position.index < context.source.text.length) {
    const node = nextNode(context);

    if (!node) {
      continue;
    }

    if (breakOnNodeFn && breakOnNodeFn(node)) {
      context.breakNode = node;

      break;
    }

    if (is<UnknownNode>(node, $Node.UNKNOWN)) {
      if (is<UnknownNode>(context.lastNode, $Node.UNKNOWN)) {
        context.lastNode.range.stop = node.range.stop;
        context.lastNode.text += node.text;

        continue;
      }

      context.issueManager.addError(node, ISSUE_MESSAGE.unexpectedNode());
    }

    if (isHiddenToken(node)) {
      const hiddenNodes =
        (context.lastNode ?? context.previousStatement?.children.last())?.hiddenNodes ?? context.hiddenNodes;

      hiddenNodes.push(node);

      if (is<NlNode>(node, $Node.NL) && context.nodes.length > 0) {
        putStatementNode(context);
        context.nodes = [];
      }

      continue;
    }

    if (context.nodes.length === 0 && context.previousStatement) {
      formatStatement(context, context.previousStatement);
    }

    context.lastNode = node;
    context.nodes.push(node);
  }

  // if (context.previousStatement) {
  //   formatStatement(context, context.previousStatement);
  // }

  if (context.nodes.length > 0) {
    putStatementNode(context);
    formatStatement(context, context.previousStatement!);
  }

  return {
    ...context,
    syntaxContext: context,
  };
}

function nextNode(context: SyntaxContext): Node {
  const node = scanFunctions.findMap((scan) => scan(context));

  if (node) {
    context.position.index = node.range.stop.index;
    context.position.line = node.range.stop.line;
    context.position.column = node.range.stop.column;

    return node;
  }

  throw new Error('Unexpected Node');
}

function formatStatement(context: SyntaxContext, statement: StatementNode) {
  formatNodes(context, statement.children);

  const formatter: Formatter = {
    text: '  '.repeat(statement.indentLevel),
    range: rangeFromPosition(statement.range.start),
  };

  context.formatters.push(formatter);
}
