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
	public static readonly CONTINUE = 11;
	public static readonly DO = 12;
	public static readonly ELSE = 13;
	public static readonly EXPECT = 14;
	public static readonly EXPORT = 15;
	public static readonly FOR = 16;
	public static readonly IF = 17;
	public static readonly RETURN = 18;
	public static readonly WHILE = 19;
	public static readonly COMMA = 20;
	public static readonly ASSIGN = 21;
	public static readonly QUESTION = 22;
	public static readonly COLON = 23;
	public static readonly META = 24;
	public static readonly DOT = 25;
	public static readonly LAMBDA = 26;
	public static readonly FLOAT_LITERAL = 27;
	public static readonly INTEGER_LITERAL = 28;
	public static readonly STRING_LITERAL = 29;
	public static readonly PREPROCESSOR = 30;
	public static readonly ID = 31;
	public static readonly OP = 32;
	public static readonly NL = 33;
	public static readonly LINE_COMMENT = 34;
	public static readonly WS = 35;
	public static readonly BLOCK_COMMENT = 36;
	public static readonly LINE_JOINING = 37;
	public static readonly UNEXPECTED = 38;
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
		"CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", "DO", "ELSE", "EXPECT", 
		"EXPORT", "FOR", "IF", "RETURN", "WHILE", "COMMA", "ASSIGN", "QUESTION", 
		"COLON", "META", "DOT", "LAMBDA", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"STRING_LITERAL", "PREPROCESSOR", "ID", "OP", "NL", "LINE_COMMENT", "WS", 
		"BLOCK_COMMENT", "LINE_JOINING", "UNEXPECTED", "Radix", "DigitNumber", 
		"AlphabetNumber",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'actual'", "'break'", "'continue'", "'do'", "'else'", "'expect'", "'export'", 
		"'for'", "'if'", "'return'", "'while'", "','", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ACTUAL", "BREAK", "CONTINUE", 
		"DO", "ELSE", "EXPECT", "EXPORT", "FOR", "IF", "RETURN", "WHILE", "COMMA", 
		"ASSIGN", "QUESTION", "COLON", "META", "DOT", "LAMBDA", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "STRING_LITERAL", "PREPROCESSOR", "ID", "OP", "NL", 
		"LINE_COMMENT", "WS", "BLOCK_COMMENT", "LINE_JOINING", "UNEXPECTED",
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

		case 30:
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02(\u0172\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x03\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13" +
		"\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\xAA\n\x15\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x05\x16\xB0\n\x16\x03\x16\x03\x16\x03\x16\x05\x16" +
		"\xB5\n\x16\x03\x17\x03\x17\x05\x17\xB9\n\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x05\x17\xC0\n\x17\x03\x18\x03\x18\x05\x18\xC4\n\x18\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\xC9\n\x18\x03\x19\x03\x19\x05\x19\xCD\n\x19\x03" +
		"\x19\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\xD4\n\x19\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\xDF\n" +
		"\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\xE5\n\x1B\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x07\x1C\xEB\n\x1C\f\x1C\x0E\x1C\xEE\v\x1C\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\xF8\n\x1D" +
		"\f\x1D\x0E\x1D\xFB\v\x1D\x03\x1D\x03\x1D\x07\x1D\xFF\n\x1D\f\x1D\x0E\x1D" +
		"\u0102\v\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x07\x1E\u0108\n\x1E\f\x1E" +
		"\x0E\x1E\u010B\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x05\x1F\u011D\n\x1F\x03 \x03 \x07 \u0121\n \f \x0E \u0124\v \x06" +
		" \u0126\n \r \x0E \u0127\x03 \x03 \x03!\x03!\x03!\x03!\x07!\u0130\n!\f" +
		"!\x0E!\u0133\v!\x03\"\x06\"\u0136\n\"\r\"\x0E\"\u0137\x03\"\x03\"\x03" +
		"#\x03#\x03#\x03#\x03#\x07#\u0141\n#\f#\x0E#\u0144\v#\x03#\x03#\x03#\x03" +
		"#\x03#\x03$\x03$\x07$\u014D\n$\f$\x0E$\u0150\v$\x03$\x05$\u0153\n$\x03" +
		"$\x03$\x05$\u0157\n$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03&\x05&\u0161" +
		"\n&\x03&\x03&\x03\'\x03\'\x07\'\u0167\n\'\f\'\x0E\'\u016A\v\'\x03(\x03" +
		"(\x07(\u016E\n(\f(\x0E(\u0171\v(\x05\xF9\u0100\u0142\x02\x02)\x03\x02" +
		"\x05\x05\x02\x06\x07\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F\x02\v\x11\x02" +
		"\f\x13\x02\r\x15\x02\x0E\x17\x02\x0F\x19\x02\x10\x1B\x02\x11\x1D\x02\x12" +
		"\x1F\x02\x13!\x02\x14#\x02\x15%\x02\x16\'\x02\x17)\x02\x18+\x02\x19-\x02" +
		"\x1A/\x02\x1B1\x02\x1C3\x02\x1D5\x02\x1E7\x02\x1F9\x02 ;\x02!=\x02\"?" +
		"\x02#A\x02$C\x02%E\x02&G\x02\'I\x02(K\x02\x02M\x02\x02O\x02\x02\x03\x02" +
		"\r\x03\x02))\n\x02))^^ddhhppttvvxx\x05\x02C\\aac|\x06\x022;C\\aac|\x06" +
		"\x02##\'(,`~~\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x03\x022;\x04\x02ZZ" +
		"zz\x04\x022;aa\x05\x022;C\\c|\x02\u019D\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03" +
		"\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03" +
		"\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02" +
		"\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02" +
		"\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03" +
		"\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02" +
		"\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02" +
		"?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02" +
		"\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x03Q\x03\x02\x02\x02" +
		"\x05T\x03\x02\x02\x02\x07W\x03\x02\x02\x02\tZ\x03\x02\x02\x02\v]\x03\x02" +
		"\x02\x02\r`\x03\x02\x02\x02\x0Fc\x03\x02\x02\x02\x11j\x03\x02\x02\x02" +
		"\x13p\x03\x02\x02\x02\x15y\x03\x02\x02\x02\x17|\x03\x02\x02\x02\x19\x81" +
		"\x03\x02\x02\x02\x1B\x88\x03\x02\x02\x02\x1D\x8F\x03\x02\x02\x02\x1F\x93" +
		"\x03\x02\x02\x02!\x96\x03\x02\x02\x02#\x9D\x03\x02\x02\x02%\xA3\x03\x02" +
		"\x02\x02\'\xA5\x03\x02\x02\x02)\xA9\x03\x02\x02\x02+\xAF\x03\x02\x02\x02" +
		"-\xB8\x03\x02\x02\x02/\xC3\x03\x02\x02\x021\xCC\x03\x02\x02\x023\xDE\x03" +
		"\x02\x02\x025\xE4\x03\x02\x02\x027\xE6\x03\x02\x02\x029\xF1\x03\x02\x02" +
		"\x02;\u0105\x03\x02\x02\x02=\u011C\x03\x02\x02\x02?\u0125\x03\x02\x02" +
		"\x02A\u012B\x03\x02\x02\x02C\u0135\x03\x02\x02\x02E\u013B\x03\x02\x02" +
		"\x02G\u014A\x03\x02\x02\x02I\u015A\x03\x02\x02\x02K\u015E\x03\x02\x02" +
		"\x02M\u0164\x03\x02\x02\x02O\u016B\x03\x02\x02\x02QR\x07]\x02\x02RS\b" +
		"\x02\x02\x02S\x04\x03\x02\x02\x02TU\x07_\x02\x02UV\b\x03\x03\x02V\x06" +
		"\x03\x02\x02\x02WX\x07*\x02\x02XY\b\x04\x04\x02Y\b\x03\x02\x02\x02Z[\x07" +
		"+\x02\x02[\\\b\x05\x05\x02\\\n\x03\x02\x02\x02]^\x07}\x02\x02^_\b\x06" +
		"\x06\x02_\f\x03\x02\x02\x02`a\x07\x7F\x02\x02ab\b\x07\x07\x02b\x0E\x03" +
		"\x02\x02\x02cd\x07c\x02\x02de\x07e\x02\x02ef\x07v\x02\x02fg\x07w\x02\x02" +
		"gh\x07c\x02\x02hi\x07n\x02\x02i\x10\x03\x02\x02\x02jk\x07d\x02\x02kl\x07" +
		"t\x02\x02lm\x07g\x02\x02mn\x07c\x02\x02no\x07m\x02\x02o\x12\x03\x02\x02" +
		"\x02pq\x07e\x02\x02qr\x07q\x02\x02rs\x07p\x02\x02st\x07v\x02\x02tu\x07" +
		"k\x02\x02uv\x07p\x02\x02vw\x07w\x02\x02wx\x07g\x02\x02x\x14\x03\x02\x02" +
		"\x02yz\x07f\x02\x02z{\x07q\x02\x02{\x16\x03\x02\x02\x02|}\x07g\x02\x02" +
		"}~\x07n\x02\x02~\x7F\x07u\x02\x02\x7F\x80\x07g\x02\x02\x80\x18\x03\x02" +
		"\x02\x02\x81\x82\x07g\x02\x02\x82\x83\x07z\x02\x02\x83\x84\x07r\x02\x02" +
		"\x84\x85\x07g\x02\x02\x85\x86\x07e\x02\x02\x86\x87\x07v\x02\x02\x87\x1A" +
		"\x03\x02\x02\x02\x88\x89\x07g\x02\x02\x89\x8A\x07z\x02\x02\x8A\x8B\x07" +
		"r\x02\x02\x8B\x8C\x07q\x02\x02\x8C\x8D\x07t\x02\x02\x8D\x8E\x07v\x02\x02" +
		"\x8E\x1C\x03\x02\x02\x02\x8F\x90\x07h\x02\x02\x90\x91\x07q\x02\x02\x91" +
		"\x92\x07t\x02\x02\x92\x1E\x03\x02\x02\x02\x93\x94\x07k\x02\x02\x94\x95" +
		"\x07h\x02\x02\x95 \x03\x02\x02\x02\x96\x97\x07t\x02\x02\x97\x98\x07g\x02" +
		"\x02\x98\x99\x07v\x02\x02\x99\x9A\x07w\x02\x02\x9A\x9B\x07t\x02\x02\x9B" +
		"\x9C\x07p\x02\x02\x9C\"\x03\x02\x02\x02\x9D\x9E\x07y\x02\x02\x9E\x9F\x07" +
		"j\x02\x02\x9F\xA0\x07k\x02\x02\xA0\xA1\x07n\x02\x02\xA1\xA2\x07g\x02\x02" +
		"\xA2$\x03\x02\x02\x02\xA3\xA4\x07.\x02\x02\xA4&\x03\x02\x02\x02\xA5\xA6" +
		"\x07?\x02\x02\xA6(\x03\x02\x02\x02\xA7\xAA\x05? \x02\xA8\xAA\x05C\"\x02" +
		"\xA9\xA7\x03\x02\x02\x02\xA9\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02" +
		"\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x07A\x02\x02\xAC*\x03\x02\x02\x02\xAD" +
		"\xB0\x05? \x02\xAE\xB0\x05C\"\x02\xAF\xAD\x03\x02\x02\x02\xAF\xAE\x03" +
		"\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB4\x07" +
		"<\x02\x02\xB2\xB5\x05? \x02\xB3\xB5\x05C\"\x02\xB4\xB2\x03\x02\x02\x02" +
		"\xB4\xB3\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5,\x03\x02\x02\x02" +
		"\xB6\xB9\x05? \x02\xB7\xB9\x05C\"\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB7" +
		"\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB" +
		"\x07<\x02\x02\xBB\xBC\x07<\x02\x02\xBC\xBF\x03\x02\x02\x02\xBD\xC0\x05" +
		"? \x02\xBE\xC0\x05C\"\x02\xBF\xBD\x03\x02\x02\x02\xBF\xBE\x03\x02\x02" +
		"\x02\xBF\xC0\x03\x02\x02\x02\xC0.\x03\x02\x02\x02\xC1\xC4\x05? \x02\xC2" +
		"\xC4\x05C\"\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC2\x03\x02\x02\x02\xC3\xC4" +
		"\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC8\x070\x02\x02\xC6\xC9" +
		"\x05? \x02\xC7\xC9\x05C\"\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC7\x03\x02" +
		"\x02\x02\xC8\xC9\x03\x02\x02\x02\xC90\x03\x02\x02\x02\xCA\xCD\x05? \x02" +
		"\xCB\xCD\x05C\"\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCC" +
		"\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xCF\x07?\x02\x02\xCF" +
		"\xD0\x07@\x02\x02\xD0\xD3\x03\x02\x02\x02\xD1\xD4\x05? \x02\xD2\xD4\x05" +
		"C\"\x02\xD3\xD1\x03\x02\x02\x02\xD3\xD2\x03\x02\x02\x02\xD3\xD4\x03\x02" +
		"\x02\x02\xD42\x03\x02\x02\x02\xD5\xD6\x05K&\x02\xD6\xD7\x05O(\x02\xD7" +
		"\xD8\x070\x02\x02\xD8\xD9\x05O(\x02\xD9\xDF\x03\x02\x02\x02\xDA\xDB\x05" +
		"M\'\x02\xDB\xDC\x070\x02\x02\xDC\xDD\x05M\'\x02\xDD\xDF\x03\x02\x02\x02" +
		"\xDE\xD5\x03\x02\x02\x02\xDE\xDA\x03\x02\x02\x02\xDF4\x03\x02\x02\x02" +
		"\xE0\xE1\x05K&\x02\xE1\xE2\x05O(\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE5\x05" +
		"M\'\x02\xE4\xE0\x03\x02\x02\x02\xE4\xE3\x03\x02\x02\x02\xE56\x03\x02\x02" +
		"\x02\xE6\xEC\x07)\x02\x02\xE7\xEB\n\x02\x02\x02\xE8\xE9\x07^\x02\x02\xE9" +
		"\xEB\t\x03\x02\x02\xEA\xE7\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEB" +
		"\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED" +
		"\xEF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x07)\x02\x02\xF0" +
		"8\x03\x02\x02\x02\xF1\xF2\x07%\x02\x02\xF2\xF3\x07}\x02\x02\xF3\u0100" +
		"\x03\x02\x02\x02\xF4\xFF\x059\x1D\x02\xF5\xF9\x07}\x02\x02\xF6\xF8\v\x02" +
		"\x02\x02\xF7\xF6\x03\x02\x02\x02\xF8\xFB\x03\x02\x02\x02\xF9\xFA\x03\x02" +
		"\x02\x02\xF9\xF7\x03\x02\x02\x02\xFA\xFC\x03\x02\x02\x02\xFB\xF9\x03\x02" +
		"\x02\x02\xFC\xFF\x07\x7F\x02\x02\xFD\xFF\v\x02\x02\x02\xFE\xF4\x03\x02" +
		"\x02\x02\xFE\xF5\x03\x02\x02\x02\xFE\xFD\x03\x02\x02\x02\xFF\u0102\x03" +
		"\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0101" +
		"\u0103\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103\u0104\x07\x7F" +
		"\x02\x02\u0104:\x03\x02\x02\x02\u0105\u0109\t\x04\x02\x02\u0106\u0108" +
		"\t\x05\x02\x02\u0107\u0106\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02" +
		"\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A<\x03\x02" +
		"\x02\x02\u010B\u0109\x03\x02\x02\x02\u010C\u011D\t\x06\x02\x02\u010D\u010E" +
		"\x070\x02\x02\u010E\u011D\x070\x02\x02\u010F\u0110\x070\x02\x02\u0110" +
		"\u0111\x070\x02\x02\u0111\u011D\x070\x02\x02\u0112\u011D\x07>\x02\x02" +
		"\u0113\u0114\x07>\x02\x02\u0114\u011D\x07?\x02\x02\u0115\u0116\x07@\x02" +
		"\x02\u0116\u011D\x07?\x02\x02\u0117\u011D\x07@\x02\x02\u0118\u0119\x07" +
		"?\x02\x02\u0119\u011D\x07?\x02\x02\u011A\u011B\x07#\x02\x02\u011B\u011D" +
		"\x07?\x02\x02\u011C\u010C\x03\x02\x02\x02\u011C\u010D\x03\x02\x02\x02" +
		"\u011C\u010F\x03\x02\x02\x02\u011C\u0112\x03\x02\x02\x02\u011C\u0113\x03" +
		"\x02\x02\x02\u011C\u0115\x03\x02\x02\x02\u011C\u0117\x03\x02\x02\x02\u011C" +
		"\u0118\x03\x02\x02\x02\u011C\u011A\x03\x02\x02\x02\u011D>\x03\x02\x02" +
		"\x02\u011E\u0122\t\x07\x02\x02\u011F\u0121\x05C\"\x02\u0120\u011F\x03" +
		"\x02\x02\x02\u0121\u0124\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122" +
		"\u0123\x03\x02\x02\x02\u0123\u0126\x03\x02\x02\x02\u0124\u0122\x03\x02" +
		"\x02\x02\u0125\u011E\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127" +
		"\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0129\x03\x02" +
		"\x02\x02\u0129\u012A\b \b\x02\u012A@\x03\x02\x02\x02\u012B\u012C\x07/" +
		"\x02\x02\u012C\u012D\x07/\x02\x02\u012D\u0131\x03\x02\x02\x02\u012E\u0130" +
		"\n\x07\x02\x02\u012F\u012E\x03\x02\x02\x02\u0130\u0133\x03\x02\x02\x02" +
		"\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132B\x03\x02" +
		"\x02\x02\u0133\u0131\x03\x02\x02\x02\u0134\u0136\t\b\x02\x02\u0135\u0134" +
		"\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02" +
		"\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013A\b" +
		"\"\t\x02\u013AD\x03\x02\x02\x02\u013B\u013C\x071\x02\x02\u013C\u013D\x07" +
		",\x02\x02\u013D\u0142\x03\x02\x02\x02\u013E\u0141\x05E#\x02\u013F\u0141" +
		"\v\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140\u013F\x03\x02\x02\x02" +
		"\u0141\u0144\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0142\u0140\x03" +
		"\x02\x02\x02\u0143\u0145\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02\u0145" +
		"\u0146\x07,\x02\x02\u0146\u0147\x071\x02\x02\u0147\u0148\x03\x02\x02\x02" +
		"\u0148\u0149\b#\n\x02\u0149F\x03\x02\x02\x02\u014A\u014E\x07^\x02\x02" +
		"\u014B\u014D\t\b\x02\x02\u014C\u014B\x03\x02\x02\x02\u014D\u0150\x03\x02" +
		"\x02\x02\u014E\u014C\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F" +
		"\u0156\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02\u0151\u0153\x07\x0F" +
		"\x02\x02\u0152\u0151\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153" +
		"\u0154\x03\x02\x02\x02\u0154\u0157\x07\f\x02\x02\u0155\u0157\x04\x0E\x0F" +
		"\x02\u0156\u0152\x03\x02\x02\x02\u0156\u0155\x03\x02\x02\x02\u0157\u0158" +
		"\x03\x02\x02\x02\u0158\u0159\b$\v\x02\u0159H\x03\x02\x02\x02\u015A\u015B" +
		"\v\x02\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015D\b%\f\x02\u015D" +
		"J\x03\x02\x02\x02\u015E\u0160\t\t\x02\x02\u015F\u0161\t\t\x02\x02\u0160" +
		"\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0162\x03\x02" +
		"\x02\x02\u0162\u0163\t\n\x02\x02\u0163L\x03\x02\x02\x02\u0164\u0168\t" +
		"\t\x02\x02\u0165\u0167\t\v\x02\x02\u0166\u0165\x03\x02\x02\x02\u0167\u016A" +
		"\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02" +
		"\u0169N\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016F\t\f\x02" +
		"\x02\u016C\u016E\t\x05\x02\x02\u016D\u016C\x03\x02\x02\x02\u016E\u0171" +
		"\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02" +
		"\u0170P\x03\x02\x02\x02\u0171\u016F\x03\x02\x02\x02#\x02\xA9\xAF\xB4\xB8" +
		"\xBF\xC3\xC8\xCC\xD3\xDE\xE4\xEA\xEC\xF9\xFE\u0100\u0109\u011C\u0122\u0127" +
		"\u0131\u0137\u0140\u0142\u014E\u0152\u0156\u0160\u0166\u0168\u016D\u016F" +
		"\r\x03\x02\x02\x03\x03\x03\x03\x04\x04\x03\x05\x05\x03\x06\x06\x03\x07" +
		"\x07\x03 \b\x02\x05\x02\x02\x06\x02\b\x02\x02\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

