import { IssueType } from '../issue/issue';
import { IssueManager, createIssueManager } from '../issue/issue-manager';
import { Integer, Nothing, nothing } from '../lib/core';
import { Source } from '../source/source';
import { SourcePosition, sourcePosition } from '../source/source-position';
import { SourceRange, sourceRange } from '../source/source-range';
import { Node } from './node/node';
import { StatementNode } from './node/statement/statement-node';
import { UnknownNode } from './node/unknown/unknown-node';

// todo perhaps should be new instance every time ???
export interface SyntaxContext {
  source: Source;
  position: SourcePosition;
  hiddenNodes: Node[];
  unknownNodes: UnknownNode[];
  breakNode: Node | null;
  parentStatement: StatementNode | Nothing;
  nodes: Node[];
  previousStatement: StatementNode | null;
  statements: StatementNode[];
  issueManager: IssueManager;

  getRange: (length: Integer) => SourceRange;
}

export function syntaxContext(source: Source, position: SourcePosition): SyntaxContext {
  return {
    source,
    position,
    hiddenNodes: [],
    unknownNodes: [],
    parentStatement: nothing,
    nodes: [],
    previousStatement: null,
    breakNode: null,
    statements: [],
    issueManager: createIssueManager(source, IssueType.SYNTACTIC),

    getRange(length: Integer): SourceRange {
      const { index, line, column } = this.position;
      const start = sourcePosition(index, line, column);
      const stopIndex = index + length - 1;
      const stopColumn = column + length - 1;
      const stop = sourcePosition(stopIndex, line, stopColumn);

      return sourceRange(start, stop);
    },
  };
}
