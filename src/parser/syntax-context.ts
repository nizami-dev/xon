import {IssueType} from '../issue/issue';
import {IssueManager, createIssueManager} from '../issue/issue-manager';
import {Boolean2, Integer, Nothing, nothing} from '../lib/core';
import {Source} from '../source/source';
import {SourcePosition, sourcePosition} from '../source/source-position';
import {SourceRange, sourceRange} from '../source/source-range';
import {Node} from './node/node';
import {StatementNode} from './node/syntax/statement/statement-node';
import {TokenNode} from './node/token/token-node';
import {NL} from './syntax-config';
import {Formatter} from './util/formatter';

export interface SyntaxContext {
  source: Source;
  position: SourcePosition;
  hiddenNodes: TokenNode[];
  formatters: Formatter[];
  breakNode: Node | Nothing;
  parentStatement: StatementNode | Nothing;
  lastNode: Node | Nothing;
  nodes: Node[];
  previousStatement: StatementNode | Nothing;
  statements: StatementNode[];
  issueManager: IssueManager;

  getRange: (length: Integer, canContainNewLines: Boolean2) => SourceRange;
}

export function syntaxContext(source: Source, position: SourcePosition): SyntaxContext {
  return {
    source,
    position,
    hiddenNodes: [],
    formatters: [],
    parentStatement: nothing,
    lastNode: nothing,
    nodes: [],
    previousStatement: nothing,
    breakNode: nothing,
    statements: [],
    issueManager: createIssueManager(source, IssueType.SYNTACTIC),

    getRange(length: Integer, canContainNewLines: Boolean2): SourceRange {
      const {index, line, column} = this.position;

      if (canContainNewLines) {
        let nlCount = line;
        let columnIndent = column;

        for (let i = index; i < index + length; i++) {
          const char = this.source.text[i];

          if (char === NL) {
            nlCount += 1;
            columnIndent = 0;

            continue;
          }

          columnIndent += 1;
        }

        const start = sourcePosition(index, line, column);
        const stop = sourcePosition(index + length, nlCount, columnIndent);

        return sourceRange(start, stop);
      }

      const stopIndex = index + length;
      const stopColumn = column + length;
      const start = sourcePosition(index, line, column);
      const stop = sourcePosition(stopIndex, line, stopColumn);

      return sourceRange(start, stop);
    },
  };
}
