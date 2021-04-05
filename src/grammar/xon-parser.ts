// Generated from XonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonParser extends Parser {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly IS = 3;
	public static readonly AS = 4;
	public static readonly IF = 5;
	public static readonly ELSE = 6;
	public static readonly ELSE_IF = 7;
	public static readonly LOOP = 8;
	public static readonly IN = 9;
	public static readonly BREAK = 10;
	public static readonly RETURN = 11;
	public static readonly OPEN_BRACKET = 12;
	public static readonly CLOSE_BRACKET = 13;
	public static readonly OPEN_PAREN = 14;
	public static readonly CLOSE_PAREN = 15;
	public static readonly OPEN_BRACE = 16;
	public static readonly CLOSE_BRACE = 17;
	public static readonly COMMA = 18;
	public static readonly ASSIGN = 19;
	public static readonly QUESTION = 20;
	public static readonly COLON = 21;
	public static readonly DOT = 22;
	public static readonly PLUS = 23;
	public static readonly MINUS = 24;
	public static readonly EXCLAMATION = 25;
	public static readonly ASTERISK = 26;
	public static readonly SLASH = 27;
	public static readonly MODULO = 28;
	public static readonly CARET = 29;
	public static readonly HASH = 30;
	public static readonly LESS_THAN = 31;
	public static readonly MORE_THAN = 32;
	public static readonly AMPERSAND = 33;
	public static readonly PIPE = 34;
	public static readonly TILDE = 35;
	public static readonly AD = 36;
	public static readonly UNDERSCORE = 37;
	public static readonly LAMBDA_START = 38;
	public static readonly FLOAT_LITERAL = 39;
	public static readonly INTEGER_LITERAL = 40;
	public static readonly BOOLEAN_LITERAL = 41;
	public static readonly CHAR_LITERAL = 42;
	public static readonly STRING_LITERAL = 43;
	public static readonly PREPROCESSOR = 44;
	public static readonly ID = 45;
	public static readonly NL = 46;
	public static readonly WS = 47;
	public static readonly COMMENT = 48;
	public static readonly RULE_program = 0;
	public static readonly RULE_library = 1;
	public static readonly RULE_libraryPath = 2;
	public static readonly RULE_libraryMember = 3;
	public static readonly RULE_definition = 4;
	public static readonly RULE_member = 5;
	public static readonly RULE_type = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_expression = 8;
	public static readonly RULE_literal = 9;
	public static readonly RULE_operator = 10;
	public static readonly RULE_parameter = 11;
	public static readonly RULE_argument = 12;
	public static readonly RULE_generics = 13;
	public static readonly RULE_body = 14;
	public static readonly RULE_id = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "library", "libraryPath", "libraryMember", "definition", "member", 
		"type", "statement", "expression", "literal", "operator", "parameter", 
		"argument", "generics", "body", "id",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'is'", "'as'", "'if'", "'else'", "'elif'", 
		"'loop'", "'in'", "'break'", "'return'", "'['", "']'", "'('", "')'", "'{'", 
		"'}'", "','", "'='", "'?'", "':'", "'.'", "'+'", "'-'", "'!'", "'*'", 
		"'/'", "'%'", "'^'", "'#'", "'<'", "'>'", "'&'", "'|'", "'~'", "'@'", 
		"'_'", "'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "IS", "AS", "IF", "ELSE", "ELSE_IF", "LOOP", 
		"IN", "BREAK", "RETURN", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "COMMA", "ASSIGN", "QUESTION", 
		"COLON", "DOT", "PLUS", "MINUS", "EXCLAMATION", "ASTERISK", "SLASH", "MODULO", 
		"CARET", "HASH", "LESS_THAN", "MORE_THAN", "AMPERSAND", "PIPE", "TILDE", 
		"AD", "UNDERSCORE", "LAMBDA_START", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"BOOLEAN_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "ID", 
		"NL", "WS", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonParser._LITERAL_NAMES, XonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XonParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IF) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.AD - 36)) | (1 << (XonParser.LAMBDA_START - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.BOOLEAN_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)) | (1 << (XonParser.PREPROCESSOR - 36)) | (1 << (XonParser.ID - 36)) | (1 << (XonParser.NL - 36)))) !== 0)) {
				{
				this.state = 36;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 32;
					this.library();
					}
					break;

				case 2:
					{
					this.state = 33;
					this.statement();
					}
					break;

				case 3:
					{
					this.state = 34;
					this.definition();
					}
					break;

				case 4:
					{
					this.state = 35;
					this.match(XonParser.NL);
					}
					break;
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public library(): LibraryContext {
		let _localctx: LibraryContext = new LibraryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_library);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.libraryPath();
			this.state = 42;
			this.match(XonParser.COLON);
			this.state = 43;
			this.libraryMember();
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 44;
				this.match(XonParser.COMMA);
				this.state = 45;
				this.libraryMember();
				}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryPath(): LibraryPathContext {
		let _localctx: LibraryPathContext = new LibraryPathContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XonParser.RULE_libraryPath);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this.id();
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.MINUS) {
				{
				{
				this.state = 52;
				this.match(XonParser.MINUS);
				this.state = 53;
				this.id();
				}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 59;
			this.match(XonParser.SLASH);
			this.state = 60;
			this.id();
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.MINUS) {
				{
				{
				this.state = 61;
				this.match(XonParser.MINUS);
				this.state = 62;
				this.id();
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public libraryMember(): LibraryMemberContext {
		let _localctx: LibraryMemberContext = new LibraryMemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_libraryMember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 68;
			_localctx._name = this.id();
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.AS) {
				{
				this.state = 69;
				this.match(XonParser.AS);
				this.state = 70;
				_localctx._alias = this.id();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let _localctx: DefinitionContext = new DefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			_localctx._name = this.id();
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.LESS_THAN) {
				{
				this.state = 74;
				this.generics();
				}
			}

			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.IS) {
				{
				this.state = 77;
				this.match(XonParser.IS);
				this.state = 78;
				this.type(0);
				}
			}

			this.state = 81;
			this.match(XonParser.COLON);
			this.state = 82;
			this.match(XonParser.NL);
			this.state = 83;
			this.match(XonParser.INDENT);
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 86;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.ASSIGN:
				case XonParser.DOT:
				case XonParser.PLUS:
				case XonParser.MINUS:
				case XonParser.EXCLAMATION:
				case XonParser.ASTERISK:
				case XonParser.SLASH:
				case XonParser.MODULO:
				case XonParser.CARET:
				case XonParser.LESS_THAN:
				case XonParser.MORE_THAN:
				case XonParser.AMPERSAND:
				case XonParser.PIPE:
				case XonParser.AD:
				case XonParser.ID:
					{
					this.state = 84;
					this.member();
					}
					break;
				case XonParser.NL:
					{
					this.state = 85;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 19)) & ~0x1F) === 0 && ((1 << (_la - 19)) & ((1 << (XonParser.ASSIGN - 19)) | (1 << (XonParser.DOT - 19)) | (1 << (XonParser.PLUS - 19)) | (1 << (XonParser.MINUS - 19)) | (1 << (XonParser.EXCLAMATION - 19)) | (1 << (XonParser.ASTERISK - 19)) | (1 << (XonParser.SLASH - 19)) | (1 << (XonParser.MODULO - 19)) | (1 << (XonParser.CARET - 19)) | (1 << (XonParser.LESS_THAN - 19)) | (1 << (XonParser.MORE_THAN - 19)) | (1 << (XonParser.AMPERSAND - 19)) | (1 << (XonParser.PIPE - 19)) | (1 << (XonParser.AD - 19)) | (1 << (XonParser.ID - 19)) | (1 << (XonParser.NL - 19)))) !== 0));
			this.state = 90;
			this.match(XonParser.DEDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member(): MemberContext {
		let _localctx: MemberContext = new MemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_member);
		let _la: number;
		try {
			this.state = 175;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				_localctx = new MethodMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 92;
				(_localctx as MethodMemberContext)._name = this.id();
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 93;
					this.generics();
					}
				}

				this.state = 96;
				this.match(XonParser.OPEN_PAREN);
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 97;
					this.parameter();
					this.state = 102;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 98;
						this.match(XonParser.COMMA);
						this.state = 99;
						this.parameter();
						}
						}
						this.state = 104;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 107;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 109;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 108;
					this.type(0);
					}
					break;
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 111;
					this.body();
					}
				}

				}
				break;

			case 2:
				_localctx = new InitMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				(_localctx as InitMemberContext)._name = this.match(XonParser.AD);
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 115;
					this.generics();
					}
				}

				this.state = 118;
				this.match(XonParser.OPEN_PAREN);
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 119;
					this.parameter();
					this.state = 124;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 120;
						this.match(XonParser.COMMA);
						this.state = 121;
						this.parameter();
						}
						}
						this.state = 126;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 129;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 131;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
				case 1:
					{
					this.state = 130;
					this.type(0);
					}
					break;
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 133;
					this.body();
					}
				}

				}
				break;

			case 3:
				_localctx = new IndexMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 136;
				(_localctx as IndexMemberContext)._name = this.match(XonParser.AD);
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 137;
					this.generics();
					}
				}

				this.state = 140;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 141;
				this.parameter();
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 142;
					this.match(XonParser.COMMA);
					this.state = 143;
					this.parameter();
					}
					}
					this.state = 148;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 149;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 150;
				this.type(0);
				this.state = 152;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 151;
					this.body();
					}
				}

				}
				break;

			case 4:
				_localctx = new OperatorMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 154;
				(_localctx as OperatorMemberContext)._name = this.operator();
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 155;
					this.generics();
					}
				}

				this.state = 158;
				this.match(XonParser.OPEN_PAREN);
				this.state = 159;
				this.parameter();
				this.state = 160;
				this.match(XonParser.COMMA);
				this.state = 161;
				this.parameter();
				this.state = 162;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 163;
				this.type(0);
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 164;
					this.body();
					}
				}

				}
				break;

			case 5:
				_localctx = new PropertyMemberContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 167;
				(_localctx as PropertyMemberContext)._name = this.id();
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.LESS_THAN) {
					{
					this.state = 168;
					this.generics();
					}
				}

				this.state = 171;
				this.type(0);
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 172;
					this.body();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, XonParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 221;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				_localctx = new PlainTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 178;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new GenericTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 179;
				this.id();
				this.state = 180;
				this.match(XonParser.LESS_THAN);
				this.state = 181;
				this.type(0);
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.COMMA) {
					{
					{
					this.state = 182;
					this.match(XonParser.COMMA);
					this.state = 183;
					this.type(0);
					}
					}
					this.state = 188;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 189;
				this.match(XonParser.MORE_THAN);
				}
				break;

			case 3:
				{
				_localctx = new ObjectTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 191;
				this.match(XonParser.OPEN_BRACE);
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 192;
					this.parameter();
					this.state = 197;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 193;
						this.match(XonParser.COMMA);
						this.state = 194;
						this.parameter();
						}
						}
						this.state = 199;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 202;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new FunctionTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 203;
				this.match(XonParser.OPEN_PAREN);
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ID) {
					{
					this.state = 204;
					this.parameter();
					this.state = 209;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 205;
						this.match(XonParser.COMMA);
						this.state = 206;
						this.parameter();
						}
						}
						this.state = 211;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 214;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 215;
				this.type(5);
				}
				break;

			case 5:
				{
				_localctx = new ParenthesizedTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 216;
				this.match(XonParser.OPEN_PAREN);
				this.state = 217;
				this.type(0);
				this.state = 218;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;

			case 6:
				{
				_localctx = new LiteralTypeContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 220;
				this.literal();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 234;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 232;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						_localctx = new UnionTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 223;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 224;
						this.match(XonParser.PIPE);
						this.state = 225;
						this.type(5);
						}
						break;

					case 2:
						{
						_localctx = new ArrayTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 226;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 227;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 228;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 3:
						{
						_localctx = new MetaTypeContext(new TypeContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_type);
						this.state = 229;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 230;
						this.match(XonParser.HASH);
						this.state = 231;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 284;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 237;
				this.match(XonParser.IF);
				this.state = 238;
				this.expression(0);
				this.state = 239;
				this.body();
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === XonParser.ELSE_IF) {
					{
					{
					this.state = 240;
					this.match(XonParser.ELSE_IF);
					this.state = 241;
					this.expression(0);
					this.state = 242;
					this.body();
					}
					}
					this.state = 248;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ELSE) {
					{
					this.state = 249;
					this.match(XonParser.ELSE);
					this.state = 250;
					this.body();
					}
				}

				}
				break;

			case 2:
				_localctx = new LoopStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 253;
				this.match(XonParser.LOOP);
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.AD - 36)) | (1 << (XonParser.LAMBDA_START - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.BOOLEAN_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)) | (1 << (XonParser.ID - 36)))) !== 0)) {
					{
					this.state = 267;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
					case 1:
						{
						this.state = 254;
						(_localctx as LoopStatementContext)._value = this.id();
						this.state = 259;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
						case 1:
							{
							this.state = 255;
							this.match(XonParser.COMMA);
							this.state = 257;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.ID) {
								{
								this.state = 256;
								(_localctx as LoopStatementContext)._key = this.id();
								}
							}

							}
							break;
						}
						this.state = 263;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.COMMA) {
							{
							this.state = 261;
							this.match(XonParser.COMMA);
							this.state = 262;
							(_localctx as LoopStatementContext)._index = this.id();
							}
						}

						this.state = 265;
						this.match(XonParser.IN);
						}
						break;
					}
					this.state = 269;
					this.expression(0);
					}
				}

				this.state = 272;
				this.body();
				}
				break;

			case 3:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 273;
				this.match(XonParser.BREAK);
				}
				break;

			case 4:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 274;
				this.match(XonParser.RETURN);
				this.state = 276;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 275;
					this.expression(0);
					}
					break;
				}
				}
				break;

			case 5:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 278;
				this.id();
				this.state = 279;
				this.match(XonParser.ASSIGN);
				this.state = 280;
				this.expression(0);
				}
				break;

			case 6:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 282;
				this.expression(0);
				}
				break;

			case 7:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 283;
				this.match(XonParser.PREPROCESSOR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, XonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 287;
				this.id();
				}
				break;
			case XonParser.AD:
				{
				_localctx = new InstanceExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 288;
				this.match(XonParser.AD);
				}
				break;
			case XonParser.FLOAT_LITERAL:
			case XonParser.INTEGER_LITERAL:
			case XonParser.BOOLEAN_LITERAL:
			case XonParser.CHAR_LITERAL:
			case XonParser.STRING_LITERAL:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 289;
				this.literal();
				}
				break;
			case XonParser.OPEN_BRACKET:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 290;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.AD - 36)) | (1 << (XonParser.LAMBDA_START - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.BOOLEAN_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)) | (1 << (XonParser.ID - 36)))) !== 0)) {
					{
					this.state = 291;
					this.argument();
					this.state = 296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 292;
						this.match(XonParser.COMMA);
						this.state = 293;
						this.argument();
						}
						}
						this.state = 298;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 301;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;
			case XonParser.OPEN_PAREN:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 302;
				this.match(XonParser.OPEN_PAREN);
				this.state = 303;
				this.expression(0);
				this.state = 304;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			case XonParser.LAMBDA_START:
				{
				_localctx = new LambdaExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 306;
				this.match(XonParser.LAMBDA_START);
				this.state = 317;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
				case 1:
					{
					this.state = 307;
					this.parameter();
					this.state = 312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === XonParser.COMMA) {
						{
						{
						this.state = 308;
						this.match(XonParser.COMMA);
						this.state = 309;
						this.parameter();
						}
						}
						this.state = 314;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 315;
					this.match(XonParser.COLON);
					}
					break;
				}
				this.state = 319;
				this.expression(1);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 357;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 355;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						_localctx = new OperatorExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 322;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 323;
						this.operator();
						this.state = 324;
						this.expression(5);
						}
						break;

					case 2:
						{
						_localctx = new MemberExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 326;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 327;
						this.match(XonParser.DOT);
						this.state = 328;
						this.id();
						}
						break;

					case 3:
						{
						_localctx = new MethodExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 329;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 330;
						this.match(XonParser.OPEN_PAREN);
						this.state = 339;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.AD - 36)) | (1 << (XonParser.LAMBDA_START - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.BOOLEAN_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)) | (1 << (XonParser.ID - 36)))) !== 0)) {
							{
							this.state = 331;
							this.argument();
							this.state = 336;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.COMMA) {
								{
								{
								this.state = 332;
								this.match(XonParser.COMMA);
								this.state = 333;
								this.argument();
								}
								}
								this.state = 338;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 341;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 4:
						{
						_localctx = new IndexExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expression);
						this.state = 342;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 343;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 352;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === XonParser.OPEN_BRACKET || _la === XonParser.OPEN_PAREN || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.AD - 36)) | (1 << (XonParser.LAMBDA_START - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.BOOLEAN_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)) | (1 << (XonParser.ID - 36)))) !== 0)) {
							{
							this.state = 344;
							this.argument();
							this.state = 349;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la === XonParser.COMMA) {
								{
								{
								this.state = 345;
								this.match(XonParser.COMMA);
								this.state = 346;
								this.argument();
								}
								}
								this.state = 351;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 354;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;
					}
					}
				}
				this.state = 359;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_literal);
		try {
			this.state = 365;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.BOOLEAN_LITERAL:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 360;
				this.match(XonParser.BOOLEAN_LITERAL);
				}
				break;
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 361;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 362;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 363;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 364;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_operator);
		let _la: number;
		try {
			this.state = 400;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.PLUS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 367;
				this.match(XonParser.PLUS);
				}
				break;
			case XonParser.MINUS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 368;
				this.match(XonParser.MINUS);
				}
				break;
			case XonParser.ASTERISK:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 369;
				this.match(XonParser.ASTERISK);
				}
				break;
			case XonParser.SLASH:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 370;
				this.match(XonParser.SLASH);
				}
				break;
			case XonParser.MODULO:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 371;
				this.match(XonParser.MODULO);
				}
				break;
			case XonParser.LESS_THAN:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 372;
				this.match(XonParser.LESS_THAN);
				this.state = 374;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ASSIGN) {
					{
					this.state = 373;
					this.match(XonParser.ASSIGN);
					}
				}

				}
				break;
			case XonParser.ASSIGN:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 376;
				this.match(XonParser.ASSIGN);
				this.state = 377;
				this.match(XonParser.ASSIGN);
				}
				break;
			case XonParser.MORE_THAN:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 378;
				this.match(XonParser.MORE_THAN);
				this.state = 380;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ASSIGN) {
					{
					this.state = 379;
					this.match(XonParser.ASSIGN);
					}
				}

				}
				break;
			case XonParser.EXCLAMATION:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 382;
				this.match(XonParser.EXCLAMATION);
				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.ASSIGN) {
					{
					this.state = 383;
					this.match(XonParser.ASSIGN);
					}
				}

				}
				break;
			case XonParser.CARET:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 386;
				this.match(XonParser.CARET);
				}
				break;
			case XonParser.AMPERSAND:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 387;
				this.match(XonParser.AMPERSAND);
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.AMPERSAND) {
					{
					this.state = 388;
					this.match(XonParser.AMPERSAND);
					}
				}

				}
				break;
			case XonParser.PIPE:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 391;
				this.match(XonParser.PIPE);
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.PIPE) {
					{
					this.state = 392;
					this.match(XonParser.PIPE);
					}
				}

				}
				break;
			case XonParser.DOT:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 395;
				this.match(XonParser.DOT);
				this.state = 396;
				this.match(XonParser.DOT);
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.DOT) {
					{
					this.state = 397;
					this.match(XonParser.DOT);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 402;
			this.id();
			this.state = 404;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (XonParser.OPEN_PAREN - 14)) | (1 << (XonParser.OPEN_BRACE - 14)) | (1 << (XonParser.FLOAT_LITERAL - 14)) | (1 << (XonParser.INTEGER_LITERAL - 14)) | (1 << (XonParser.BOOLEAN_LITERAL - 14)) | (1 << (XonParser.CHAR_LITERAL - 14)) | (1 << (XonParser.STRING_LITERAL - 14)) | (1 << (XonParser.ID - 14)))) !== 0)) {
				{
				this.state = 403;
				this.type(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, XonParser.RULE_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 65, this._ctx) ) {
			case 1:
				{
				this.state = 406;
				this.id();
				this.state = 407;
				this.match(XonParser.ASSIGN);
				}
				break;
			}
			this.state = 411;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public generics(): GenericsContext {
		let _localctx: GenericsContext = new GenericsContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XonParser.RULE_generics);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(XonParser.LESS_THAN);
			this.state = 414;
			this.id();
			this.state = 419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.COMMA) {
				{
				{
				this.state = 415;
				this.match(XonParser.COMMA);
				this.state = 416;
				this.id();
				}
				}
				this.state = 421;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 422;
			this.match(XonParser.MORE_THAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XonParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.match(XonParser.COLON);
			this.state = 425;
			this.match(XonParser.NL);
			this.state = 426;
			this.match(XonParser.INDENT);
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 429;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.IF:
				case XonParser.LOOP:
				case XonParser.BREAK:
				case XonParser.RETURN:
				case XonParser.OPEN_BRACKET:
				case XonParser.OPEN_PAREN:
				case XonParser.AD:
				case XonParser.LAMBDA_START:
				case XonParser.FLOAT_LITERAL:
				case XonParser.INTEGER_LITERAL:
				case XonParser.BOOLEAN_LITERAL:
				case XonParser.CHAR_LITERAL:
				case XonParser.STRING_LITERAL:
				case XonParser.PREPROCESSOR:
				case XonParser.ID:
					{
					this.state = 427;
					this.statement();
					}
					break;
				case XonParser.NL:
					{
					this.state = 428;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.IF) | (1 << XonParser.LOOP) | (1 << XonParser.BREAK) | (1 << XonParser.RETURN) | (1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.AD - 36)) | (1 << (XonParser.LAMBDA_START - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.BOOLEAN_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)) | (1 << (XonParser.PREPROCESSOR - 36)) | (1 << (XonParser.ID - 36)) | (1 << (XonParser.NL - 36)))) !== 0));
			this.state = 433;
			this.match(XonParser.DEDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, XonParser.RULE_id);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.match(XonParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 8:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 7);

		case 5:
			return this.precpred(this._ctx, 6);

		case 6:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x032\u01B8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x07\x02\'\n\x02\f\x02\x0E\x02*\v\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x07\x031\n\x03\f\x03\x0E\x034\v\x03\x03\x04\x03\x04" +
		"\x03\x04\x07\x049\n\x04\f\x04\x0E\x04<\v\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04B\n\x04\f\x04\x0E\x04E\v\x04\x03\x05\x03\x05\x03\x05\x05\x05" +
		"J\n\x05\x03\x06\x03\x06\x05\x06N\n\x06\x03\x06\x03\x06\x05\x06R\n\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06Y\n\x06\r\x06\x0E\x06" +
		"Z\x03\x06\x03\x06\x03\x07\x03\x07\x05\x07a\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07g\n\x07\f\x07\x0E\x07j\v\x07\x05\x07l\n\x07\x03\x07\x03" +
		"\x07\x05\x07p\n\x07\x03\x07\x05\x07s\n\x07\x03\x07\x03\x07\x05\x07w\n" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07}\n\x07\f\x07\x0E\x07\x80" +
		"\v\x07\x05\x07\x82\n\x07\x03\x07\x03\x07\x05\x07\x86\n\x07\x03\x07\x05" +
		"\x07\x89\n\x07\x03\x07\x03\x07\x05\x07\x8D\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x07\x93\n\x07\f\x07\x0E\x07\x96\v\x07\x03\x07\x03\x07\x03" +
		"\x07\x05\x07\x9B\n\x07\x03\x07\x03\x07\x05\x07\x9F\n\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xA8\n\x07\x03\x07\x03" +
		"\x07\x05\x07\xAC\n\x07\x03\x07\x03\x07\x05\x07\xB0\n\x07\x05\x07\xB2\n" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xBB\n\b\f\b\x0E\b" +
		"\xBE\v\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xC6\n\b\f\b\x0E\b\xC9" +
		"\v\b\x05\b\xCB\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\xD2\n\b\f\b\x0E" +
		"\b\xD5\v\b\x05\b\xD7\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05" +
		"\b\xE0\n\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b" +
		"\xEB\n\b\f\b\x0E\b\xEE\v\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07" +
		"\t\xF7\n\t\f\t\x0E\t\xFA\v\t\x03\t\x03\t\x05\t\xFE\n\t\x03\t\x03\t\x03" +
		"\t\x03\t\x05\t\u0104\n\t\x05\t\u0106\n\t\x03\t\x03\t\x05\t\u010A\n\t\x03" +
		"\t\x03\t\x05\t\u010E\n\t\x03\t\x05\t\u0111\n\t\x03\t\x03\t\x03\t\x03\t" +
		"\x05\t\u0117\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u011F\n\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0129\n\n\f\n\x0E\n" +
		"\u012C\v\n\x05\n\u012E\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x07\n\u0139\n\n\f\n\x0E\n\u013C\v\n\x03\n\x03\n\x05\n\u0140\n" +
		"\n\x03\n\x05\n\u0143\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x07\n\u0151\n\n\f\n\x0E\n\u0154\v\n\x05\n\u0156" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x07\n\u015E\n\n\f\n\x0E\n\u0161" +
		"\v\n\x05\n\u0163\n\n\x03\n\x07\n\u0166\n\n\f\n\x0E\n\u0169\v\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x05\v\u0170\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x05\f\u0179\n\f\x03\f\x03\f\x03\f\x03\f\x05\f\u017F\n\f\x03\f" +
		"\x03\f\x05\f\u0183\n\f\x03\f\x03\f\x03\f\x05\f\u0188\n\f\x03\f\x03\f\x05" +
		"\f\u018C\n\f\x03\f\x03\f\x03\f\x05\f\u0191\n\f\x05\f\u0193\n\f\x03\r\x03" +
		"\r\x05\r\u0197\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u019C\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u01A4\n\x0F\f\x0F\x0E" +
		"\x0F\u01A7\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x06\x10\u01B0\n\x10\r\x10\x0E\x10\u01B1\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x02\x02\x04\x0E\x12\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\x02\x02\x02\u020F\x02(\x03\x02\x02\x02\x04+\x03\x02\x02\x02" +
		"\x065\x03\x02\x02\x02\bF\x03\x02\x02\x02\nK\x03\x02\x02\x02\f\xB1\x03" +
		"\x02\x02\x02\x0E\xDF\x03\x02\x02\x02\x10\u011E\x03\x02\x02\x02\x12\u0142" +
		"\x03\x02\x02\x02\x14\u016F\x03\x02\x02\x02\x16\u0192\x03\x02\x02\x02\x18" +
		"\u0194\x03\x02\x02\x02\x1A\u019B\x03\x02\x02\x02\x1C\u019F\x03\x02\x02" +
		"\x02\x1E\u01AA\x03\x02\x02\x02 \u01B5\x03\x02\x02\x02\"\'\x05\x04\x03" +
		"\x02#\'\x05\x10\t\x02$\'\x05\n\x06\x02%\'\x070\x02\x02&\"\x03\x02\x02" +
		"\x02&#\x03\x02\x02\x02&$\x03\x02\x02\x02&%\x03\x02\x02\x02\'*\x03\x02" +
		"\x02\x02(&\x03\x02\x02\x02()\x03\x02\x02\x02)\x03\x03\x02\x02\x02*(\x03" +
		"\x02\x02\x02+,\x05\x06\x04\x02,-\x07\x17\x02\x02-2\x05\b\x05\x02./\x07" +
		"\x14\x02\x02/1\x05\b\x05\x020.\x03\x02\x02\x0214\x03\x02\x02\x0220\x03" +
		"\x02\x02\x0223\x03\x02\x02\x023\x05\x03\x02\x02\x0242\x03\x02\x02\x02" +
		"5:\x05 \x11\x0267\x07\x1A\x02\x0279\x05 \x11\x0286\x03\x02\x02\x029<\x03" +
		"\x02\x02\x02:8\x03\x02\x02\x02:;\x03\x02\x02\x02;=\x03\x02\x02\x02<:\x03" +
		"\x02\x02\x02=>\x07\x1D\x02\x02>C\x05 \x11\x02?@\x07\x1A\x02\x02@B\x05" +
		" \x11\x02A?\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03" +
		"\x02\x02\x02D\x07\x03\x02\x02\x02EC\x03\x02\x02\x02FI\x05 \x11\x02GH\x07" +
		"\x06\x02\x02HJ\x05 \x11\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02J\t\x03" +
		"\x02\x02\x02KM\x05 \x11\x02LN\x05\x1C\x0F\x02ML\x03\x02\x02\x02MN\x03" +
		"\x02\x02\x02NQ\x03\x02\x02\x02OP\x07\x05\x02\x02PR\x05\x0E\b\x02QO\x03" +
		"\x02\x02\x02QR\x03\x02\x02\x02RS\x03\x02\x02\x02ST\x07\x17\x02\x02TU\x07" +
		"0\x02\x02UX\x07\x03\x02\x02VY\x05\f\x07\x02WY\x070\x02\x02XV\x03\x02\x02" +
		"\x02XW\x03\x02\x02\x02YZ\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02" +
		"\x02[\\\x03\x02\x02\x02\\]\x07\x04\x02\x02]\v\x03\x02\x02\x02^`\x05 \x11" +
		"\x02_a\x05\x1C\x0F\x02`_\x03\x02\x02\x02`a\x03\x02\x02\x02ab\x03\x02\x02" +
		"\x02bk\x07\x10\x02\x02ch\x05\x18\r\x02de\x07\x14\x02\x02eg\x05\x18\r\x02" +
		"fd\x03\x02\x02\x02gj\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02" +
		"il\x03\x02\x02\x02jh\x03\x02\x02\x02kc\x03\x02\x02\x02kl\x03\x02\x02\x02" +
		"lm\x03\x02\x02\x02mo\x07\x11\x02\x02np\x05\x0E\b\x02on\x03\x02\x02\x02" +
		"op\x03\x02\x02\x02pr\x03\x02\x02\x02qs\x05\x1E\x10\x02rq\x03\x02\x02\x02" +
		"rs\x03\x02\x02\x02s\xB2\x03\x02\x02\x02tv\x07&\x02\x02uw\x05\x1C\x0F\x02" +
		"vu\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x03\x02\x02\x02x\x81\x07\x10\x02" +
		"\x02y~\x05\x18\r\x02z{\x07\x14\x02\x02{}\x05\x18\r\x02|z\x03\x02\x02\x02" +
		"}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x82\x03" +
		"\x02\x02\x02\x80~\x03\x02\x02\x02\x81y\x03\x02\x02\x02\x81\x82\x03\x02" +
		"\x02\x02\x82\x83\x03\x02\x02\x02\x83\x85\x07\x11\x02\x02\x84\x86\x05\x0E" +
		"\b\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x88\x03\x02" +
		"\x02\x02\x87\x89\x05\x1E\x10\x02\x88\x87\x03\x02\x02\x02\x88\x89\x03\x02" +
		"\x02\x02\x89\xB2\x03\x02\x02\x02\x8A\x8C\x07&\x02\x02\x8B\x8D\x05\x1C" +
		"\x0F\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8E\x03\x02" +
		"\x02\x02\x8E\x8F\x07\x0E\x02\x02\x8F\x94\x05\x18\r\x02\x90\x91\x07\x14" +
		"\x02\x02\x91\x93\x05\x18\r\x02\x92\x90\x03\x02\x02\x02\x93\x96\x03\x02" +
		"\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x97\x03\x02" +
		"\x02\x02\x96\x94\x03\x02\x02\x02\x97\x98\x07\x0F\x02\x02\x98\x9A\x05\x0E" +
		"\b\x02\x99\x9B\x05\x1E\x10\x02\x9A\x99\x03\x02\x02\x02\x9A\x9B\x03\x02" +
		"\x02\x02\x9B\xB2\x03\x02\x02\x02\x9C\x9E\x05\x16\f\x02\x9D\x9F\x05\x1C" +
		"\x0F\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA0\x03\x02" +
		"\x02\x02\xA0\xA1\x07\x10\x02\x02\xA1\xA2\x05\x18\r\x02\xA2\xA3\x07\x14" +
		"\x02\x02\xA3\xA4\x05\x18\r\x02\xA4\xA5\x07\x11\x02\x02\xA5\xA7\x05\x0E" +
		"\b\x02\xA6\xA8\x05\x1E\x10\x02\xA7\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02" +
		"\x02\x02\xA8\xB2\x03\x02\x02\x02\xA9\xAB\x05 \x11\x02\xAA\xAC\x05\x1C" +
		"\x0F\x02\xAB\xAA\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x03\x02" +
		"\x02\x02\xAD\xAF\x05\x0E\b\x02\xAE\xB0\x05\x1E\x10\x02\xAF\xAE\x03\x02" +
		"\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1^\x03\x02" +
		"\x02\x02\xB1t\x03\x02\x02\x02\xB1\x8A\x03\x02\x02\x02\xB1\x9C\x03\x02" +
		"\x02\x02\xB1\xA9\x03\x02\x02\x02\xB2\r\x03\x02\x02\x02\xB3\xB4\b\b\x01" +
		"\x02\xB4\xE0\x05 \x11\x02\xB5\xB6\x05 \x11\x02\xB6\xB7\x07!\x02\x02\xB7" +
		"\xBC\x05\x0E\b\x02\xB8\xB9\x07\x14\x02\x02\xB9\xBB\x05\x0E\b\x02\xBA\xB8" +
		"\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBD" +
		"\x03\x02\x02\x02\xBD\xBF\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC0" +
		"\x07\"\x02\x02\xC0\xE0\x03\x02\x02\x02\xC1\xCA\x07\x12\x02\x02\xC2\xC7" +
		"\x05\x18\r\x02\xC3\xC4\x07\x14\x02\x02\xC4\xC6\x05\x18\r\x02\xC5\xC3\x03" +
		"\x02\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03" +
		"\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xC2\x03" +
		"\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xE0\x07" +
		"\x13\x02\x02\xCD\xD6\x07\x10\x02\x02\xCE\xD3\x05\x18\r\x02\xCF\xD0\x07" +
		"\x14\x02\x02\xD0\xD2\x05\x18\r\x02\xD1\xCF\x03\x02\x02\x02\xD2\xD5\x03" +
		"\x02\x02\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD4\x03\x02\x02\x02\xD4\xD7\x03" +
		"\x02\x02\x02\xD5\xD3\x03\x02\x02\x02\xD6\xCE\x03\x02\x02\x02\xD6\xD7\x03" +
		"\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x07\x11\x02\x02\xD9\xE0\x05" +
		"\x0E\b\x07\xDA\xDB\x07\x10\x02\x02\xDB\xDC\x05\x0E\b\x02\xDC\xDD\x07\x11" +
		"\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xE0\x05\x14\v\x02\xDF\xB3\x03\x02" +
		"\x02\x02\xDF\xB5\x03\x02\x02\x02\xDF\xC1\x03\x02\x02\x02\xDF\xCD\x03\x02" +
		"\x02\x02\xDF\xDA\x03\x02\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0\xEC\x03\x02" +
		"\x02\x02\xE1\xE2\f\x06\x02\x02\xE2\xE3\x07$\x02\x02\xE3\xEB\x05\x0E\b" +
		"\x07\xE4\xE5\f\t\x02\x02\xE5\xE6\x07\x0E\x02\x02\xE6\xEB\x07\x0F\x02\x02" +
		"\xE7\xE8\f\x03\x02\x02\xE8\xE9\x07 \x02\x02\xE9\xEB\x05 \x11\x02\xEA\xE1" +
		"\x03\x02\x02\x02\xEA\xE4\x03\x02\x02\x02\xEA\xE7\x03\x02\x02\x02\xEB\xEE" +
		"\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\x0F" +
		"\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x07\x07\x02\x02\xF0\xF1" +
		"\x05\x12\n\x02\xF1\xF8\x05\x1E\x10\x02\xF2\xF3\x07\t\x02\x02\xF3\xF4\x05" +
		"\x12\n\x02\xF4\xF5\x05\x1E\x10\x02\xF5\xF7\x03\x02\x02\x02\xF6\xF2\x03" +
		"\x02\x02\x02\xF7\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03" +
		"\x02\x02\x02\xF9\xFD\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC\x07" +
		"\b\x02\x02\xFC\xFE\x05\x1E\x10\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03" +
		"\x02\x02\x02\xFE\u011F\x03\x02\x02\x02\xFF\u0110\x07\n\x02\x02\u0100\u0105" +
		"\x05 \x11\x02\u0101\u0103\x07\x14\x02\x02\u0102\u0104\x05 \x11\x02\u0103" +
		"\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x03\x02" +
		"\x02\x02\u0105\u0101\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106" +
		"\u0109\x03\x02\x02\x02\u0107\u0108\x07\x14\x02\x02\u0108\u010A\x05 \x11" +
		"\x02\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010B" +
		"\x03\x02\x02\x02\u010B\u010C\x07\v\x02\x02\u010C\u010E\x03\x02\x02\x02" +
		"\u010D\u0100\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F\x03" +
		"\x02\x02\x02\u010F\u0111\x05\x12\n\x02\u0110\u010D\x03\x02\x02\x02\u0110" +
		"\u0111\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u011F\x05\x1E" +
		"\x10\x02\u0113\u011F\x07\f\x02\x02\u0114\u0116\x07\r\x02\x02\u0115\u0117" +
		"\x05\x12\n\x02\u0116\u0115\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02" +
		"\u0117\u011F\x03\x02\x02\x02\u0118\u0119\x05 \x11\x02\u0119\u011A\x07" +
		"\x15\x02\x02\u011A\u011B\x05\x12\n\x02\u011B\u011F\x03\x02\x02\x02\u011C" +
		"\u011F\x05\x12\n\x02\u011D\u011F\x07.\x02\x02\u011E\xEF\x03\x02\x02\x02" +
		"\u011E\xFF\x03\x02\x02\x02\u011E\u0113\x03\x02\x02\x02\u011E\u0114\x03" +
		"\x02\x02\x02\u011E\u0118\x03\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E" +
		"\u011D\x03\x02\x02\x02\u011F\x11\x03\x02\x02\x02\u0120\u0121\b\n\x01\x02" +
		"\u0121\u0143\x05 \x11\x02\u0122\u0143\x07&\x02\x02\u0123\u0143\x05\x14" +
		"\v\x02\u0124\u012D\x07\x0E\x02\x02\u0125\u012A\x05\x1A\x0E\x02\u0126\u0127" +
		"\x07\x14\x02\x02\u0127\u0129\x05\x1A\x0E\x02\u0128\u0126\x03\x02\x02\x02" +
		"\u0129\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03" +
		"\x02\x02\x02\u012B\u012E\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D" +
		"\u0125\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u012F\x03\x02" +
		"\x02\x02\u012F\u0143\x07\x0F\x02\x02\u0130\u0131\x07\x10\x02\x02\u0131" +
		"\u0132\x05\x12\n\x02\u0132\u0133\x07\x11\x02\x02\u0133\u0143\x03\x02\x02" +
		"\x02\u0134\u013F\x07(\x02\x02\u0135\u013A\x05\x18\r\x02\u0136\u0137\x07" +
		"\x14\x02\x02\u0137\u0139\x05\x18\r\x02\u0138\u0136\x03\x02\x02\x02\u0139" +
		"\u013C\x03\x02\x02\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B\x03\x02" +
		"\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C\u013A\x03\x02\x02\x02\u013D" +
		"\u013E\x07\x17\x02\x02\u013E\u0140\x03\x02\x02\x02\u013F\u0135\x03\x02" +
		"\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141" +
		"\u0143\x05\x12\n\x03\u0142\u0120\x03\x02\x02\x02\u0142\u0122\x03\x02\x02" +
		"\x02\u0142\u0123\x03\x02\x02\x02\u0142\u0124\x03\x02\x02\x02\u0142\u0130" +
		"\x03\x02\x02\x02\u0142\u0134\x03\x02\x02\x02\u0143\u0167\x03\x02\x02\x02" +
		"\u0144\u0145\f\x06\x02\x02\u0145\u0146\x05\x16\f\x02\u0146\u0147\x05\x12" +
		"\n\x07\u0147\u0166\x03\x02\x02\x02\u0148\u0149\f\t\x02\x02\u0149\u014A" +
		"\x07\x18\x02\x02\u014A\u0166\x05 \x11\x02\u014B\u014C\f\b\x02\x02\u014C" +
		"\u0155\x07\x10\x02\x02\u014D\u0152\x05\x1A\x0E\x02\u014E\u014F\x07\x14" +
		"\x02\x02\u014F\u0151\x05\x1A\x0E\x02\u0150\u014E\x03\x02\x02\x02\u0151" +
		"\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02" +
		"\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155" +
		"\u014D\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x03\x02" +
		"\x02\x02\u0157\u0166\x07\x11\x02\x02\u0158\u0159\f\x07\x02\x02\u0159\u0162" +
		"\x07\x0E\x02\x02\u015A\u015F\x05\x1A\x0E\x02\u015B\u015C\x07\x14\x02\x02" +
		"\u015C\u015E\x05\x1A\x0E\x02\u015D\u015B\x03\x02\x02\x02\u015E\u0161\x03" +
		"\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160" +
		"\u0163\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0162\u015A\x03\x02" +
		"\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164" +
		"\u0166\x07\x0F\x02\x02\u0165\u0144\x03\x02\x02\x02\u0165\u0148\x03\x02" +
		"\x02\x02\u0165\u014B\x03\x02\x02\x02\u0165\u0158\x03\x02\x02\x02\u0166" +
		"\u0169\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02" +
		"\x02\x02\u0168\x13\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u0170" +
		"\x07+\x02\x02\u016B\u0170\x07*\x02\x02\u016C\u0170\x07)\x02\x02\u016D" +
		"\u0170\x07,\x02\x02\u016E\u0170\x07-\x02\x02\u016F\u016A\x03\x02\x02\x02" +
		"\u016F\u016B\x03\x02\x02\x02\u016F\u016C\x03\x02\x02\x02\u016F\u016D\x03" +
		"\x02\x02\x02\u016F\u016E\x03\x02\x02\x02\u0170\x15\x03\x02\x02\x02\u0171" +
		"\u0193\x07\x19\x02\x02\u0172\u0193\x07\x1A\x02\x02\u0173\u0193\x07\x1C" +
		"\x02\x02\u0174\u0193\x07\x1D\x02\x02\u0175\u0193\x07\x1E\x02\x02\u0176" +
		"\u0178\x07!\x02\x02\u0177\u0179\x07\x15\x02\x02\u0178\u0177\x03\x02\x02" +
		"\x02\u0178\u0179\x03\x02\x02\x02\u0179\u0193\x03\x02\x02\x02\u017A\u017B" +
		"\x07\x15\x02\x02\u017B\u0193\x07\x15\x02\x02\u017C\u017E\x07\"\x02\x02" +
		"\u017D\u017F\x07\x15\x02\x02\u017E\u017D\x03\x02\x02\x02\u017E\u017F\x03" +
		"\x02\x02\x02\u017F\u0193\x03\x02\x02\x02\u0180\u0182\x07\x1B\x02\x02\u0181" +
		"\u0183\x07\x15\x02\x02\u0182\u0181\x03\x02\x02\x02\u0182\u0183\x03\x02" +
		"\x02\x02\u0183\u0193\x03\x02\x02\x02\u0184\u0193\x07\x1F\x02\x02\u0185" +
		"\u0187\x07#\x02\x02\u0186\u0188\x07#\x02\x02\u0187\u0186\x03\x02\x02\x02" +
		"\u0187\u0188\x03\x02\x02\x02\u0188\u0193\x03\x02\x02\x02\u0189\u018B\x07" +
		"$\x02\x02\u018A\u018C\x07$\x02\x02\u018B\u018A\x03\x02\x02\x02\u018B\u018C" +
		"\x03\x02\x02\x02\u018C\u0193\x03\x02\x02\x02\u018D\u018E\x07\x18\x02\x02" +
		"\u018E\u0190\x07\x18\x02\x02\u018F\u0191\x07\x18\x02\x02\u0190\u018F\x03" +
		"\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192" +
		"\u0171\x03\x02\x02\x02\u0192\u0172\x03\x02\x02\x02\u0192\u0173\x03\x02" +
		"\x02\x02\u0192\u0174\x03\x02\x02\x02\u0192\u0175\x03\x02\x02\x02\u0192" +
		"\u0176\x03\x02\x02\x02\u0192\u017A\x03\x02\x02\x02\u0192\u017C\x03\x02" +
		"\x02\x02\u0192\u0180\x03\x02\x02\x02\u0192\u0184\x03\x02\x02\x02\u0192" +
		"\u0185\x03\x02\x02\x02\u0192\u0189\x03\x02\x02\x02\u0192\u018D\x03\x02" +
		"\x02\x02\u0193\x17\x03\x02\x02\x02\u0194\u0196\x05 \x11\x02\u0195\u0197" +
		"\x05\x0E\b\x02\u0196\u0195\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02" +
		"\u0197\x19\x03\x02\x02\x02\u0198\u0199\x05 \x11\x02\u0199\u019A\x07\x15" +
		"\x02\x02\u019A\u019C\x03\x02\x02\x02\u019B\u0198\x03\x02\x02\x02\u019B" +
		"\u019C\x03\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019D\u019E\x05\x12" +
		"\n\x02\u019E\x1B\x03\x02\x02\x02\u019F\u01A0\x07!\x02\x02\u01A0\u01A5" +
		"\x05 \x11\x02\u01A1\u01A2\x07\x14\x02\x02\u01A2\u01A4\x05 \x11\x02\u01A3" +
		"\u01A1\x03\x02\x02\x02\u01A4\u01A7\x03\x02\x02\x02\u01A5\u01A3\x03\x02" +
		"\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A8\x03\x02\x02\x02\u01A7" +
		"\u01A5\x03\x02\x02\x02\u01A8\u01A9\x07\"\x02\x02\u01A9\x1D\x03\x02\x02" +
		"\x02\u01AA\u01AB\x07\x17\x02\x02\u01AB\u01AC\x070\x02\x02\u01AC\u01AF" +
		"\x07\x03\x02\x02\u01AD\u01B0\x05\x10\t\x02\u01AE\u01B0\x070\x02\x02\u01AF" +
		"\u01AD\x03\x02\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01B0\u01B1\x03\x02" +
		"\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2" +
		"\u01B3\x03\x02\x02\x02\u01B3\u01B4\x07\x04\x02\x02\u01B4\x1F\x03\x02\x02" +
		"\x02\u01B5\u01B6\x07/\x02\x02\u01B6!\x03\x02\x02\x02G&(2:CIMQXZ`hkorv" +
		"~\x81\x85\x88\x8C\x94\x9A\x9E\xA7\xAB\xAF\xB1\xBC\xC7\xCA\xD3\xD6\xDF" +
		"\xEA\xEC\xF8\xFD\u0103\u0105\u0109\u010D\u0110\u0116\u011E\u012A\u012D" +
		"\u013A\u013F\u0142\u0152\u0155\u015F\u0162\u0165\u0167\u016F\u0178\u017E" +
		"\u0182\u0187\u018B\u0190\u0192\u0196\u019B\u01A5\u01AF\u01B1";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public library(): LibraryContext[];
	public library(i: number): LibraryContext;
	public library(i?: number): LibraryContext | LibraryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryContext);
		} else {
			return this.getRuleContext(i, LibraryContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public definition(): DefinitionContext[];
	public definition(i: number): DefinitionContext;
	public definition(i?: number): DefinitionContext | DefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DefinitionContext);
		} else {
			return this.getRuleContext(i, DefinitionContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_program; }
}


