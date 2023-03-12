import { CharStreams, CommonTokenStream, TokenStream } from 'antlr4ts';
import { XonLexer } from '~/grammar/xon-lexer';
import { XonParser } from '~/grammar/xon-parser';
import { String2 } from '~/lib/core';
import { Node } from '~/node/node';
import { getNode } from '~/node/node-helper';
import { SourceNode } from '~/node/source/source-node';
import { OperatorsOrder } from '~/parser/parser-config';
import { Source } from '~/parser/source/source';
import { ThrowingErrorListener } from '~/parser/throwing-error-listener';
import { operatorsOrders } from './parser-config';

export class Parser {
  antlrLexer: XonLexer;
  antlrTokenStream: CommonTokenStream;
  antlrParser: XonParser;

  constructor(public source: Source, public operatorsOrders: OperatorsOrder[]) {
    this.antlrLexer = this.lexer();
    this.antlrTokenStream = this.tokenStream(this.antlrLexer);
    this.antlrParser = this.parser(this.antlrTokenStream);
  }

  private lexer(): XonLexer {
    const inputStream = CharStreams.fromString(this.source.text, this.source.location ?? '');
    const lexer = new XonLexer(inputStream);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new ThrowingErrorListener());

    lexer.operators = this.operatorsOrders
      .flatMap((operatorsOrder) => operatorsOrder.operators)
      .flatMap((operators) => operators.split(' '));

    return lexer;
  }

  private tokenStream(lexer: XonLexer): CommonTokenStream {
    return new CommonTokenStream(lexer);
  }

  private parser(tokenStream: TokenStream): XonParser {
    // const tokens = this.lexer()
    //   .getAllTokens()
    //   .filter((x) => x.channel === XonLexer.DEFAULT_TOKEN_CHANNEL)
    //   .map((x) => ({
    //     type: XonLexer.VOCABULARY.getSymbolicName(x.type),
    //     value: x.text,
    //   }));
    // console.log(tokens.map((x) => `${x.type}`).join(' '));
    // console.log(tokens.map((x) => `'${x.value}'`).join(', '));
    // console.log(tokens.map((x) => `${x.type} = '${x.value}'`).join(', '));

    const parser = new XonParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(new ThrowingErrorListener());

    return parser;
  }

  public sourceNode(): SourceNode {
    return getNode(this.antlrParser.source()) as SourceNode;
  }

  public expression(): Node {
    const ctx = this.antlrParser.expression();

    return getNode(ctx);
  }
}

export function parseSource(code: String2): SourceNode {
  const source = Source.fromText(code, null);
  const parser = new Parser(source, operatorsOrders);
  return parser.sourceNode();
}

export function parseExpression(code: String2): Node {
  const source = Source.fromText(code, null);
  const parser = new Parser(source, operatorsOrders);
  return parser.expression();
}
