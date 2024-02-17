import { Issue, createSyntacticErrorIssue, formatIssue } from '../issue/issue';
import { IssueMessage } from '../issue/issue-message';
import { Integer } from '../lib/core';
import { DeclarationMeta } from '../semantic/semantic';
import { Source } from '../source/source';
import { SourcePosition, sourcePosition } from '../source/source-position';
import { SourceRange, sourceRange } from '../source/source-range';
import { Node, StatementNode } from './node/node';
import { RootNode, rootNode } from './node/root/root-node';
import { ParserConfig } from './syntax-config';

// todo perhaps should be new instance every time ???
export interface SyntaxContext {
  source: Source;
  position: SourcePosition;
  hidden: Node[];
  issues: Issue[];
  declarations: DeclarationMeta[];
  breakNode: Node | null;
  parentStatement: StatementNode;
  nodes: Node[];
  previousStatement: StatementNode | null;
  root: RootNode;
  config: ParserConfig;
  // todo remove it. temp hack
  modelDeclarationType: StatementNode['modelDeclarationMeta'];
  getRange: (length: Integer) => SourceRange;
  addErrorIssue: (node: Node, message: IssueMessage) => Issue;
}

export function parserContext(source: Source, position: SourcePosition, config: ParserConfig): SyntaxContext {
  return {
    source,
    position,
    hidden: [],
    issues: [],
    declarations: [],
    parentStatement: rootNode(),
    nodes: [],
    previousStatement: null,
    breakNode: null,
    root: rootNode(),
    config,
    modelDeclarationType: null,
    getRange(length: Integer): SourceRange {
      const { index, line, column } = this.position;
      const start = sourcePosition(index, line, column);
      const stopIndex = index + length - 1;
      const stopColumn = column + length - 1;
      const stop = sourcePosition(stopIndex, line, stopColumn);

      return sourceRange(start, stop);
    },
    addErrorIssue(node: Node, message: IssueMessage): Issue {
      const issue = createSyntacticErrorIssue(node, message);
      this.issues.push(issue);

      if (this.config.throwErrorIssue) {
        const formattedIssue = formatIssue(this, issue);
        throw new Error(formattedIssue);
      }

      return issue;
    },
  };
}