export class LibraryContext extends ParserRuleContext {
	public libraryPath(): LibraryPathContext {
		return this.getRuleContext(0, LibraryPathContext);
	}
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public libraryMember(): LibraryMemberContext[];
	public libraryMember(i: number): LibraryMemberContext;
	public libraryMember(i?: number): LibraryMemberContext | LibraryMemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LibraryMemberContext);
		} else {
			return this.getRuleContext(i, LibraryMemberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_library; }
}


export class LibraryPathContext extends ParserRuleContext {
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public SLASH(): TerminalNode { return this.getToken(XonParser.SLASH, 0); }
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.MINUS);
		} else {
			return this.getToken(XonParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryPath; }
}


export class LibraryMemberContext extends ParserRuleContext {
	public _name!: IdContext;
	public _alias!: IdContext;
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_libraryMember; }
}


export class DefinitionContext extends ParserRuleContext {
	public _name!: IdContext;
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public member(): MemberContext[];
	public member(i: number): MemberContext;
	public member(i?: number): MemberContext | MemberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MemberContext);
		} else {
			return this.getRuleContext(i, MemberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definition; }
}


export class MemberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_member; }
	public copyFrom(ctx: MemberContext): void {
		super.copyFrom(ctx);
	}
}
export class MethodMemberContext extends MemberContext {
	public _name!: IdContext;
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InitMemberContext extends MemberContext {
	public _name!: Token;
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public AD(): TerminalNode { return this.getToken(XonParser.AD, 0); }
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexMemberContext extends MemberContext {
	public _name!: Token;
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public AD(): TerminalNode { return this.getToken(XonParser.AD, 0); }
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorMemberContext extends MemberContext {
	public _name!: OperatorContext;
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(XonParser.COMMA, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PropertyMemberContext extends MemberContext {
	public _name!: IdContext;
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public generics(): GenericsContext | undefined {
		return this.tryGetRuleContext(0, GenericsContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	constructor(ctx: MemberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class PlainTypeContext extends TypeContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class GenericTypeContext extends TypeContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public LESS_THAN(): TerminalNode { return this.getToken(XonParser.LESS_THAN, 0); }
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public MORE_THAN(): TerminalNode { return this.getToken(XonParser.MORE_THAN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectTypeContext extends TypeContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FunctionTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class UnionTypeContext extends TypeContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public PIPE(): TerminalNode { return this.getToken(XonParser.PIPE, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedTypeContext extends TypeContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralTypeContext extends TypeContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MetaTypeContext extends TypeContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public HASH(): TerminalNode { return this.getToken(XonParser.HASH, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class IfStatementContext extends StatementContext {
	public IF(): TerminalNode { return this.getToken(XonParser.IF, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	public ELSE_IF(): TerminalNode[];
	public ELSE_IF(i: number): TerminalNode;
	public ELSE_IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ELSE_IF);
		} else {
			return this.getToken(XonParser.ELSE_IF, i);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(XonParser.ELSE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LoopStatementContext extends StatementContext {
	public _value!: IdContext;
	public _key!: IdContext;
	public _index!: IdContext;
	public LOOP(): TerminalNode { return this.getToken(XonParser.LOOP, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public BREAK(): TerminalNode { return this.getToken(XonParser.BREAK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public RETURN(): TerminalNode { return this.getToken(XonParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public PREPROCESSOR(): TerminalNode { return this.getToken(XonParser.PREPROCESSOR, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExpressionContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InstanceExpressionContext extends ExpressionContext {
	public AD(): TerminalNode { return this.getToken(XonParser.AD, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class OperatorExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public operator(): OperatorContext {
		return this.getRuleContext(0, OperatorContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExpressionContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExpressionContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LambdaExpressionContext extends ExpressionContext {
	public LAMBDA_START(): TerminalNode { return this.getToken(XonParser.LAMBDA_START, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class BooleanLiteralContext extends LiteralContext {
	public BOOLEAN_LITERAL(): TerminalNode { return this.getToken(XonParser.BOOLEAN_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IntegerLiteralContext extends LiteralContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(XonParser.INTEGER_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatLiteralContext extends LiteralContext {
	public FLOAT_LITERAL(): TerminalNode { return this.getToken(XonParser.FLOAT_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CharLiteralContext extends LiteralContext {
	public CHAR_LITERAL(): TerminalNode { return this.getToken(XonParser.CHAR_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(XonParser.STRING_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class OperatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	public LESS_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS_THAN, 0); }
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.ASSIGN);
		} else {
			return this.getToken(XonParser.ASSIGN, i);
		}
	}
	public MORE_THAN(): TerminalNode | undefined { return this.tryGetToken(XonParser.MORE_THAN, 0); }
	public EXCLAMATION(): TerminalNode | undefined { return this.tryGetToken(XonParser.EXCLAMATION, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CARET, 0); }
	public AMPERSAND(): TerminalNode[];
	public AMPERSAND(i: number): TerminalNode;
	public AMPERSAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.AMPERSAND);
		} else {
			return this.getToken(XonParser.AMPERSAND, i);
		}
	}
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.PIPE);
		} else {
			return this.getToken(XonParser.PIPE, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.DOT);
		} else {
			return this.getToken(XonParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_operator; }
}


export class ParameterContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ArgumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_argument; }
}


export class GenericsContext extends ParserRuleContext {
	public LESS_THAN(): TerminalNode { return this.getToken(XonParser.LESS_THAN, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public MORE_THAN(): TerminalNode { return this.getToken(XonParser.MORE_THAN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_generics; }
}


export class BodyContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
}


export class IdContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XonParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
}


