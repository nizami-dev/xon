import { ParserRuleContext, Token } from 'antlr4ts';
import { SourceReference } from './source-reference';

export class IdToken {
  text: string;
  declarationReference: SourceReference;
  sourceReference?: SourceReference;

  public constructor(public token?: Token) {
    if (!token) return;

    this.text = token.text;
    this.sourceReference = SourceReference.fromToken(token);
  }

  setDeclarationReference(declarationReference: SourceReference) {
    this.declarationReference = declarationReference;
  }

  toString(): string {
    return this.text;
  }

  static fromContext(context: ParserRuleContext): IdToken {
    const id = new IdToken();
    id.text = context.text;
    id.sourceReference = SourceReference.fromContext(context);
    return id;
  }

  static fromTokens(tokens: Token[]): IdToken {
    const id = new IdToken();
    id.text = tokens.map((x) => x.text).join('');
    id.sourceReference = SourceReference.fromTwoTokens(tokens[0], tokens[tokens.length - 1]);
    return id;
  }

  static fromText(text: string): IdToken {
    const id = new IdToken();
    id.text = text;
    return id;
  }
}
