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
	public static readonly ABSTRACT = 9;
	public static readonly ACTUAL = 10;
	public static readonly AND = 11;
	public static readonly AS = 12;
	public static readonly BREAK = 13;
	public static readonly CLASS = 14;
	public static readonly DO = 15;
	public static readonly ELSE = 16;
	public static readonly ENUM = 17;
	public static readonly EXPECT = 18;
	public static readonly EXPORT = 19;
	public static readonly EXTENSION = 20;
	public static readonly FACTORY = 21;
	public static readonly FOR = 22;
	public static readonly IF = 23;
	public static readonly IMPORT = 24;
	public static readonly IN = 25;
	public static readonly INFIX = 26;
	public static readonly IS = 27;
	public static readonly MODEL = 28;
	public static readonly NOT = 29;
	public static readonly OBJECT = 30;
	public static readonly OR = 31;
	public static readonly POSTFIX = 32;
	public static readonly PREFIX = 33;
	public static readonly RETURN = 34;
	public static readonly TYPE = 35;
	public static readonly WHILE = 36;
	public static readonly AMPERSAND = 37;
	public static readonly ASSIGN = 38;
	public static readonly ASTERISK = 39;
	public static readonly AT = 40;
	public static readonly BACK_SLASH = 41;
	public static readonly CARET = 42;
	public static readonly COALESCING = 43;
	public static readonly COLON = 44;
	public static readonly COMMA = 45;
	public static readonly DOT = 46;
	public static readonly EQUAL = 47;
	public static readonly EXCLAMATION = 48;
	public static readonly GREAT_EQUAL = 49;
	public static readonly GREAT = 50;
	public static readonly HASH = 51;
	public static readonly LESS_EQUAL = 52;
	public static readonly LESS = 53;
	public static readonly MINUS = 54;
	public static readonly MODULO = 55;
	public static readonly NOT_EQUAL = 56;
	public static readonly PIPE = 57;
	public static readonly PLUS = 58;
	public static readonly QUESTION = 59;
	public static readonly RANGE = 60;
	public static readonly SLASH = 61;
	public static readonly SPREAD = 62;
	public static readonly TILDE = 63;
	public static readonly UNDERSCORE = 64;
	public static readonly FLOAT_LITERAL = 65;
	public static readonly INTEGER_LITERAL = 66;
	public static readonly REGEX_LITERAL = 67;
	public static readonly STRING_LITERAL = 68;
	public static readonly PREPROCESSOR = 69;
	public static readonly ID = 70;
	public static readonly NL = 71;
	public static readonly WS = 72;
	public static readonly BLOCK_COMMENT = 73;
	public static readonly LINE_COMMENT = 74;
	public static readonly UNEXPECTED = 75;
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
		"CLOSE_BRACE", "ABSTRACT", "ACTUAL", "AND", "AS", "BREAK", "CLASS", "DO", 
		"ELSE", "ENUM", "EXPECT", "EXPORT", "EXTENSION", "FACTORY", "FOR", "IF", 
		"IMPORT", "IN", "INFIX", "IS", "MODEL", "NOT", "OBJECT", "OR", "POSTFIX", 
		"PREFIX", "RETURN", "TYPE", "WHILE", "AMPERSAND", "ASSIGN", "ASTERISK", 
		"AT", "BACK_SLASH", "CARET", "COALESCING", "COLON", "COMMA", "DOT", "EQUAL", 
		"EXCLAMATION", "GREAT_EQUAL", "GREAT", "HASH", "LESS_EQUAL", "LESS", "MINUS", 
		"MODULO", "NOT_EQUAL", "PIPE", "PLUS", "QUESTION", "RANGE", "SLASH", "SPREAD", 
		"TILDE", "UNDERSCORE", "FLOAT_LITERAL", "INTEGER_LITERAL", "REGEX_LITERAL", 
		"STRING_LITERAL", "PREPROCESSOR", "ID", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", 
		"UNEXPECTED", "Radix", "DigitNumber", "AlphabetNumber",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'abstract'", "'actual'", "'and'", "'as'", "'break'", "'class'", "'do'", 
		"'else'", "'enum'", "'expect'", "'export'", "'extension'", "'factory'", 
		"'for'", "'if'", "'import'", "'in'", "'infix'", "'is'", "'model'", "'not'", 
		"'object'", "'or'", "'postfix'", "'prefix'", "'return'", "'type'", "'while'", 
		"'&'", "'='", "'*'", "'@'", "'\\'", "'^'", "'?.'", "':'", "','", "'.'", 
		"'=='", "'!'", "'>='", "'>'", "'#'", "'<='", "'<'", "'-'", "'%'", "'!='", 
		"'|'", "'+'", "'?'", "'..'", "'/'", "'...'", "'~'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ABSTRACT", "ACTUAL", "AND", 
		"AS", "BREAK", "CLASS", "DO", "ELSE", "ENUM", "EXPECT", "EXPORT", "EXTENSION", 
		"FACTORY", "FOR", "IF", "IMPORT", "IN", "INFIX", "IS", "MODEL", "NOT", 
		"OBJECT", "OR", "POSTFIX", "PREFIX", "RETURN", "TYPE", "WHILE", "AMPERSAND", 
		"ASSIGN", "ASTERISK", "AT", "BACK_SLASH", "CARET", "COALESCING", "COLON", 
		"COMMA", "DOT", "EQUAL", "EXCLAMATION", "GREAT_EQUAL", "GREAT", "HASH", 
		"LESS_EQUAL", "LESS", "MINUS", "MODULO", "NOT_EQUAL", "PIPE", "PLUS", 
		"QUESTION", "RANGE", "SLASH", "SPREAD", "TILDE", "UNDERSCORE", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "REGEX_LITERAL", "STRING_LITERAL", "PREPROCESSOR", 
		"ID", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED",
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

		case 68:
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
		case 68:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02M\u020E\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19" +
		"\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03" +
		" \x03 \x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x03!\x03\"\x03\"\x03" +
		"\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x03$\x03%\x03%\x03&" +
		"\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03*\x03+\x03+\x03,\x03" +
		",\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x030\x030\x030\x031\x031\x032\x03" +
		"2\x033\x033\x033\x034\x034\x035\x035\x036\x036\x037\x037\x037\x038\x03" +
		"8\x039\x039\x03:\x03:\x03;\x03;\x03;\x03<\x03<\x03=\x03=\x03=\x03=\x03" +
		">\x03>\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x03@\x05@\u0196" +
		"\n@\x03A\x03A\x03A\x03A\x05A\u019C\nA\x03B\x03B\x03B\x03B\x07B\u01A2\n" +
		"B\fB\x0EB\u01A5\vB\x03B\x03B\x03C\x03C\x03C\x03C\x07C\u01AD\nC\fC\x0E" +
		"C\u01B0\vC\x03C\x03C\x03D\x03D\x03D\x03D\x07D\u01B8\nD\fD\x0ED\u01BB\v" +
		"D\x03D\x03D\x03E\x03E\x07E\u01C1\nE\fE\x0EE\u01C4\vE\x03F\x03F\x03F\x05" +
		"F\u01C9\nF\x03F\x03F\x05F\u01CD\nF\x03F\x05F\u01D0\nF\x05F\u01D2\nF\x03" +
		"F\x03F\x03G\x06G\u01D7\nG\rG\x0EG\u01D8\x03G\x03G\x03H\x03H\x03H\x03H" +
		"\x03H\x07H\u01E2\nH\fH\x0EH\u01E5\vH\x03H\x03H\x03H\x03H\x03H\x03I\x03" +
		"I\x03I\x03I\x07I\u01F0\nI\fI\x0EI\u01F3\vI\x03I\x03I\x03J\x03J\x03J\x03" +
		"J\x03K\x03K\x05K\u01FD\nK\x03K\x03K\x03L\x03L\x07L\u0203\nL\fL\x0EL\u0206" +
		"\vL\x03M\x03M\x07M\u020A\nM\fM\x0EM\u020D\vM\x04\u01B9\u01E3\x02\x02N" +
		"\x03\x02\x05\x05\x02\x06\x07\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F\x02\v" +
		"\x11\x02\f\x13\x02\r\x15\x02\x0E\x17\x02\x0F\x19\x02\x10\x1B\x02\x11\x1D" +
		"\x02\x12\x1F\x02\x13!\x02\x14#\x02\x15%\x02\x16\'\x02\x17)\x02\x18+\x02" +
		"\x19-\x02\x1A/\x02\x1B1\x02\x1C3\x02\x1D5\x02\x1E7\x02\x1F9\x02 ;\x02" +
		"!=\x02\"?\x02#A\x02$C\x02%E\x02&G\x02\'I\x02(K\x02)M\x02*O\x02+Q\x02," +
		"S\x02-U\x02.W\x02/Y\x020[\x021]\x022_\x023a\x024c\x025e\x026g\x027i\x02" +
		"8k\x029m\x02:o\x02;q\x02<s\x02=u\x02>w\x02?y\x02@{\x02A}\x02B\x7F\x02" +
		"C\x81\x02D\x83\x02E\x85\x02F\x87\x02G\x89\x02H\x8B\x02I\x8D\x02J\x8F\x02" +
		"K\x91\x02L\x93\x02M\x95\x02\x02\x97\x02\x02\x99\x02\x02\x03\x02\x0E\x03" +
		"\x02bb\x04\x02^^bb\x03\x02))\n\x02))^^ddhhppttvvxx\x05\x02C\\aac|\x06" +
		"\x022;C\\aac|\x04\x02\v\v\"\"\x04\x02\f\f\x0F\x0F\x03\x022;\x04\x02ZZ" +
		"zz\x04\x022;aa\x05\x022;C\\c|\x02\u021D\x02\x03\x03\x02\x02\x02\x02\x05" +
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
		"\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02" +
		"\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03" +
		"\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02" +
		"\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02" +
		"a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02" +
		"\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02" +
		"\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03" +
		"\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02" +
		"\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02" +
		"\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02" +
		"\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02" +
		"\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02" +
		"\x02\x03\x9B\x03\x02\x02\x02\x05\x9E\x03\x02\x02\x02\x07\xA1\x03\x02\x02" +
		"\x02\t\xA4\x03\x02\x02\x02\v\xA7\x03\x02\x02\x02\r\xAA\x03\x02\x02\x02" +
		"\x0F\xAD\x03\x02\x02\x02\x11\xB6\x03\x02\x02\x02\x13\xBD\x03\x02\x02\x02" +
		"\x15\xC1\x03\x02\x02\x02\x17\xC4\x03\x02\x02\x02\x19\xCA\x03\x02\x02\x02" +
		"\x1B\xD0\x03\x02\x02\x02\x1D\xD3\x03\x02\x02\x02\x1F\xD8\x03\x02\x02\x02" +
		"!\xDD\x03\x02\x02\x02#\xE4\x03\x02\x02\x02%\xEB\x03\x02\x02\x02\'\xF5" +
		"\x03\x02\x02\x02)\xFD\x03\x02\x02\x02+\u0101\x03\x02\x02\x02-\u0104\x03" +
		"\x02\x02\x02/\u010B\x03\x02\x02\x021\u010E\x03\x02\x02\x023\u0114\x03" +
		"\x02\x02\x025\u0117\x03\x02\x02\x027\u011D\x03\x02\x02\x029\u0121\x03" +
		"\x02\x02\x02;\u0128\x03\x02\x02\x02=\u012B\x03\x02\x02\x02?\u0133\x03" +
		"\x02\x02\x02A\u013A\x03\x02\x02\x02C\u0141\x03\x02\x02\x02E\u0146\x03" +
		"\x02\x02\x02G\u014C\x03\x02\x02\x02I\u014E\x03\x02\x02\x02K\u0150\x03" +
		"\x02\x02\x02M\u0152\x03\x02\x02\x02O\u0154\x03\x02\x02\x02Q\u0156\x03" +
		"\x02\x02\x02S\u0158\x03\x02\x02\x02U\u015B\x03\x02\x02\x02W\u015D\x03" +
		"\x02\x02\x02Y\u015F\x03\x02\x02\x02[\u0161\x03\x02\x02\x02]\u0164\x03" +
		"\x02\x02\x02_\u0166\x03\x02\x02\x02a\u0169\x03\x02\x02\x02c\u016B\x03" +
		"\x02\x02\x02e\u016D\x03\x02\x02\x02g\u0170\x03\x02\x02\x02i\u0172\x03" +
		"\x02\x02\x02k\u0174\x03\x02\x02\x02m\u0176\x03\x02\x02\x02o\u0179\x03" +
		"\x02\x02\x02q\u017B\x03\x02\x02\x02s\u017D\x03\x02\x02\x02u\u017F\x03" +
		"\x02\x02\x02w\u0182\x03\x02\x02\x02y\u0184\x03\x02\x02\x02{\u0188\x03" +
		"\x02\x02\x02}\u018A\x03\x02\x02\x02\x7F\u0195\x03\x02\x02\x02\x81\u019B" +
		"\x03\x02\x02\x02\x83\u019D\x03\x02\x02\x02\x85\u01A8\x03\x02\x02\x02\x87" +
		"\u01B3\x03\x02\x02\x02\x89\u01BE\x03\x02\x02\x02\x8B\u01D1\x03\x02\x02" +
		"\x02\x8D\u01D6\x03\x02\x02\x02\x8F\u01DC\x03\x02\x02\x02\x91\u01EB\x03" +
		"\x02\x02\x02\x93\u01F6\x03\x02\x02\x02\x95\u01FA\x03\x02\x02\x02\x97\u0200" +
		"\x03\x02\x02\x02\x99\u0207\x03\x02\x02\x02\x9B\x9C\x07]\x02\x02\x9C\x9D" +
		"\b\x02\x02\x02\x9D\x04\x03\x02\x02\x02\x9E\x9F\x07_\x02\x02\x9F\xA0\b" +
		"\x03\x03\x02\xA0\x06\x03\x02\x02\x02\xA1\xA2\x07*\x02\x02\xA2\xA3\b\x04" +
		"\x04\x02\xA3\b\x03\x02\x02\x02\xA4\xA5\x07+\x02\x02\xA5\xA6\b\x05\x05" +
		"\x02\xA6\n\x03\x02\x02\x02\xA7\xA8\x07}\x02\x02\xA8\xA9\b\x06\x06\x02" +
		"\xA9\f\x03\x02\x02\x02\xAA\xAB\x07\x7F\x02\x02\xAB\xAC\b\x07\x07\x02\xAC" +
		"\x0E\x03\x02\x02\x02\xAD\xAE\x07c\x02\x02\xAE\xAF\x07d\x02\x02\xAF\xB0" +
		"\x07u\x02\x02\xB0\xB1\x07v\x02\x02\xB1\xB2\x07t\x02\x02\xB2\xB3\x07c\x02" +
		"\x02\xB3\xB4\x07e\x02\x02\xB4\xB5\x07v\x02\x02\xB5\x10\x03\x02\x02\x02" +
		"\xB6\xB7\x07c\x02\x02\xB7\xB8\x07e\x02\x02\xB8\xB9\x07v\x02\x02\xB9\xBA" +
		"\x07w\x02\x02\xBA\xBB\x07c\x02\x02\xBB\xBC\x07n\x02\x02\xBC\x12\x03\x02" +
		"\x02\x02\xBD\xBE\x07c\x02\x02\xBE\xBF\x07p\x02\x02\xBF\xC0\x07f\x02\x02" +
		"\xC0\x14\x03\x02\x02\x02\xC1\xC2\x07c\x02\x02\xC2\xC3\x07u\x02\x02\xC3" +
		"\x16\x03\x02\x02\x02\xC4\xC5\x07d\x02\x02\xC5\xC6\x07t\x02\x02\xC6\xC7" +
		"\x07g\x02\x02\xC7\xC8\x07c\x02\x02\xC8\xC9\x07m\x02\x02\xC9\x18\x03\x02" +
		"\x02\x02\xCA\xCB\x07e\x02\x02\xCB\xCC\x07n\x02\x02\xCC\xCD\x07c\x02\x02" +
		"\xCD\xCE\x07u\x02\x02\xCE\xCF\x07u\x02\x02\xCF\x1A\x03\x02\x02\x02\xD0" +
		"\xD1\x07f\x02\x02\xD1\xD2\x07q\x02\x02\xD2\x1C\x03\x02\x02\x02\xD3\xD4" +
		"\x07g\x02\x02\xD4\xD5\x07n\x02\x02\xD5\xD6\x07u\x02\x02\xD6\xD7\x07g\x02" +
		"\x02\xD7\x1E\x03\x02\x02\x02\xD8\xD9\x07g\x02\x02\xD9\xDA\x07p\x02\x02" +
		"\xDA\xDB\x07w\x02\x02\xDB\xDC\x07o\x02\x02\xDC \x03\x02\x02\x02\xDD\xDE" +
		"\x07g\x02\x02\xDE\xDF\x07z\x02\x02\xDF\xE0\x07r\x02\x02\xE0\xE1\x07g\x02" +
		"\x02\xE1\xE2\x07e\x02\x02\xE2\xE3\x07v\x02\x02\xE3\"\x03\x02\x02\x02\xE4" +
		"\xE5\x07g\x02\x02\xE5\xE6\x07z\x02\x02\xE6\xE7\x07r\x02\x02\xE7\xE8\x07" +
		"q\x02\x02\xE8\xE9\x07t\x02\x02\xE9\xEA\x07v\x02\x02\xEA$\x03\x02\x02\x02" +
		"\xEB\xEC\x07g\x02\x02\xEC\xED\x07z\x02\x02\xED\xEE\x07v\x02\x02\xEE\xEF" +
		"\x07g\x02\x02\xEF\xF0\x07p\x02\x02\xF0\xF1\x07u\x02\x02\xF1\xF2\x07k\x02" +
		"\x02\xF2\xF3\x07q\x02\x02\xF3\xF4\x07p\x02\x02\xF4&\x03\x02\x02\x02\xF5" +
		"\xF6\x07h\x02\x02\xF6\xF7\x07c\x02\x02\xF7\xF8\x07e\x02\x02\xF8\xF9\x07" +
		"v\x02\x02\xF9\xFA\x07q\x02\x02\xFA\xFB\x07t\x02\x02\xFB\xFC\x07{\x02\x02" +
		"\xFC(\x03\x02\x02\x02\xFD\xFE\x07h\x02\x02\xFE\xFF\x07q\x02\x02\xFF\u0100" +
		"\x07t\x02\x02\u0100*\x03\x02\x02\x02\u0101\u0102\x07k\x02\x02\u0102\u0103" +
		"\x07h\x02\x02\u0103,\x03\x02\x02\x02\u0104\u0105\x07k\x02\x02\u0105\u0106" +
		"\x07o\x02\x02\u0106\u0107\x07r\x02\x02\u0107\u0108\x07q\x02\x02\u0108" +
		"\u0109\x07t\x02\x02\u0109\u010A\x07v\x02\x02\u010A.\x03\x02\x02\x02\u010B" +
		"\u010C\x07k\x02\x02\u010C\u010D\x07p\x02\x02\u010D0\x03\x02\x02\x02\u010E" +
		"\u010F\x07k\x02\x02\u010F\u0110\x07p\x02\x02\u0110\u0111\x07h\x02\x02" +
		"\u0111\u0112\x07k\x02\x02\u0112\u0113\x07z\x02\x02\u01132\x03\x02\x02" +
		"\x02\u0114\u0115\x07k\x02\x02\u0115\u0116\x07u\x02\x02\u01164\x03\x02" +
		"\x02\x02\u0117\u0118\x07o\x02\x02\u0118\u0119\x07q\x02\x02\u0119\u011A" +
		"\x07f\x02\x02\u011A\u011B\x07g\x02\x02\u011B\u011C\x07n\x02\x02\u011C" +
		"6\x03\x02\x02\x02\u011D\u011E\x07p\x02\x02\u011E\u011F\x07q\x02\x02\u011F" +
		"\u0120\x07v\x02\x02\u01208\x03\x02\x02\x02\u0121\u0122\x07q\x02\x02\u0122" +
		"\u0123\x07d\x02\x02\u0123\u0124\x07l\x02\x02\u0124\u0125\x07g\x02\x02" +
		"\u0125\u0126\x07e\x02\x02\u0126\u0127\x07v\x02\x02\u0127:\x03\x02\x02" +
		"\x02\u0128\u0129\x07q\x02\x02\u0129\u012A\x07t\x02\x02\u012A<\x03\x02" +
		"\x02\x02\u012B\u012C\x07r\x02\x02\u012C\u012D\x07q\x02\x02\u012D\u012E" +
		"\x07u\x02\x02\u012E\u012F\x07v\x02\x02\u012F\u0130\x07h\x02\x02\u0130" +
		"\u0131\x07k\x02\x02\u0131\u0132\x07z\x02\x02\u0132>\x03\x02\x02\x02\u0133" +
		"\u0134\x07r\x02\x02\u0134\u0135\x07t\x02\x02\u0135\u0136\x07g\x02\x02" +
		"\u0136\u0137\x07h\x02\x02\u0137\u0138\x07k\x02\x02\u0138\u0139\x07z\x02" +
		"\x02\u0139@\x03\x02\x02\x02\u013A\u013B\x07t\x02\x02\u013B\u013C\x07g" +
		"\x02\x02\u013C\u013D\x07v\x02\x02\u013D\u013E\x07w\x02\x02\u013E\u013F" +
		"\x07t\x02\x02\u013F\u0140\x07p\x02\x02\u0140B\x03\x02\x02\x02\u0141\u0142" +
		"\x07v\x02\x02\u0142\u0143\x07{\x02\x02\u0143\u0144\x07r\x02\x02\u0144" +
		"\u0145\x07g\x02\x02\u0145D\x03\x02\x02\x02\u0146\u0147\x07y\x02\x02\u0147" +
		"\u0148\x07j\x02\x02\u0148\u0149\x07k\x02\x02\u0149\u014A\x07n\x02\x02" +
		"\u014A\u014B\x07g\x02\x02\u014BF\x03\x02\x02\x02\u014C\u014D\x07(\x02" +
		"\x02\u014DH\x03\x02\x02\x02\u014E\u014F\x07?\x02\x02\u014FJ\x03\x02\x02" +
		"\x02\u0150\u0151\x07,\x02\x02\u0151L\x03\x02\x02\x02\u0152\u0153\x07B" +
		"\x02\x02\u0153N\x03\x02\x02\x02\u0154\u0155\x07^\x02\x02\u0155P\x03\x02" +
		"\x02\x02\u0156\u0157\x07`\x02\x02\u0157R\x03\x02\x02\x02\u0158\u0159\x07" +
		"A\x02\x02\u0159\u015A\x070\x02\x02\u015AT\x03\x02\x02\x02\u015B\u015C" +
		"\x07<\x02\x02\u015CV\x03\x02\x02\x02\u015D\u015E\x07.\x02\x02\u015EX\x03" +
		"\x02\x02\x02\u015F\u0160\x070\x02\x02\u0160Z\x03\x02\x02\x02\u0161\u0162" +
		"\x07?\x02\x02\u0162\u0163\x07?\x02\x02\u0163\\\x03\x02\x02\x02\u0164\u0165" +
		"\x07#\x02\x02\u0165^\x03\x02\x02\x02\u0166\u0167\x07@\x02\x02\u0167\u0168" +
		"\x07?\x02\x02\u0168`\x03\x02\x02\x02\u0169\u016A\x07@\x02\x02\u016Ab\x03" +
		"\x02\x02\x02\u016B\u016C\x07%\x02\x02\u016Cd\x03\x02\x02\x02\u016D\u016E" +
		"\x07>\x02\x02\u016E\u016F\x07?\x02\x02\u016Ff\x03\x02\x02\x02\u0170\u0171" +
		"\x07>\x02\x02\u0171h\x03\x02\x02\x02\u0172\u0173\x07/\x02\x02\u0173j\x03" +
		"\x02\x02\x02\u0174\u0175\x07\'\x02\x02\u0175l\x03\x02\x02\x02\u0176\u0177" +
		"\x07#\x02\x02\u0177\u0178\x07?\x02\x02\u0178n\x03\x02\x02\x02\u0179\u017A" +
		"\x07~\x02\x02\u017Ap\x03\x02\x02\x02\u017B\u017C\x07-\x02\x02\u017Cr\x03" +
		"\x02\x02\x02\u017D\u017E\x07A\x02\x02\u017Et\x03\x02\x02\x02\u017F\u0180" +
		"\x070\x02\x02\u0180\u0181\x070\x02\x02\u0181v\x03\x02\x02\x02\u0182\u0183" +
		"\x071\x02\x02\u0183x\x03\x02\x02\x02\u0184\u0185\x070\x02\x02\u0185\u0186" +
		"\x070\x02\x02\u0186\u0187\x070\x02\x02\u0187z\x03\x02\x02\x02\u0188\u0189" +
		"\x07\x80\x02\x02\u0189|\x03\x02\x02\x02\u018A\u018B\x07a\x02\x02\u018B" +
		"~\x03\x02\x02\x02\u018C\u018D\x05\x95K\x02\u018D\u018E\x05\x99M\x02\u018E" +
		"\u018F\x070\x02\x02\u018F\u0190\x05\x99M\x02\u0190\u0196\x03\x02\x02\x02" +
		"\u0191\u0192\x05\x97L\x02\u0192\u0193\x070\x02\x02\u0193\u0194\x05\x97" +
		"L\x02\u0194\u0196\x03\x02\x02\x02\u0195\u018C\x03\x02\x02\x02\u0195\u0191" +
		"\x03\x02\x02\x02\u0196\x80\x03\x02\x02\x02\u0197\u0198\x05\x95K\x02\u0198" +
		"\u0199\x05\x99M\x02\u0199\u019C\x03\x02\x02\x02\u019A\u019C\x05\x97L\x02" +
		"\u019B\u0197\x03\x02\x02\x02\u019B\u019A\x03\x02\x02\x02\u019C\x82\x03" +
		"\x02\x02\x02\u019D\u01A3\x07b\x02\x02\u019E\u01A2\n\x02\x02\x02\u019F" +
		"\u01A0\x07^\x02\x02\u01A0\u01A2\t\x03\x02\x02\u01A1\u019E\x03\x02\x02" +
		"\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u01A5\x03\x02\x02\x02\u01A3\u01A1" +
		"\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\u01A6\x03\x02\x02\x02" +
		"\u01A5\u01A3\x03\x02\x02\x02\u01A6\u01A7\x07b\x02\x02\u01A7\x84\x03\x02" +
		"\x02\x02\u01A8\u01AE\x07)\x02\x02\u01A9\u01AD\n\x04\x02\x02\u01AA\u01AB" +
		"\x07^\x02\x02\u01AB\u01AD\t\x05\x02\x02\u01AC\u01A9\x03\x02\x02\x02\u01AC" +
		"\u01AA\x03\x02\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01AC\x03\x02" +
		"\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B1\x03\x02\x02\x02\u01B0" +
		"\u01AE\x03\x02\x02\x02\u01B1\u01B2\x07)\x02\x02\u01B2\x86\x03\x02\x02" +
		"\x02\u01B3\u01B4\x07%\x02\x02\u01B4\u01B5\x07}\x02\x02\u01B5\u01B9\x03" +
		"\x02\x02\x02\u01B6\u01B8\v\x02\x02\x02\u01B7\u01B6\x03\x02\x02\x02\u01B8" +
		"\u01BB\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01B9\u01B7\x03\x02" +
		"\x02\x02\u01BA\u01BC\x03\x02\x02\x02\u01BB\u01B9\x03\x02\x02\x02\u01BC" +
		"\u01BD\x07\x7F\x02\x02\u01BD\x88\x03\x02\x02\x02\u01BE\u01C2\t\x06\x02" +
		"\x02\u01BF\u01C1\t\x07\x02\x02\u01C0\u01BF\x03\x02\x02\x02\u01C1\u01C4" +
		"\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02" +
		"\u01C3\x8A\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C5\u01C6\x06" +
		"F\x02\x02\u01C6\u01D2\x05\x8DG\x02\u01C7\u01C9\x07\x0F\x02\x02\u01C8\u01C7" +
		"\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02" +
		"\u01CA\u01CD\x07\f\x02\x02\u01CB\u01CD\x07\x0F\x02\x02\u01CC\u01C8\x03" +
		"\x02\x02\x02\u01CC\u01CB\x03\x02\x02\x02\u01CD\u01CF\x03\x02\x02\x02\u01CE" +
		"\u01D0\x05\x8DG\x02\u01CF\u01CE\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02" +
		"\x02\u01D0\u01D2\x03\x02\x02\x02\u01D1\u01C5\x03\x02\x02\x02\u01D1\u01CC" +
		"\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D4\bF\b\x02\u01D4" +
		"\x8C\x03\x02\x02\x02\u01D5\u01D7\t\b\x02\x02\u01D6\u01D5\x03\x02\x02\x02" +
		"\u01D7\u01D8\x03\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03" +
		"\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DB\bG\t\x02\u01DB\x8E" +
		"\x03\x02\x02\x02\u01DC\u01DD\x071\x02\x02\u01DD\u01DE\x07,\x02\x02\u01DE" +
		"\u01E3\x03\x02\x02\x02\u01DF\u01E2\x05\x8FH\x02\u01E0\u01E2\v\x02\x02" +
		"\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E0\x03\x02\x02\x02\u01E2\u01E5" +
		"\x03\x02\x02\x02\u01E3\u01E4\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02" +
		"\u01E4\u01E6\x03\x02\x02\x02\u01E5\u01E3\x03\x02\x02\x02\u01E6\u01E7\x07" +
		",\x02\x02\u01E7\u01E8\x071\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01EA" +
		"\bH\n\x02\u01EA\x90\x03\x02\x02\x02\u01EB\u01EC\x07/\x02\x02\u01EC\u01ED" +
		"\x07/\x02\x02\u01ED\u01F1\x03\x02\x02\x02\u01EE\u01F0\n\t\x02\x02\u01EF" +
		"\u01EE\x03\x02\x02\x02\u01F0\u01F3\x03\x02\x02\x02\u01F1\u01EF\x03\x02" +
		"\x02\x02\u01F1\u01F2\x03\x02\x02\x02\u01F2\u01F4\x03\x02\x02\x02\u01F3" +
		"\u01F1\x03\x02\x02\x02\u01F4\u01F5\bI\n\x02\u01F5\x92\x03\x02\x02\x02" +
		"\u01F6\u01F7\v\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\u01F9\bJ" +
		"\v\x02\u01F9\x94\x03\x02\x02\x02\u01FA\u01FC\t\n\x02\x02\u01FB\u01FD\t" +
		"\n\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD" +
		"\u01FE\x03\x02\x02\x02\u01FE\u01FF\t\v\x02\x02\u01FF\x96\x03\x02\x02\x02" +
		"\u0200\u0204\t\n\x02\x02\u0201\u0203\t\f\x02\x02\u0202\u0201\x03\x02\x02" +
		"\x02\u0203\u0206\x03\x02\x02\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205" +
		"\x03\x02\x02\x02\u0205\x98\x03\x02\x02\x02\u0206\u0204\x03\x02\x02\x02" +
		"\u0207\u020B\t\r\x02\x02\u0208\u020A\t\x07\x02\x02\u0209\u0208\x03\x02" +
		"\x02\x02\u020A\u020D\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B" +
		"\u020C\x03\x02\x02\x02\u020C\x9A\x03\x02\x02\x02\u020D\u020B\x03\x02\x02" +
		"\x02\x18\x02\u0195\u019B\u01A1\u01A3\u01AC\u01AE\u01B9\u01C2\u01C8\u01CC" +
		"\u01CF\u01D1\u01D8\u01E1\u01E3\u01F1\u01FC\u0202\u0204\u0209\u020B\f\x03" +
		"\x02\x02\x03\x03\x03\x03\x04\x04\x03\x05\x05\x03\x06\x06\x03\x07\x07\x03" +
		"F\b\x02\x05\x02\x02\x06\x02\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

