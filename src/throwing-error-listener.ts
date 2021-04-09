import { ANTLRErrorListener, Recognizer } from 'antlr4ts';
import { ATNSimulator } from 'antlr4ts/atn/ATNSimulator';
import { Issue } from './issue-service/issue';
import { IssueLevel } from './issue-service/issue-level';
import { IssueService } from './issue-service/issue-service';

export class ThrowingErrorListener<TSymbol> implements ANTLRErrorListener<TSymbol> {
  // eslint-disable-next-line class-methods-use-this
  public syntaxError<T extends TSymbol>(
    _recognizer: Recognizer<T, ATNSimulator>,
    _offendingSymbol: T | undefined,
    line: number,
    column: number,
    message: string,
  ): void {
    const issue = new Issue();
    issue.level = IssueLevel.Error;
    issue.message = message;
    issue.line = line;
    issue.column = column;
    issue.path = IssueService.instance.lastPath;
    IssueService.instance.lastScope.push(issue);
    throw issue.toError();
  }
}
