// Generated from XonLexer.g4 by ANTLR 4.9.0-SNAPSHOT

 
    import { XonLexerBase } from "./xon-lexer-base";


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonLexer extends XonLexerBase {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly OPEN_BRACKET = 3;
	public static readonly CLOSE_BRACKET = 4;
	public static readonly OPEN_PAREN = 5;
	public static readonly CLOSE_PAREN = 6;
	public static readonly OPEN_BRACE = 7;
	public static readonly CLOSE_BRACE = 8;
	public static readonly ACTUAL = 9;
	public static readonly BREAK = 10;
	public static readonly DO = 11;
	public static readonly ELSE = 12;
	public static readonly EXPECT = 13;
	public static readonly EXPORT = 14;
	public static readonly FOR = 15;
	public static readonly IF = 16;
	public static readonly IN = 17;
	public static readonly IMPORT = 18;
	public static readonly RETURN = 19;
	public static readonly WHILE = 20;
	public static readonly PREFIX = 21;
	public static readonly INFIX = 22;
	public static readonly OBJECT = 23;
	public static readonly MODEL = 24;
	public static readonly ENUM = 25;
	public static readonly ASSIGN = 26;
	public static readonly COLON = 27;
	public static readonly COMMA = 28;
	public static readonly DOT = 29;
	public static readonly EXCLAMATION = 30;
	public static readonly HASH = 31;
	public static readonly QUESTION = 32;
	public static readonly GENERIC_LEFT = 33;
	public static readonly GENERIC_RIGHT = 34;
	public static readonly FLOAT_LITERAL = 35;
	public static readonly INTEGER_LITERAL = 36;
	public static readonly REGEX_LITERAL = 37;
	public static readonly STRING_LITERAL = 38;
	public static readonly PREPROCESSOR = 39;
	public static readonly ID = 40;
	public static readonly OPERATOR = 41;
	public static readonly NL = 42;
	public static readonly WS = 43;
	public static readonly BLOCK_COMMENT = 44;
	public static readonly LINE_COMMENT = 45;
	public static readonly UNEXPECTED = 46;
	public static readonly ERROR = 2;
	public static readonly WHITESPACE = 3;
	public static readonly COMMENT_CHANNEL = 4;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "ERROR", "WHITESPACE", "COMMENT_CHANNEL",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", 
		"CLOSE_BRACE", "ACTUAL", "BREAK", "DO", "ELSE", "EXPECT", "EXPORT", "FOR", 
		"IF", "IN", "IMPORT", "RETURN", "WHILE", "PREFIX", "INFIX", "OBJECT", 
		"MODEL", "ENUM", "ASSIGN", "COLON", "COMMA", "DOT", "EXCLAMATION", "HASH", 
		"QUESTION", "GENERIC_LEFT", "GENERIC_RIGHT", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"REGEX_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "ID", "OPERATOR", "NL", 
		"WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED", "Radix", "DigitNumber", 
		"AlphabetNumber",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'do'", "'else'", "'expect'", "'export'", "'for'", 
		"'if'", "'in'", "'import'", "'return'", "'while'", "'prefix'", "'infix'", 
		"'object'", "'model'", "'enum'", "'='", "':'", "','", "'.'", "'!'", "'#'", 
		"'?'", "'<|'", "'|>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "DO", "ELSE", 
		"EXPECT", "EXPORT", "FOR", "IF", "IN", "IMPORT", "RETURN", "WHILE", "PREFIX", 
		"INFIX", "OBJECT", "MODEL", "ENUM", "ASSIGN", "COLON", "COMMA", "DOT", 
		"EXCLAMATION", "HASH", "QUESTION", "GENERIC_LEFT", "GENERIC_RIGHT", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "REGEX_LITERAL", "STRING_LITERAL", "PREPROCESSOR", 
		"ID", "OPERATOR", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonLexer._LITERAL_NAMES, XonLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(XonLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "XonLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return XonLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return XonLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 0:
			this.OPEN_BRACKET_action(_localctx, actionIndex);
			break;

		case 1:
			this.CLOSE_BRACKET_action(_localctx, actionIndex);
			break;

		case 2:
			this.OPEN_PAREN_action(_localctx, actionIndex);
			break;

		case 3:
			this.CLOSE_PAREN_action(_localctx, actionIndex);
			break;

		case 4:
			this.OPEN_BRACE_action(_localctx, actionIndex);
			break;

		case 5:
			this.CLOSE_BRACE_action(_localctx, actionIndex);
			break;

		case 39:
			this.NL_action(_localctx, actionIndex);
			break;
		}
	}
	private OPEN_BRACKET_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.opened++;
			break;
		}
	}
	private CLOSE_BRACKET_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.opened--;
			break;
		}
	}
	private OPEN_PAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.opened++;
			break;
		}
	}
	private CLOSE_PAREN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:
			this.opened--;
			break;
		}
	}
	private OPEN_BRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			this.opened++;
			break;
		}
	}
	private CLOSE_BRACE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			this.opened--;
			break;
		}
	}
	private NL_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			this.handleLineBreak()
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 39:
			return this.NL_sempred(_localctx, predIndex);
		}
		return true;
	}
	private NL_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.atStartOfInput();
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x020\u0179\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 " +
		"\x03 \x03 \x03!\x03!\x03!\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03\"\x03" +
		"\"\x03\"\x05\"\xF1\n\"\x03#\x03#\x03#\x03#\x05#\xF7\n#\x03$\x03$\x03$" +
		"\x03$\x07$\xFD\n$\f$\x0E$\u0100\v$\x03$\x03$\x03%\x03%\x03%\x03%\x07%" +
		"\u0108\n%\f%\x0E%\u010B\v%\x03%\x03%\x03&\x03&\x03&\x03&\x07&\u0113\n" +
		"&\f&\x0E&\u0116\v&\x03&\x03&\x03\'\x03\'\x07\'\u011C\n\'\f\'\x0E\'\u011F" +
		"\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(" +
		"\x03(\x05(\u012F\n(\x03)\x03)\x03)\x05)\u0134\n)\x03)\x03)\x05)\u0138" +
		"\n)\x03)\x05)\u013B\n)\x05)\u013D\n)\x03)\x03)\x03*\x06*\u0142\n*\r*\x0E" +
		"*\u0143\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x07+\u014D\n+\f+\x0E+\u0150" +
		"\v+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x07,\u015B\n,\f,\x0E" +
		",\u015E\v,\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x05.\u0168\n.\x03." +
		"\x03.\x03/\x03/\x07/\u016E\n/\f/\x0E/\u0171\v/\x030\x030\x070\u0175\n" +
		"0\f0\x0E0\u0178\v0\x04\u0114\u014E\x02\x021\x03\x02\x05\x05\x02\x06\x07" +
		"\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F\x02\v\x11\x02\f\x13\x02\r\x15\x02" +
		"\x0E\x17\x02\x0F\x19\x02\x10\x1B\x02\x11\x1D\x02\x12\x1F\x02\x13!\x02" +
		"\x14#\x02\x15%\x02\x16\'\x02\x17)\x02\x18+\x02\x19-\x02\x1A/\x02\x1B1" +
		"\x02\x1C3\x02\x1D5\x02\x1E7\x02\x1F9\x02 ;\x02!=\x02\"?\x02#A\x02$C\x02" +
		"%E\x02&G\x02\'I\x02(K\x02)M\x02*O\x02+Q\x02,S\x02-U\x02.W\x02/Y\x020[" +
		"\x02\x02]\x02\x02_\x02\x02\x03\x02\x0F\x03\x02bb\x04\x02^^bb\x03\x02)" +
		")\n\x02))^^ddhhppttvvxx\x05\x02C\\aac|\x06\x022;C\\aac|\x04\x02\'\',`" +
		"\x04\x02\v\v\"\"\x04\x02\f\f\x0F\x0F\x03\x022;\x04\x02ZZzz\x04\x022;a" +
		"a\x05\x022;C\\c|\x02\u018E\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02" +
		"\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02" +
		"\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02" +
		"\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02" +
		"\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02" +
		"\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02" +
		"%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03" +
		"\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02" +
		"\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x02" +
		"9\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02" +
		"\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02" +
		"\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03" +
		"\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02" +
		"\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x03" +
		"a\x03\x02\x02\x02\x05d\x03\x02\x02\x02\x07g\x03\x02\x02\x02\tj\x03\x02" +
		"\x02\x02\vm\x03\x02\x02\x02\rp\x03\x02\x02\x02\x0Fs\x03\x02\x02\x02\x11" +
		"z\x03\x02\x02\x02\x13\x80\x03\x02\x02\x02\x15\x83\x03\x02\x02\x02\x17" +
		"\x88\x03\x02\x02\x02\x19\x8F\x03\x02\x02\x02\x1B\x96\x03\x02\x02\x02\x1D" +
		"\x9A\x03\x02\x02\x02\x1F\x9D\x03\x02\x02\x02!\xA0\x03\x02\x02\x02#\xA7" +
		"\x03\x02\x02\x02%\xAE\x03\x02\x02\x02\'\xB4\x03\x02\x02\x02)\xBB\x03\x02" +
		"\x02\x02+\xC1\x03\x02\x02\x02-\xC8\x03\x02\x02\x02/\xCE\x03\x02\x02\x02" +
		"1\xD3\x03\x02\x02\x023\xD5\x03\x02\x02\x025\xD7\x03\x02\x02\x027\xD9\x03" +
		"\x02\x02\x029\xDB\x03\x02\x02\x02;\xDD\x03\x02\x02\x02=\xDF\x03\x02\x02" +
		"\x02?\xE1\x03\x02\x02\x02A\xE4\x03\x02\x02\x02C\xF0\x03\x02\x02\x02E\xF6" +
		"\x03\x02\x02\x02G\xF8\x03\x02\x02\x02I\u0103\x03\x02\x02\x02K\u010E\x03" +
		"\x02\x02\x02M\u0119\x03\x02\x02\x02O\u012E\x03\x02\x02\x02Q\u013C\x03" +
		"\x02\x02\x02S\u0141\x03\x02\x02\x02U\u0147\x03\x02\x02\x02W\u0156\x03" +
		"\x02\x02\x02Y\u0161\x03\x02\x02\x02[\u0165\x03\x02\x02\x02]\u016B\x03" +
		"\x02\x02\x02_\u0172\x03\x02\x02\x02ab\x07]\x02\x02bc\b\x02\x02\x02c\x04" +
		"\x03\x02\x02\x02de\x07_\x02\x02ef\b\x03\x03\x02f\x06\x03\x02\x02\x02g" +
		"h\x07*\x02\x02hi\b\x04\x04\x02i\b\x03\x02\x02\x02jk\x07+\x02\x02kl\b\x05" +
		"\x05\x02l\n\x03\x02\x02\x02mn\x07}\x02\x02no\b\x06\x06\x02o\f\x03\x02" +
		"\x02\x02pq\x07\x7F\x02\x02qr\b\x07\x07\x02r\x0E\x03\x02\x02\x02st\x07" +
		"c\x02\x02tu\x07e\x02\x02uv\x07v\x02\x02vw\x07w\x02\x02wx\x07c\x02\x02" +
		"xy\x07n\x02\x02y\x10\x03\x02\x02\x02z{\x07d\x02\x02{|\x07t\x02\x02|}\x07" +
		"g\x02\x02}~\x07c\x02\x02~\x7F\x07m\x02\x02\x7F\x12\x03\x02\x02\x02\x80" +
		"\x81\x07f\x02\x02\x81\x82\x07q\x02\x02\x82\x14\x03\x02\x02\x02\x83\x84" +
		"\x07g\x02\x02\x84\x85\x07n\x02\x02\x85\x86\x07u\x02\x02\x86\x87\x07g\x02" +
		"\x02\x87\x16\x03\x02\x02\x02\x88\x89\x07g\x02\x02\x89\x8A\x07z\x02\x02" +
		"\x8A\x8B\x07r\x02\x02\x8B\x8C\x07g\x02\x02\x8C\x8D\x07e\x02\x02\x8D\x8E" +
		"\x07v\x02\x02\x8E\x18\x03\x02\x02\x02\x8F\x90\x07g\x02\x02\x90\x91\x07" +
		"z\x02\x02\x91\x92\x07r\x02\x02\x92\x93\x07q\x02\x02\x93\x94\x07t\x02\x02" +
		"\x94\x95\x07v\x02\x02\x95\x1A\x03\x02\x02\x02\x96\x97\x07h\x02\x02\x97" +
		"\x98\x07q\x02\x02\x98\x99\x07t\x02\x02\x99\x1C\x03\x02\x02\x02\x9A\x9B" +
		"\x07k\x02\x02\x9B\x9C\x07h\x02\x02\x9C\x1E\x03\x02\x02\x02\x9D\x9E\x07" +
		"k\x02\x02\x9E\x9F\x07p\x02\x02\x9F \x03\x02\x02\x02\xA0\xA1\x07k\x02\x02" +
		"\xA1\xA2\x07o\x02\x02\xA2\xA3\x07r\x02\x02\xA3\xA4\x07q\x02\x02\xA4\xA5" +
		"\x07t\x02\x02\xA5\xA6\x07v\x02\x02\xA6\"\x03\x02\x02\x02\xA7\xA8\x07t" +
		"\x02\x02\xA8\xA9\x07g\x02\x02\xA9\xAA\x07v\x02\x02\xAA\xAB\x07w\x02\x02" +
		"\xAB\xAC\x07t\x02\x02\xAC\xAD\x07p\x02\x02\xAD$\x03\x02\x02\x02\xAE\xAF" +
		"\x07y\x02\x02\xAF\xB0\x07j\x02\x02\xB0\xB1\x07k\x02\x02\xB1\xB2\x07n\x02" +
		"\x02\xB2\xB3\x07g\x02\x02\xB3&\x03\x02\x02\x02\xB4\xB5\x07r\x02\x02\xB5" +
		"\xB6\x07t\x02\x02\xB6\xB7\x07g\x02\x02\xB7\xB8\x07h\x02\x02\xB8\xB9\x07" +
		"k\x02\x02\xB9\xBA\x07z\x02\x02\xBA(\x03\x02\x02\x02\xBB\xBC\x07k\x02\x02" +
		"\xBC\xBD\x07p\x02\x02\xBD\xBE\x07h\x02\x02\xBE\xBF\x07k\x02\x02\xBF\xC0" +
		"\x07z\x02\x02\xC0*\x03\x02\x02\x02\xC1\xC2\x07q\x02\x02\xC2\xC3\x07d\x02" +
		"\x02\xC3\xC4\x07l\x02\x02\xC4\xC5\x07g\x02\x02\xC5\xC6\x07e\x02\x02\xC6" +
		"\xC7\x07v\x02\x02\xC7,\x03\x02\x02\x02\xC8\xC9\x07o\x02\x02\xC9\xCA\x07" +
		"q\x02\x02\xCA\xCB\x07f\x02\x02\xCB\xCC\x07g\x02\x02\xCC\xCD\x07n\x02\x02" +
		"\xCD.\x03\x02\x02\x02\xCE\xCF\x07g\x02\x02\xCF\xD0\x07p\x02\x02\xD0\xD1" +
		"\x07w\x02\x02\xD1\xD2\x07o\x02\x02\xD20\x03\x02\x02\x02\xD3\xD4\x07?\x02" +
		"\x02\xD42\x03\x02\x02\x02\xD5\xD6\x07<\x02\x02\xD64\x03\x02\x02\x02\xD7" +
		"\xD8\x07.\x02\x02\xD86\x03\x02\x02\x02\xD9\xDA\x070\x02\x02\xDA8\x03\x02" +
		"\x02\x02\xDB\xDC\x07#\x02\x02\xDC:\x03\x02\x02\x02\xDD\xDE\x07%\x02\x02" +
		"\xDE<\x03\x02\x02\x02\xDF\xE0\x07A\x02\x02\xE0>\x03\x02\x02\x02\xE1\xE2" +
		"\x07>\x02\x02\xE2\xE3\x07~\x02\x02\xE3@\x03\x02\x02\x02\xE4\xE5\x07~\x02" +
		"\x02\xE5\xE6\x07@\x02\x02\xE6B\x03\x02\x02\x02\xE7\xE8\x05[.\x02\xE8\xE9" +
		"\x05_0\x02\xE9\xEA\x070\x02\x02\xEA\xEB\x05_0\x02\xEB\xF1\x03\x02\x02" +
		"\x02\xEC\xED\x05]/\x02\xED\xEE\x070\x02\x02\xEE\xEF\x05]/\x02\xEF\xF1" +
		"\x03\x02\x02\x02\xF0\xE7\x03\x02\x02\x02\xF0\xEC\x03\x02\x02\x02\xF1D" +
		"\x03\x02\x02\x02\xF2\xF3\x05[.\x02\xF3\xF4\x05_0\x02\xF4\xF7\x03\x02\x02" +
		"\x02\xF5\xF7\x05]/\x02\xF6\xF2\x03\x02\x02\x02\xF6\xF5\x03\x02\x02\x02" +
		"\xF7F\x03\x02\x02\x02\xF8\xFE\x07b\x02\x02\xF9\xFD\n\x02\x02\x02\xFA\xFB" +
		"\x07^\x02\x02\xFB\xFD\t\x03\x02\x02\xFC\xF9\x03\x02\x02\x02\xFC\xFA\x03" +
		"\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE\xFF" +
		"\x03\x02\x02\x02\xFF\u0101\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101" +
		"\u0102\x07b\x02\x02\u0102H\x03\x02\x02\x02\u0103\u0109\x07)\x02\x02\u0104" +
		"\u0108\n\x04\x02\x02\u0105\u0106\x07^\x02\x02\u0106\u0108\t\x05\x02\x02" +
		"\u0107\u0104\x03\x02\x02\x02\u0107\u0105\x03\x02\x02\x02\u0108\u010B\x03" +
		"\x02\x02\x02\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A" +
		"\u010C\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010C\u010D\x07)\x02" +
		"\x02\u010DJ\x03\x02\x02\x02\u010E\u010F\x07%\x02\x02\u010F\u0110\x07}" +
		"\x02\x02\u0110\u0114\x03\x02\x02\x02\u0111\u0113\v\x02\x02\x02\u0112\u0111" +
		"\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02" +
		"\u0114\u0112\x03\x02\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116\u0114\x03" +
		"\x02\x02\x02\u0117\u0118\x07\x7F\x02\x02\u0118L\x03\x02\x02\x02\u0119" +
		"\u011D\t\x06\x02\x02\u011A\u011C\t\x07\x02\x02\u011B\u011A\x03\x02\x02" +
		"\x02\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E" +
		"\x03\x02\x02\x02\u011EN\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120" +
		"\u012F\t\b\x02\x02\u0121\u0122\x070\x02\x02\u0122\u012F\x070\x02\x02\u0123" +
		"\u0124\x070\x02\x02\u0124\u0125\x070\x02\x02\u0125\u012F\x070\x02\x02" +
		"\u0126\u0127\x07>\x02\x02\u0127\u012F\x07?\x02\x02\u0128\u0129\x07@\x02" +
		"\x02\u0129\u012F\x07?\x02\x02\u012A\u012B\x07?\x02\x02\u012B\u012F\x07" +
		"?\x02\x02\u012C\u012D\x07#\x02\x02\u012D\u012F\x07?\x02\x02\u012E\u0120" +
		"\x03\x02\x02\x02\u012E\u0121\x03\x02\x02\x02\u012E\u0123\x03\x02\x02\x02" +
		"\u012E\u0126\x03\x02\x02\x02\u012E\u0128\x03\x02\x02\x02\u012E\u012A\x03" +
		"\x02\x02\x02\u012E\u012C\x03\x02\x02\x02\u012FP\x03\x02\x02\x02\u0130" +
		"\u0131\x06)\x02\x02\u0131\u013D\x05S*\x02\u0132\u0134\x07\x0F\x02\x02" +
		"\u0133\u0132\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x03" +
		"\x02\x02\x02\u0135\u0138\x07\f\x02\x02\u0136\u0138\x07\x0F\x02\x02\u0137" +
		"\u0133\x03\x02\x02\x02\u0137\u0136\x03\x02\x02\x02\u0138\u013A\x03\x02" +
		"\x02\x02\u0139\u013B\x05S*\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B" +
		"\x03\x02\x02\x02\u013B\u013D\x03\x02\x02\x02\u013C\u0130\x03\x02\x02\x02" +
		"\u013C\u0137\x03\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\b" +
		")\b\x02\u013FR\x03\x02\x02\x02\u0140\u0142\t\t\x02\x02\u0141\u0140\x03" +
		"\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0143" +
		"\u0144\x03\x02\x02\x02\u0144\u0145\x03\x02\x02\x02\u0145\u0146\b*\t\x02" +
		"\u0146T\x03\x02\x02\x02\u0147\u0148\x071\x02\x02\u0148\u0149\x07,\x02" +
		"\x02\u0149\u014E\x03\x02\x02\x02\u014A\u014D\x05U+\x02\u014B\u014D\v\x02" +
		"\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014B\x03\x02\x02\x02\u014D" +
		"\u0150\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014E\u014C\x03\x02" +
		"\x02\x02\u014F\u0151\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151" +
		"\u0152\x07,\x02\x02\u0152\u0153\x071\x02\x02\u0153\u0154\x03\x02\x02\x02" +
		"\u0154\u0155\b+\n\x02\u0155V\x03\x02\x02\x02\u0156\u0157\x07/\x02\x02" +
		"\u0157\u0158\x07/\x02\x02\u0158\u015C\x03\x02\x02\x02\u0159\u015B\n\n" +
		"\x02\x02\u015A\u0159\x03\x02\x02\x02\u015B\u015E\x03\x02\x02\x02\u015C" +
		"\u015A\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02\u015D\u015F\x03\x02" +
		"\x02\x02\u015E\u015C\x03\x02\x02\x02\u015F\u0160\b,\n\x02\u0160X\x03\x02" +
		"\x02\x02\u0161\u0162\v\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0164" +
		"\b-\v\x02\u0164Z\x03\x02\x02\x02\u0165\u0167\t\v\x02\x02\u0166\u0168\t" +
		"\v\x02\x02\u0167\u0166\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168" +
		"\u0169\x03\x02\x02\x02\u0169\u016A\t\f\x02\x02\u016A\\\x03\x02\x02\x02" +
		"\u016B\u016F\t\v\x02\x02\u016C\u016E\t\r\x02\x02\u016D\u016C\x03\x02\x02" +
		"\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170" +
		"\x03\x02\x02\x02\u0170^\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02\u0172" +
		"\u0176\t\x0E\x02\x02\u0173\u0175\t\x07\x02\x02\u0174\u0173\x03\x02\x02" +
		"\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02\u0176\u0177" +
		"\x03\x02\x02\x02\u0177`\x03\x02\x02\x02\u0178\u0176\x03\x02\x02\x02\x19" +
		"\x02\xF0\xF6\xFC\xFE\u0107\u0109\u0114\u011D\u012E\u0133\u0137\u013A\u013C" +
		"\u0143\u014C\u014E\u015C\u0167\u016D\u016F\u0174\u0176\f\x03\x02\x02\x03" +
		"\x03\x03\x03\x04\x04\x03\x05\x05\x03\x06\x06\x03\x07\x07\x03)\b\x02\x05" +
		"\x02\x02\x06\x02\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

