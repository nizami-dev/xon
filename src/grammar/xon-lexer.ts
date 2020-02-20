// Generated from XonLexer.g4 by ANTLR 4.7.3-SNAPSHOT

 
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
	public static readonly Class = 3;
	public static readonly Enum = 4;
	public static readonly Scheme = 5;
	public static readonly If = 6;
	public static readonly Else = 7;
	public static readonly Loop = 8;
	public static readonly In = 9;
	public static readonly Continue = 10;
	public static readonly Break = 11;
	public static readonly Return = 12;
	public static readonly As = 13;
	public static readonly Var = 14;
	public static readonly Preprocessor = 15;
	public static readonly LineBreak = 16;
	public static readonly BitAnd = 17;
	public static readonly BitOr = 18;
	public static readonly BitXor = 19;
	public static readonly RightShiftArithmetic = 20;
	public static readonly LeftShiftArithmetic = 21;
	public static readonly RightShiftLogical = 22;
	public static readonly OpenBracket = 23;
	public static readonly CloseBracket = 24;
	public static readonly OpenParen = 25;
	public static readonly CloseParen = 26;
	public static readonly OpenBrace = 27;
	public static readonly CloseBrace = 28;
	public static readonly Comma = 29;
	public static readonly Assign = 30;
	public static readonly QuestionMark = 31;
	public static readonly Colon = 32;
	public static readonly TwoColon = 33;
	public static readonly Ellipsis = 34;
	public static readonly Dot = 35;
	public static readonly Plus = 36;
	public static readonly Minus = 37;
	public static readonly BitNot = 38;
	public static readonly Not = 39;
	public static readonly Multiply = 40;
	public static readonly Divide = 41;
	public static readonly Modulus = 42;
	public static readonly Pow = 43;
	public static readonly Sharp = 44;
	public static readonly LessThan = 45;
	public static readonly MoreThan = 46;
	public static readonly LessThanEquals = 47;
	public static readonly MoreThanEquals = 48;
	public static readonly Equals = 49;
	public static readonly NotEquals = 50;
	public static readonly And = 51;
	public static readonly Or = 52;
	public static readonly MultiplyAssign = 53;
	public static readonly DivideAssign = 54;
	public static readonly ModulusAssign = 55;
	public static readonly PlusAssign = 56;
	public static readonly MinusAssign = 57;
	public static readonly LeftShiftArithmeticAssign = 58;
	public static readonly RightShiftArithmeticAssign = 59;
	public static readonly RightShiftLogicalAssign = 60;
	public static readonly BitAndAssign = 61;
	public static readonly BitXorAssign = 62;
	public static readonly BitOrAssign = 63;
	public static readonly LambdaStart = 64;
	public static readonly Pipe = 65;
	public static readonly Underscore = 66;
	public static readonly NullLiteral = 67;
	public static readonly BooleanLiteral = 68;
	public static readonly DecimalLiteral = 69;
	public static readonly FloatLiteral = 70;
	public static readonly StringLiteral = 71;
	public static readonly StringFormatStart = 72;
	public static readonly StringFormatMiddle = 73;
	public static readonly StringFormatEnd = 74;
	public static readonly ID = 75;
	public static readonly Skip = 76;
	public static readonly UnexpectedCharacter = 77;
	public static readonly ERROR = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "ERROR",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"Class", "Enum", "Scheme", "If", "Else", "Loop", "In", "Continue", "Break", 
		"Return", "As", "Var", "Preprocessor", "LineBreak", "BitAnd", "BitOr", 
		"BitXor", "RightShiftArithmetic", "LeftShiftArithmetic", "RightShiftLogical", 
		"OpenBracket", "CloseBracket", "OpenParen", "CloseParen", "OpenBrace", 
		"CloseBrace", "Comma", "Assign", "QuestionMark", "Colon", "TwoColon", 
		"Ellipsis", "Dot", "Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", 
		"Modulus", "Pow", "Sharp", "LessThan", "MoreThan", "LessThanEquals", "MoreThanEquals", 
		"Equals", "NotEquals", "And", "Or", "MultiplyAssign", "DivideAssign", 
		"ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", "Underscore", "NullLiteral", 
		"BooleanLiteral", "DecimalLiteral", "FloatLiteral", "StringLiteral", "StringFormatStart", 
		"StringFormatMiddle", "StringFormatEnd", "ID", "Skip", "UnexpectedCharacter", 
		"SPACES", "MULTI_LINE_COMMENT", "SINGLE_LINE_COMMENT", "LINE_JOINING", 
		"DECIMAL_NUMBER", "DECIMAL_DIGIT", "CHARACTER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'class'", "'enum'", "'scheme'", "'if'", 
		"'else'", "'loop'", "'in'", "'continue'", "'break'", "'return'", "'as'", 
		"'var'", undefined, undefined, "'and'", "'or'", "'xor'", "'>>'", "'<<'", 
		"'>>>'", "'['", "']'", "'('", "')'", "'{'", "'}'", "','", "'='", "'?'", 
		"':'", "'::'", "'...'", "'.'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", 
		"'%'", "'^'", "'#'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", 
		"'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", 
		"'&='", "'^='", "'|='", "'\\'", "'|'", "'_'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "Class", "Enum", "Scheme", "If", "Else", 
		"Loop", "In", "Continue", "Break", "Return", "As", "Var", "Preprocessor", 
		"LineBreak", "BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"RightShiftLogical", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Comma", "Assign", "QuestionMark", "Colon", 
		"TwoColon", "Ellipsis", "Dot", "Plus", "Minus", "BitNot", "Not", "Multiply", 
		"Divide", "Modulus", "Pow", "Sharp", "LessThan", "MoreThan", "LessThanEquals", 
		"MoreThanEquals", "Equals", "NotEquals", "And", "Or", "MultiplyAssign", 
		"DivideAssign", "ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", "Underscore", "NullLiteral", 
		"BooleanLiteral", "DecimalLiteral", "FloatLiteral", "StringLiteral", "StringFormatStart", 
		"StringFormatMiddle", "StringFormatEnd", "ID", "Skip", "UnexpectedCharacter",
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
		case 13:
			this.LineBreak_action(_localctx, actionIndex);
			break;

		case 20:
			this.OpenBracket_action(_localctx, actionIndex);
			break;

		case 21:
			this.CloseBracket_action(_localctx, actionIndex);
			break;

		case 22:
			this.OpenParen_action(_localctx, actionIndex);
			break;

		case 23:
			this.CloseParen_action(_localctx, actionIndex);
			break;

		case 24:
			this.OpenBrace_action(_localctx, actionIndex);
			break;

		case 25:
			this.CloseBrace_action(_localctx, actionIndex);
			break;
		}
	}
	private LineBreak_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.handleLineBreak()
			break;
		}
	}
	private OpenBracket_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.opened++;
			break;
		}
	}
	private CloseBracket_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.opened--;
			break;
		}
	}
	private OpenParen_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 3:
			this.opened++;
			break;
		}
	}
	private CloseParen_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 4:
			this.opened--;
			break;
		}
	}
	private OpenBrace_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 5:
			this.opened++;
			break;
		}
	}
	private CloseBrace_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 6:
			this.opened--;
			break;
		}
	}
	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.LineBreak_sempred(_localctx, predIndex);
		}
		return true;
	}
	private LineBreak_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.atStartOfInput();
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02O\u021C\b\x01" +
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
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x06\x0E\xEB\n\x0E\r\x0E\x0E\x0E\xEC\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\xF2\n\x0F\x03\x0F\x03\x0F\x05\x0F\xF6\n\x0F\x03\x0F\x05\x0F\xF9\n\x0F" +
		"\x05\x0F\xFB\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03" +
		"\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03" +
		"\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03" +
		".\x03.\x03.\x03/\x03/\x03/\x030\x030\x030\x031\x031\x031\x032\x032\x03" +
		"2\x033\x033\x033\x034\x034\x034\x035\x035\x035\x036\x036\x036\x037\x03" +
		"7\x037\x038\x038\x038\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03;\x03" +
		";\x03;\x03;\x03;\x03<\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03>\x03?\x03" +
		"?\x03@\x03@\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x03C\x03C\x03C\x05C\u0198\nC\x03D\x03D\x03E\x03E\x03E\x03E\x03" +
		"F\x03F\x07F\u01A2\nF\fF\x0EF\u01A5\vF\x03F\x03F\x03G\x03G\x03G\x03G\x07" +
		"G\u01AD\nG\fG\x0EG\u01B0\vG\x03G\x03G\x03H\x03H\x07H\u01B6\nH\fH\x0EH" +
		"\u01B9\vH\x03H\x03H\x03I\x03I\x07I\u01BF\nI\fI\x0EI\u01C2\vI\x03I\x03" +
		"I\x03J\x03J\x07J\u01C8\nJ\fJ\x0EJ\u01CB\vJ\x03J\x03J\x06J\u01CF\nJ\rJ" +
		"\x0EJ\u01D0\x05J\u01D3\nJ\x03K\x03K\x03K\x03K\x05K\u01D9\nK\x03K\x03K" +
		"\x03L\x03L\x03L\x03L\x03M\x06M\u01E2\nM\rM\x0EM\u01E3\x03N\x03N\x03N\x03" +
		"N\x07N\u01EA\nN\fN\x0EN\u01ED\vN\x03N\x03N\x03N\x03O\x03O\x03O\x03O\x07" +
		"O\u01F6\nO\fO\x0EO\u01F9\vO\x03P\x03P\x05P\u01FD\nP\x03P\x05P\u0200\n" +
		"P\x03P\x03P\x05P\u0204\nP\x03Q\x06Q\u0207\nQ\rQ\x0EQ\u0208\x03Q\x03Q\x06" +
		"Q\u020D\nQ\rQ\x0EQ\u020E\x07Q\u0211\nQ\fQ\x0EQ\u0214\vQ\x03R\x03R\x03" +
		"S\x03S\x03S\x05S\u021B\nS\x03\u01EB\x02\x02T\x03\x02\x05\x05\x02\x06\x07" +
		"\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F\x02\v\x11\x02\f\x13\x02\r\x15\x02" +
		"\x0E\x17\x02\x0F\x19\x02\x10\x1B\x02\x11\x1D\x02\x12\x1F\x02\x13!\x02" +
		"\x14#\x02\x15%\x02\x16\'\x02\x17)\x02\x18+\x02\x19-\x02\x1A/\x02\x1B1" +
		"\x02\x1C3\x02\x1D5\x02\x1E7\x02\x1F9\x02 ;\x02!=\x02\"?\x02#A\x02$C\x02" +
		"%E\x02&G\x02\'I\x02(K\x02)M\x02*O\x02+Q\x02,S\x02-U\x02.W\x02/Y\x020[" +
		"\x021]\x022_\x023a\x024c\x025e\x026g\x027i\x028k\x029m\x02:o\x02;q\x02" +
		"<s\x02=u\x02>w\x02?y\x02@{\x02A}\x02B\x7F\x02C\x81\x02D\x83\x02E\x85\x02" +
		"F\x87\x02G\x89\x02H\x8B\x02I\x8D\x02J\x8F\x02K\x91\x02L\x93\x02M\x95\x02" +
		"N\x97\x02O\x99\x02\x02\x9B\x02\x02\x9D\x02\x02\x9F\x02\x02\xA1\x02\x02" +
		"\xA3\x02\x02\xA5\x02\x02\x03\x02\n\x04\x02\f\f\x0F\x0F\x05\x02&&C\\c|" +
		"\x06\x022;C\\aac|\x06\x02&&C\\aac|\x04\x02\v\v\"\"\x03\x022;\x03\x02)" +
		")\v\x02$$))^^ddhhppttvvxx\x02\u022E\x02\x03\x03\x02\x02\x02\x02\x05\x03" +
		"\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02" +
		"\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02" +
		"\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02" +
		"\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02" +
		"+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02" +
		"\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02" +
		"\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03" +
		"\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02" +
		"\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02" +
		"M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02" +
		"\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02" +
		"\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03" +
		"\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02" +
		"\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02" +
		"o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02\x02\x02u\x03\x02" +
		"\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02{\x03\x02\x02\x02" +
		"\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x81\x03\x02\x02\x02" +
		"\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02" +
		"\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02\x8D\x03\x02\x02\x02" +
		"\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02" +
		"\x02\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x03\xA7\x03\x02\x02\x02" +
		"\x05\xAD\x03\x02\x02\x02\x07\xB2\x03\x02\x02\x02\t\xB9\x03\x02\x02\x02" +
		"\v\xBC\x03\x02\x02\x02\r\xC1\x03\x02\x02\x02\x0F\xC6\x03\x02\x02\x02\x11" +
		"\xC9\x03\x02\x02\x02\x13\xD2\x03\x02\x02\x02\x15\xD8\x03\x02\x02\x02\x17" +
		"\xDF\x03\x02\x02\x02\x19\xE2\x03\x02\x02\x02\x1B\xE6\x03\x02\x02\x02\x1D" +
		"\xFA\x03\x02\x02\x02\x1F\xFE\x03\x02\x02\x02!\u0102\x03\x02\x02\x02#\u0105" +
		"\x03\x02\x02\x02%\u0109\x03\x02\x02\x02\'\u010C\x03\x02\x02\x02)\u010F" +
		"\x03\x02\x02\x02+\u0113\x03\x02\x02\x02-\u0116\x03\x02\x02\x02/\u0119" +
		"\x03\x02\x02\x021\u011C\x03\x02\x02\x023\u011F\x03\x02\x02\x025\u0122" +
		"\x03\x02\x02\x027\u0125\x03\x02\x02\x029\u0127\x03\x02\x02\x02;\u0129" +
		"\x03\x02\x02\x02=\u012B\x03\x02\x02\x02?\u012D\x03\x02\x02\x02A\u0130" +
		"\x03\x02\x02\x02C\u0134\x03\x02\x02\x02E\u0136\x03\x02\x02\x02G\u0138" +
		"\x03\x02\x02\x02I\u013A\x03\x02\x02\x02K\u013C\x03\x02\x02\x02M\u013E" +
		"\x03\x02\x02\x02O\u0140\x03\x02\x02\x02Q\u0142\x03\x02\x02\x02S\u0144" +
		"\x03\x02\x02\x02U\u0146\x03\x02\x02\x02W\u0148\x03\x02\x02\x02Y\u014A" +
		"\x03\x02\x02\x02[\u014C\x03\x02\x02\x02]\u014F\x03\x02\x02\x02_\u0152" +
		"\x03\x02\x02\x02a\u0155\x03\x02\x02\x02c\u0158\x03\x02\x02\x02e\u015B" +
		"\x03\x02\x02\x02g\u015E\x03\x02\x02\x02i\u0161\x03\x02\x02\x02k\u0164" +
		"\x03\x02\x02\x02m\u0167\x03\x02\x02\x02o\u016A\x03\x02\x02\x02q\u016D" +
		"\x03\x02\x02\x02s\u0171\x03\x02\x02\x02u\u0175\x03\x02\x02\x02w\u017A" +
		"\x03\x02\x02\x02y\u017D\x03\x02\x02\x02{\u0180\x03\x02\x02\x02}\u0183" +
		"\x03\x02\x02\x02\x7F\u0185\x03\x02\x02\x02\x81\u0187\x03\x02\x02\x02\x83" +
		"\u0189\x03\x02\x02\x02\x85\u0197\x03\x02\x02\x02\x87\u0199\x03\x02\x02" +
		"\x02\x89\u019B\x03\x02\x02\x02\x8B\u019F\x03\x02\x02\x02\x8D\u01A8\x03" +
		"\x02\x02\x02\x8F\u01B3\x03\x02\x02\x02\x91\u01BC\x03\x02\x02\x02\x93\u01D2" +
		"\x03\x02\x02\x02\x95\u01D8\x03\x02\x02\x02\x97\u01DC\x03\x02\x02\x02\x99" +
		"\u01E1\x03\x02\x02\x02\x9B\u01E5\x03\x02\x02\x02\x9D\u01F1\x03\x02\x02" +
		"\x02\x9F\u01FA\x03\x02\x02\x02\xA1\u0206\x03\x02\x02\x02\xA3\u0215\x03" +
		"\x02\x02\x02\xA5\u021A\x03\x02\x02\x02\xA7\xA8\x07e\x02\x02\xA8\xA9\x07" +
		"n\x02\x02\xA9\xAA\x07c\x02\x02\xAA\xAB\x07u\x02\x02\xAB\xAC\x07u\x02\x02" +
		"\xAC\x04\x03\x02\x02\x02\xAD\xAE\x07g\x02\x02\xAE\xAF\x07p\x02\x02\xAF" +
		"\xB0\x07w\x02\x02\xB0\xB1\x07o\x02\x02\xB1\x06\x03\x02\x02\x02\xB2\xB3" +
		"\x07u\x02\x02\xB3\xB4\x07e\x02\x02\xB4\xB5\x07j\x02\x02\xB5\xB6\x07g\x02" +
		"\x02\xB6\xB7\x07o\x02\x02\xB7\xB8\x07g\x02\x02\xB8\b\x03\x02\x02\x02\xB9" +
		"\xBA\x07k\x02\x02\xBA\xBB\x07h\x02\x02\xBB\n\x03\x02\x02\x02\xBC\xBD\x07" +
		"g\x02\x02\xBD\xBE\x07n\x02\x02\xBE\xBF\x07u\x02\x02\xBF\xC0\x07g\x02\x02" +
		"\xC0\f\x03\x02\x02\x02\xC1\xC2\x07n\x02\x02\xC2\xC3\x07q\x02\x02\xC3\xC4" +
		"\x07q\x02\x02\xC4\xC5\x07r\x02\x02\xC5\x0E\x03\x02\x02\x02\xC6\xC7\x07" +
		"k\x02\x02\xC7\xC8\x07p\x02\x02\xC8\x10\x03\x02\x02\x02\xC9\xCA\x07e\x02" +
		"\x02\xCA\xCB\x07q\x02\x02\xCB\xCC\x07p\x02\x02\xCC\xCD\x07v\x02\x02\xCD" +
		"\xCE\x07k\x02\x02\xCE\xCF\x07p\x02\x02\xCF\xD0\x07w\x02\x02\xD0\xD1\x07" +
		"g\x02\x02\xD1\x12\x03\x02\x02\x02\xD2\xD3\x07d\x02\x02\xD3\xD4\x07t\x02" +
		"\x02\xD4\xD5\x07g\x02\x02\xD5\xD6\x07c\x02\x02\xD6\xD7\x07m\x02\x02\xD7" +
		"\x14\x03\x02\x02\x02\xD8\xD9\x07t\x02\x02\xD9\xDA\x07g\x02\x02\xDA\xDB" +
		"\x07v\x02\x02\xDB\xDC\x07w\x02\x02\xDC\xDD\x07t\x02\x02\xDD\xDE\x07p\x02" +
		"\x02\xDE\x16\x03\x02\x02\x02\xDF\xE0\x07c\x02\x02\xE0\xE1\x07u\x02\x02" +
		"\xE1\x18\x03\x02\x02\x02\xE2\xE3\x07x\x02\x02\xE3\xE4\x07c\x02\x02\xE4" +
		"\xE5\x07t\x02\x02\xE5\x1A\x03\x02\x02\x02\xE6\xE7\x07%\x02\x02\xE7\xE8" +
		"\x07<\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xEB\n\x02\x02\x02\xEA\xE9\x03" +
		"\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03" +
		"\x02\x02\x02\xED\x1C\x03\x02\x02\x02\xEE\xEF\x06\x0F\x02\x02\xEF\xFB\x05" +
		"\x99M\x02\xF0\xF2\x07\x0F\x02\x02\xF1\xF0\x03\x02\x02\x02\xF1\xF2\x03" +
		"\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF6\x07\f\x02\x02\xF4\xF6\x07" +
		"\x0F\x02\x02\xF5\xF1\x03\x02\x02\x02\xF5\xF4\x03\x02\x02\x02\xF6\xF8\x03" +
		"\x02\x02\x02\xF7\xF9\x05\x99M\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03" +
		"\x02\x02\x02\xF9\xFB\x03\x02\x02\x02\xFA\xEE\x03\x02\x02\x02\xFA\xF5\x03" +
		"\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\xFD\b\x0F\x02\x02\xFD\x1E\x03" +
		"\x02\x02\x02\xFE\xFF\x07c\x02\x02\xFF\u0100\x07p\x02\x02\u0100\u0101\x07" +
		"f\x02\x02\u0101 \x03\x02\x02\x02\u0102\u0103\x07q\x02\x02\u0103\u0104" +
		"\x07t\x02\x02\u0104\"\x03\x02\x02\x02\u0105\u0106\x07z\x02\x02\u0106\u0107" +
		"\x07q\x02\x02\u0107\u0108\x07t\x02\x02\u0108$\x03\x02\x02\x02\u0109\u010A" +
		"\x07@\x02\x02\u010A\u010B\x07@\x02\x02\u010B&\x03\x02\x02\x02\u010C\u010D" +
		"\x07>\x02\x02\u010D\u010E\x07>\x02\x02\u010E(\x03\x02\x02\x02\u010F\u0110" +
		"\x07@\x02\x02\u0110\u0111\x07@\x02\x02\u0111\u0112\x07@\x02\x02\u0112" +
		"*\x03\x02\x02\x02\u0113\u0114\x07]\x02\x02\u0114\u0115\b\x16\x03\x02\u0115" +
		",\x03\x02\x02\x02\u0116\u0117\x07_\x02\x02\u0117\u0118\b\x17\x04\x02\u0118" +
		".\x03\x02\x02\x02\u0119\u011A\x07*\x02\x02\u011A\u011B\b\x18\x05\x02\u011B" +
		"0\x03\x02\x02\x02\u011C\u011D\x07+\x02\x02\u011D\u011E\b\x19\x06\x02\u011E" +
		"2\x03\x02\x02\x02\u011F\u0120\x07}\x02\x02\u0120\u0121\b\x1A\x07\x02\u0121" +
		"4\x03\x02\x02\x02\u0122\u0123\x07\x7F\x02\x02\u0123\u0124\b\x1B\b\x02" +
		"\u01246\x03\x02\x02\x02\u0125\u0126\x07.\x02\x02\u01268\x03\x02\x02\x02" +
		"\u0127\u0128\x07?\x02\x02\u0128:\x03\x02\x02\x02\u0129\u012A\x07A\x02" +
		"\x02\u012A<\x03\x02\x02\x02\u012B\u012C\x07<\x02\x02\u012C>\x03\x02\x02" +
		"\x02\u012D\u012E\x07<\x02\x02\u012E\u012F\x07<\x02\x02\u012F@\x03\x02" +
		"\x02\x02\u0130\u0131\x070\x02\x02\u0131\u0132\x070\x02\x02\u0132\u0133" +
		"\x070\x02\x02\u0133B\x03\x02\x02\x02\u0134\u0135\x070\x02\x02\u0135D\x03" +
		"\x02\x02\x02\u0136\u0137\x07-\x02\x02\u0137F\x03\x02\x02\x02\u0138\u0139" +
		"\x07/\x02\x02\u0139H\x03\x02\x02\x02\u013A\u013B\x07\x80\x02\x02\u013B" +
		"J\x03\x02\x02\x02\u013C\u013D\x07#\x02\x02\u013DL\x03\x02\x02\x02\u013E" +
		"\u013F\x07,\x02\x02\u013FN\x03\x02\x02\x02\u0140\u0141\x071\x02\x02\u0141" +
		"P\x03\x02\x02\x02\u0142\u0143\x07\'\x02\x02\u0143R\x03\x02\x02\x02\u0144" +
		"\u0145\x07`\x02\x02\u0145T\x03\x02\x02\x02\u0146\u0147\x07%\x02\x02\u0147" +
		"V\x03\x02\x02\x02\u0148\u0149\x07>\x02\x02\u0149X\x03\x02\x02\x02\u014A" +
		"\u014B\x07@\x02\x02\u014BZ\x03\x02\x02\x02\u014C\u014D\x07>\x02\x02\u014D" +
		"\u014E\x07?\x02\x02\u014E\\\x03\x02\x02\x02\u014F\u0150\x07@\x02\x02\u0150" +
		"\u0151\x07?\x02\x02\u0151^\x03\x02\x02\x02\u0152\u0153\x07?\x02\x02\u0153" +
		"\u0154\x07?\x02\x02\u0154`\x03\x02\x02\x02\u0155\u0156\x07#\x02\x02\u0156" +
		"\u0157\x07?\x02\x02\u0157b\x03\x02\x02\x02\u0158\u0159\x07(\x02\x02\u0159" +
		"\u015A\x07(\x02\x02\u015Ad\x03\x02\x02\x02\u015B\u015C\x07~\x02\x02\u015C" +
		"\u015D\x07~\x02\x02\u015Df\x03\x02\x02\x02\u015E\u015F\x07,\x02\x02\u015F" +
		"\u0160\x07?\x02\x02\u0160h\x03\x02\x02\x02\u0161\u0162\x071\x02\x02\u0162" +
		"\u0163\x07?\x02\x02\u0163j\x03\x02\x02\x02\u0164\u0165\x07\'\x02\x02\u0165" +
		"\u0166\x07?\x02\x02\u0166l\x03\x02\x02\x02\u0167\u0168\x07-\x02\x02\u0168" +
		"\u0169\x07?\x02\x02\u0169n\x03\x02\x02\x02\u016A\u016B\x07/\x02\x02\u016B" +
		"\u016C\x07?\x02\x02\u016Cp\x03\x02\x02\x02\u016D\u016E\x07>\x02\x02\u016E" +
		"\u016F\x07>\x02\x02\u016F\u0170\x07?\x02\x02\u0170r\x03\x02\x02\x02\u0171" +
		"\u0172\x07@\x02\x02\u0172\u0173\x07@\x02\x02\u0173\u0174\x07?\x02\x02" +
		"\u0174t\x03\x02\x02\x02\u0175\u0176\x07@\x02\x02\u0176\u0177\x07@\x02" +
		"\x02\u0177\u0178\x07@\x02\x02\u0178\u0179\x07?\x02\x02\u0179v\x03\x02" +
		"\x02\x02\u017A\u017B\x07(\x02\x02\u017B\u017C\x07?\x02\x02\u017Cx\x03" +
		"\x02\x02\x02\u017D\u017E\x07`\x02\x02\u017E\u017F\x07?\x02\x02\u017Fz" +
		"\x03\x02\x02\x02\u0180\u0181\x07~\x02\x02\u0181\u0182\x07?\x02\x02\u0182" +
		"|\x03\x02\x02\x02\u0183\u0184\x07^\x02\x02\u0184~\x03\x02\x02\x02\u0185" +
		"\u0186\x07~\x02\x02\u0186\x80\x03\x02\x02\x02\u0187\u0188\x07a\x02\x02" +
		"\u0188\x82\x03\x02\x02\x02\u0189\u018A\x07p\x02\x02\u018A\u018B\x07w\x02" +
		"\x02\u018B\u018C\x07n\x02\x02\u018C\u018D\x07n\x02\x02\u018D\x84\x03\x02" +
		"\x02\x02\u018E\u018F\x07v\x02\x02\u018F\u0190\x07t\x02\x02\u0190\u0191" +
		"\x07w\x02\x02\u0191\u0198\x07g\x02\x02\u0192\u0193\x07h\x02\x02\u0193" +
		"\u0194\x07c\x02\x02\u0194\u0195\x07n\x02\x02\u0195\u0196\x07u\x02\x02" +
		"\u0196\u0198\x07g\x02\x02\u0197\u018E\x03\x02\x02\x02\u0197\u0192\x03" +
		"\x02\x02\x02\u0198\x86\x03\x02\x02\x02\u0199\u019A\x05\xA1Q\x02\u019A" +
		"\x88\x03\x02\x02\x02\u019B\u019C\x05\xA1Q\x02\u019C\u019D\x070\x02\x02" +
		"\u019D\u019E\x05\xA1Q\x02\u019E\x8A\x03\x02\x02\x02\u019F\u01A3\x07)\x02" +
		"\x02\u01A0\u01A2\x05\xA5S\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2\u01A5" +
		"\x03\x02\x02\x02\u01A3\u01A1\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02" +
		"\u01A4\u01A6\x03\x02\x02\x02\u01A5\u01A3\x03\x02\x02\x02\u01A6\u01A7\x07" +
		")\x02\x02\u01A7\x8C\x03\x02\x02\x02\u01A8\u01A9\x07h\x02\x02\u01A9\u01AA" +
		"\x07)\x02\x02\u01AA\u01AE\x03\x02\x02\x02\u01AB\u01AD\x05\xA5S\x02\u01AC" +
		"\u01AB\x03\x02\x02\x02\u01AD\u01B0\x03\x02\x02\x02\u01AE\u01AC\x03\x02" +
		"\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B1\x03\x02\x02\x02\u01B0" +
		"\u01AE\x03\x02\x02\x02\u01B1\u01B2\x07}\x02\x02\u01B2\x8E\x03\x02\x02" +
		"\x02\u01B3\u01B7\x07\x7F\x02\x02\u01B4\u01B6\x05\xA5S\x02\u01B5\u01B4" +
		"\x03\x02\x02\x02\u01B6\u01B9\x03\x02\x02\x02\u01B7\u01B5\x03\x02\x02\x02" +
		"\u01B7\u01B8\x03\x02\x02\x02\u01B8\u01BA\x03\x02\x02\x02\u01B9\u01B7\x03" +
		"\x02\x02\x02\u01BA\u01BB\x07}\x02\x02\u01BB\x90\x03\x02\x02\x02\u01BC" +
		"\u01C0\x07\x7F\x02\x02\u01BD\u01BF\x05\xA5S\x02\u01BE\u01BD\x03\x02\x02" +
		"\x02\u01BF\u01C2\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01C1" +
		"\x03\x02\x02\x02\u01C1\u01C3\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02" +
		"\u01C3\u01C4\x07)\x02\x02\u01C4\x92\x03\x02\x02\x02\u01C5\u01C9\t\x03" +
		"\x02\x02\u01C6\u01C8\t\x04\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C8\u01CB" +
		"\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9\u01CA\x03\x02\x02\x02" +
		"\u01CA\u01D3\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CC\u01CE\t" +
		"\x05\x02\x02\u01CD\u01CF\t\x04\x02\x02\u01CE\u01CD\x03\x02\x02\x02\u01CF" +
		"\u01D0\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D0\u01D1\x03\x02" +
		"\x02\x02\u01D1\u01D3\x03\x02\x02\x02\u01D2\u01C5\x03\x02\x02\x02\u01D2" +
		"\u01CC\x03\x02\x02\x02\u01D3\x94\x03\x02\x02\x02\u01D4\u01D9\x05\x99M" +
		"\x02\u01D5\u01D9\x05\x9DO\x02\u01D6\u01D9\x05\x9BN\x02\u01D7\u01D9\x05" +
		"\x9FP\x02\u01D8\u01D4\x03\x02\x02\x02\u01D8\u01D5\x03\x02\x02\x02\u01D8" +
		"\u01D6\x03\x02\x02\x02\u01D8\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02" +
		"\x02\x02\u01DA\u01DB\bK\t\x02\u01DB\x96\x03\x02\x02\x02\u01DC\u01DD\v" +
		"\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE\u01DF\bL\n\x02\u01DF\x98" +
		"\x03\x02\x02\x02\u01E0\u01E2\t\x06\x02\x02\u01E1\u01E0\x03\x02\x02\x02" +
		"\u01E2\u01E3\x03\x02\x02\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E4\x03" +
		"\x02\x02\x02\u01E4\x9A\x03\x02\x02\x02\u01E5\u01E6\x071\x02\x02\u01E6" +
		"\u01E7\x07,\x02\x02\u01E7\u01EB\x03\x02\x02\x02\u01E8\u01EA\v\x02\x02" +
		"\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01EC" +
		"\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EC\u01EE\x03\x02\x02\x02" +
		"\u01ED\u01EB\x03\x02\x02\x02\u01EE\u01EF\x07,\x02\x02\u01EF\u01F0\x07" +
		"1\x02\x02\u01F0\x9C\x03\x02\x02\x02\u01F1\u01F2\x071\x02\x02\u01F2\u01F3" +
		"\x071\x02\x02\u01F3\u01F7\x03\x02\x02\x02\u01F4\u01F6\n\x02\x02\x02\u01F5" +
		"\u01F4\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5\x03\x02" +
		"\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\x9E\x03\x02\x02\x02\u01F9\u01F7" +
		"\x03\x02\x02\x02\u01FA\u01FC\x07^\x02\x02\u01FB\u01FD\x05\x99M\x02\u01FC" +
		"\u01FB\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD\u0203\x03\x02" +
		"\x02\x02\u01FE\u0200\x07\x0F\x02\x02\u01FF\u01FE\x03\x02\x02\x02\u01FF" +
		"\u0200\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0204\x07\f\x02" +
		"\x02\u0202\u0204\x07\x0F\x02\x02\u0203\u01FF\x03\x02\x02\x02\u0203\u0202" +
		"\x03\x02\x02\x02\u0204\xA0\x03\x02\x02\x02\u0205\u0207\x05\xA3R\x02\u0206" +
		"\u0205\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0206\x03\x02" +
		"\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u0212\x03\x02\x02\x02\u020A" +
		"\u020C\x07a\x02\x02\u020B\u020D\x05\xA3R\x02\u020C\u020B\x03\x02\x02\x02" +
		"\u020D\u020E\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02\u020E\u020F\x03" +
		"\x02\x02\x02\u020F\u0211\x03\x02\x02\x02\u0210\u020A\x03\x02\x02\x02\u0211" +
		"\u0214\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02" +
		"\x02\x02\u0213\xA2\x03\x02\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0216" +
		"\t\x07\x02\x02\u0216\xA4\x03\x02\x02\x02\u0217\u021B\n\b\x02\x02\u0218" +
		"\u0219\x07^\x02\x02\u0219\u021B\t\t\x02\x02\u021A\u0217\x03\x02\x02\x02" +
		"\u021A\u0218\x03\x02\x02\x02\u021B\xA6\x03\x02\x02\x02\x1B\x02\xEC\xF1" +
		"\xF5\xF8\xFA\u0197\u01A3\u01AE\u01B7\u01C0\u01C9\u01D0\u01D2\u01D8\u01E3" +
		"\u01EB\u01F7\u01FC\u01FF\u0203\u0208\u020E\u0212\u021A\v\x03\x0F\x02\x03" +
		"\x16\x03\x03\x17\x04\x03\x18\x05\x03\x19\x06\x03\x1A\x07\x03\x1B\b\b\x02" +
		"\x02\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

