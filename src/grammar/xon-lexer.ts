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
	public static readonly As = 3;
	public static readonly If = 4;
	public static readonly Else = 5;
	public static readonly Loop = 6;
	public static readonly In = 7;
	public static readonly Pass = 8;
	public static readonly Continue = 9;
	public static readonly Break = 10;
	public static readonly Return = 11;
	public static readonly Select = 12;
	public static readonly Preprocessor = 13;
	public static readonly LineBreak = 14;
	public static readonly BitAnd = 15;
	public static readonly BitOr = 16;
	public static readonly BitXor = 17;
	public static readonly RightShiftArithmetic = 18;
	public static readonly LeftShiftArithmetic = 19;
	public static readonly RightShiftLogical = 20;
	public static readonly OpenBracket = 21;
	public static readonly CloseBracket = 22;
	public static readonly OpenParen = 23;
	public static readonly CloseParen = 24;
	public static readonly OpenBrace = 25;
	public static readonly CloseBrace = 26;
	public static readonly Ad = 27;
	public static readonly Comma = 28;
	public static readonly Assign = 29;
	public static readonly QuestionMark = 30;
	public static readonly Colon = 31;
	public static readonly TwoColon = 32;
	public static readonly Dot = 33;
	public static readonly Plus = 34;
	public static readonly Minus = 35;
	public static readonly BitNot = 36;
	public static readonly Not = 37;
	public static readonly Multiply = 38;
	public static readonly Divide = 39;
	public static readonly Modulus = 40;
	public static readonly Pow = 41;
	public static readonly Sharp = 42;
	public static readonly LessThan = 43;
	public static readonly MoreThan = 44;
	public static readonly LessThanEquals = 45;
	public static readonly MoreThanEquals = 46;
	public static readonly Equals = 47;
	public static readonly NotEquals = 48;
	public static readonly And = 49;
	public static readonly Or = 50;
	public static readonly MultiplyAssign = 51;
	public static readonly DivideAssign = 52;
	public static readonly ModulusAssign = 53;
	public static readonly PlusAssign = 54;
	public static readonly MinusAssign = 55;
	public static readonly LeftShiftArithmeticAssign = 56;
	public static readonly RightShiftArithmeticAssign = 57;
	public static readonly RightShiftLogicalAssign = 58;
	public static readonly BitAndAssign = 59;
	public static readonly BitXorAssign = 60;
	public static readonly BitOrAssign = 61;
	public static readonly LambdaStart = 62;
	public static readonly Pipe = 63;
	public static readonly Underscore = 64;
	public static readonly Declaration = 65;
	public static readonly Constant = 66;
	public static readonly Spread = 67;
	public static readonly NullLiteral = 68;
	public static readonly BooleanLiteral = 69;
	public static readonly DecimalLiteral = 70;
	public static readonly FloatLiteral = 71;
	public static readonly StringLiteral = 72;
	public static readonly StringFormatStart = 73;
	public static readonly StringFormatMiddle = 74;
	public static readonly StringFormatEnd = 75;
	public static readonly ID = 76;
	public static readonly Skip = 77;
	public static readonly UnexpectedCharacter = 78;
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
		"As", "If", "Else", "Loop", "In", "Pass", "Continue", "Break", "Return", 
		"Select", "Preprocessor", "LineBreak", "BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", 
		"LeftShiftArithmetic", "RightShiftLogical", "OpenBracket", "CloseBracket", 
		"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "Ad", "Comma", "Assign", 
		"QuestionMark", "Colon", "TwoColon", "Dot", "Plus", "Minus", "BitNot", 
		"Not", "Multiply", "Divide", "Modulus", "Pow", "Sharp", "LessThan", "MoreThan", 
		"LessThanEquals", "MoreThanEquals", "Equals", "NotEquals", "And", "Or", 
		"MultiplyAssign", "DivideAssign", "ModulusAssign", "PlusAssign", "MinusAssign", 
		"LeftShiftArithmeticAssign", "RightShiftArithmeticAssign", "RightShiftLogicalAssign", 
		"BitAndAssign", "BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", 
		"Underscore", "Declaration", "Constant", "Spread", "NullLiteral", "BooleanLiteral", 
		"DecimalLiteral", "FloatLiteral", "StringLiteral", "StringFormatStart", 
		"StringFormatMiddle", "StringFormatEnd", "ID", "Skip", "UnexpectedCharacter", 
		"SPACES", "MULTI_LINE_COMMENT", "SINGLE_LINE_COMMENT", "LINE_JOINING", 
		"DECIMAL_NUMBER", "DECIMAL_DIGIT", "CHARACTER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'as'", "'if'", "'else'", "'loop'", "'in'", 
		"'pass'", "'continue'", "'break'", "'return'", "'select'", undefined, 
		undefined, "'and'", "'or'", "'xor'", "'>>'", "'<<'", "'>>>'", "'['", "']'", 
		"'('", "')'", "'{'", "'}'", "'@'", "','", "'='", "'?'", "':'", "'::'", 
		"'.'", "'+'", "'-'", "'~'", "'!'", "'*'", "'/'", "'%'", "'^'", "'#'", 
		"'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'&&'", "'||'", "'*='", 
		"'/='", "'%='", "'+='", "'-='", "'<<='", "'>>='", "'>>>='", "'&='", "'^='", 
		"'|='", "'\\'", "'|'", "'_'", "':='", "'::='", "'...'", "'null'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "As", "If", "Else", "Loop", "In", "Pass", 
		"Continue", "Break", "Return", "Select", "Preprocessor", "LineBreak", 
		"BitAnd", "BitOr", "BitXor", "RightShiftArithmetic", "LeftShiftArithmetic", 
		"RightShiftLogical", "OpenBracket", "CloseBracket", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "Ad", "Comma", "Assign", "QuestionMark", "Colon", 
		"TwoColon", "Dot", "Plus", "Minus", "BitNot", "Not", "Multiply", "Divide", 
		"Modulus", "Pow", "Sharp", "LessThan", "MoreThan", "LessThanEquals", "MoreThanEquals", 
		"Equals", "NotEquals", "And", "Or", "MultiplyAssign", "DivideAssign", 
		"ModulusAssign", "PlusAssign", "MinusAssign", "LeftShiftArithmeticAssign", 
		"RightShiftArithmeticAssign", "RightShiftLogicalAssign", "BitAndAssign", 
		"BitXorAssign", "BitOrAssign", "LambdaStart", "Pipe", "Underscore", "Declaration", 
		"Constant", "Spread", "NullLiteral", "BooleanLiteral", "DecimalLiteral", 
		"FloatLiteral", "StringLiteral", "StringFormatStart", "StringFormatMiddle", 
		"StringFormatEnd", "ID", "Skip", "UnexpectedCharacter",
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
		case 11:
			this.LineBreak_action(_localctx, actionIndex);
			break;

		case 18:
			this.OpenBracket_action(_localctx, actionIndex);
			break;

		case 19:
			this.CloseBracket_action(_localctx, actionIndex);
			break;

		case 20:
			this.OpenParen_action(_localctx, actionIndex);
			break;

		case 21:
			this.CloseParen_action(_localctx, actionIndex);
			break;

		case 22:
			this.OpenBrace_action(_localctx, actionIndex);
			break;

		case 23:
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
		case 11:
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02P\u0215\b\x01" +
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
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x03\x02\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x06\f\xE3\n\f\r\f\x0E\f\xE4\x03\r\x03\r\x03\r\x05\r\xEA\n\r\x03\r\x03" +
		"\r\x05\r\xEE\n\r\x03\r\x05\r\xF1\n\r\x05\r\xF3\n\r\x03\r\x03\r\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x16" +
		"\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19" +
		"\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03" +
		"\"\x03\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03" +
		"(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x03.\x03" +
		".\x03.\x03/\x03/\x03/\x030\x030\x030\x031\x031\x031\x032\x032\x032\x03" +
		"3\x033\x033\x034\x034\x034\x035\x035\x035\x036\x036\x036\x037\x037\x03" +
		"7\x037\x038\x038\x038\x038\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03" +
		";\x03;\x03;\x03<\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03" +
		"@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03" +
		"D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x05D\u0199\nD\x03E\x03E\x03" +
		"F\x03F\x03F\x03F\x03G\x03G\x07G\u01A3\nG\fG\x0EG\u01A6\vG\x03G\x03G\x03" +
		"H\x03H\x03H\x03H\x07H\u01AE\nH\fH\x0EH\u01B1\vH\x03H\x03H\x03I\x03I\x07" +
		"I\u01B7\nI\fI\x0EI\u01BA\vI\x03I\x03I\x03J\x03J\x07J\u01C0\nJ\fJ\x0EJ" +
		"\u01C3\vJ\x03J\x03J\x03K\x03K\x07K\u01C9\nK\fK\x0EK\u01CC\vK\x03L\x03" +
		"L\x03L\x03L\x05L\u01D2\nL\x03L\x03L\x03M\x03M\x03M\x03M\x03N\x06N\u01DB" +
		"\nN\rN\x0EN\u01DC\x03O\x03O\x03O\x03O\x07O\u01E3\nO\fO\x0EO\u01E6\vO\x03" +
		"O\x03O\x03O\x03P\x03P\x03P\x03P\x07P\u01EF\nP\fP\x0EP\u01F2\vP\x03Q\x03" +
		"Q\x05Q\u01F6\nQ\x03Q\x05Q\u01F9\nQ\x03Q\x03Q\x05Q\u01FD\nQ\x03R\x06R\u0200" +
		"\nR\rR\x0ER\u0201\x03R\x03R\x06R\u0206\nR\rR\x0ER\u0207\x07R\u020A\nR" +
		"\fR\x0ER\u020D\vR\x03S\x03S\x03T\x03T\x03T\x05T\u0214\nT\x03\u01E4\x02" +
		"\x02U\x03\x02\x05\x05\x02\x06\x07\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F" +
		"\x02\v\x11\x02\f\x13\x02\r\x15\x02\x0E\x17\x02\x0F\x19\x02\x10\x1B\x02" +
		"\x11\x1D\x02\x12\x1F\x02\x13!\x02\x14#\x02\x15%\x02\x16\'\x02\x17)\x02" +
		"\x18+\x02\x19-\x02\x1A/\x02\x1B1\x02\x1C3\x02\x1D5\x02\x1E7\x02\x1F9\x02" +
		" ;\x02!=\x02\"?\x02#A\x02$C\x02%E\x02&G\x02\'I\x02(K\x02)M\x02*O\x02+" +
		"Q\x02,S\x02-U\x02.W\x02/Y\x020[\x021]\x022_\x023a\x024c\x025e\x026g\x02" +
		"7i\x028k\x029m\x02:o\x02;q\x02<s\x02=u\x02>w\x02?y\x02@{\x02A}\x02B\x7F" +
		"\x02C\x81\x02D\x83\x02E\x85\x02F\x87\x02G\x89\x02H\x8B\x02I\x8D\x02J\x8F" +
		"\x02K\x91\x02L\x93\x02M\x95\x02N\x97\x02O\x99\x02P\x9B\x02\x02\x9D\x02" +
		"\x02\x9F\x02\x02\xA1\x02\x02\xA3\x02\x02\xA5\x02\x02\xA7\x02\x02\x03\x02" +
		"\t\x04\x02\f\f\x0F\x0F\x05\x02C\\aac|\x06\x022;C\\aac|\x04\x02\v\v\"\"" +
		"\x03\x022;\x03\x02))\v\x02$$))^^ddhhppttvvxx\x02\u0225\x02\x03\x03\x02" +
		"\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
		"\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
		"\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
		"\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02" +
		"\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02" +
		"\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02" +
		")\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02" +
		"\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02" +
		"K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02" +
		"\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02" +
		"\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03" +
		"\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02" +
		"\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02" +
		"m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02" +
		"\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02" +
		"\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02" +
		"\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02" +
		"\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02" +
		"\x8D\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02" +
		"\x93\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02" +
		"\x99\x03\x02\x02\x02\x03\xA9\x03\x02\x02\x02\x05\xAC\x03\x02\x02\x02\x07" +
		"\xAF\x03\x02\x02\x02\t\xB4\x03\x02\x02\x02\v\xB9\x03\x02\x02\x02\r\xBC" +
		"\x03\x02\x02\x02\x0F\xC1\x03\x02\x02\x02\x11\xCA\x03\x02\x02\x02\x13\xD0" +
		"\x03\x02\x02\x02\x15\xD7\x03\x02\x02\x02\x17\xDE\x03\x02\x02\x02\x19\xF2" +
		"\x03\x02\x02\x02\x1B\xF6\x03\x02\x02\x02\x1D\xFA\x03\x02\x02\x02\x1F\xFD" +
		"\x03\x02\x02\x02!\u0101\x03\x02\x02\x02#\u0104\x03\x02\x02\x02%\u0107" +
		"\x03\x02\x02\x02\'\u010B\x03\x02\x02\x02)\u010E\x03\x02\x02\x02+\u0111" +
		"\x03\x02\x02\x02-\u0114\x03\x02\x02\x02/\u0117\x03\x02\x02\x021\u011A" +
		"\x03\x02\x02\x023\u011D\x03\x02\x02\x025\u011F\x03\x02\x02\x027\u0121" +
		"\x03\x02\x02\x029\u0123\x03\x02\x02\x02;\u0125\x03\x02\x02\x02=\u0127" +
		"\x03\x02\x02\x02?\u012A\x03\x02\x02\x02A\u012C\x03\x02\x02\x02C\u012E" +
		"\x03\x02\x02\x02E\u0130\x03\x02\x02\x02G\u0132\x03\x02\x02\x02I\u0134" +
		"\x03\x02\x02\x02K\u0136\x03\x02\x02\x02M\u0138\x03\x02\x02\x02O\u013A" +
		"\x03\x02\x02\x02Q\u013C\x03\x02\x02\x02S\u013E\x03\x02\x02\x02U\u0140" +
		"\x03\x02\x02\x02W\u0142\x03\x02\x02\x02Y\u0145\x03\x02\x02\x02[\u0148" +
		"\x03\x02\x02\x02]\u014B\x03\x02\x02\x02_\u014E\x03\x02\x02\x02a\u0151" +
		"\x03\x02\x02\x02c\u0154\x03\x02\x02\x02e\u0157\x03\x02\x02\x02g\u015A" +
		"\x03\x02\x02\x02i\u015D\x03\x02\x02\x02k\u0160\x03\x02\x02\x02m\u0163" +
		"\x03\x02\x02\x02o\u0167\x03\x02\x02\x02q\u016B\x03\x02\x02\x02s\u0170" +
		"\x03\x02\x02\x02u\u0173\x03\x02\x02\x02w\u0176\x03\x02\x02\x02y\u0179" +
		"\x03\x02\x02\x02{\u017B\x03\x02\x02\x02}\u017D\x03\x02\x02\x02\x7F\u017F" +
		"\x03\x02\x02\x02\x81\u0182\x03\x02\x02\x02\x83\u0186\x03\x02\x02\x02\x85" +
		"\u018A\x03\x02\x02\x02\x87\u0198\x03\x02\x02\x02\x89\u019A\x03\x02\x02" +
		"\x02\x8B\u019C\x03\x02\x02\x02\x8D\u01A0\x03\x02\x02\x02\x8F\u01A9\x03" +
		"\x02\x02\x02\x91\u01B4\x03\x02\x02\x02\x93\u01BD\x03\x02\x02\x02\x95\u01C6" +
		"\x03\x02\x02\x02\x97\u01D1\x03\x02\x02\x02\x99\u01D5\x03\x02\x02\x02\x9B" +
		"\u01DA\x03\x02\x02\x02\x9D\u01DE\x03\x02\x02\x02\x9F\u01EA\x03\x02\x02" +
		"\x02\xA1\u01F3\x03\x02\x02\x02\xA3\u01FF\x03\x02\x02\x02\xA5\u020E\x03" +
		"\x02\x02\x02\xA7\u0213\x03\x02\x02\x02\xA9\xAA\x07c\x02\x02\xAA\xAB\x07" +
		"u\x02\x02\xAB\x04\x03\x02\x02\x02\xAC\xAD\x07k\x02\x02\xAD\xAE\x07h\x02" +
		"\x02\xAE\x06\x03\x02\x02\x02\xAF\xB0\x07g\x02\x02\xB0\xB1\x07n\x02\x02" +
		"\xB1\xB2\x07u\x02\x02\xB2\xB3\x07g\x02\x02\xB3\b\x03\x02\x02\x02\xB4\xB5" +
		"\x07n\x02\x02\xB5\xB6\x07q\x02\x02\xB6\xB7\x07q\x02\x02\xB7\xB8\x07r\x02" +
		"\x02\xB8\n\x03\x02\x02\x02\xB9\xBA\x07k\x02\x02\xBA\xBB\x07p\x02\x02\xBB" +
		"\f\x03\x02\x02\x02\xBC\xBD\x07r\x02\x02\xBD\xBE\x07c\x02\x02\xBE\xBF\x07" +
		"u\x02\x02\xBF\xC0\x07u\x02\x02\xC0\x0E\x03\x02\x02\x02\xC1\xC2\x07e\x02" +
		"\x02\xC2\xC3\x07q\x02\x02\xC3\xC4\x07p\x02\x02\xC4\xC5\x07v\x02\x02\xC5" +
		"\xC6\x07k\x02\x02\xC6\xC7\x07p\x02\x02\xC7\xC8\x07w\x02\x02\xC8\xC9\x07" +
		"g\x02\x02\xC9\x10\x03\x02\x02\x02\xCA\xCB\x07d\x02\x02\xCB\xCC\x07t\x02" +
		"\x02\xCC\xCD\x07g\x02\x02\xCD\xCE\x07c\x02\x02\xCE\xCF\x07m\x02\x02\xCF" +
		"\x12\x03\x02\x02\x02\xD0\xD1\x07t\x02\x02\xD1\xD2\x07g\x02\x02\xD2\xD3" +
		"\x07v\x02\x02\xD3\xD4\x07w\x02\x02\xD4\xD5\x07t\x02\x02\xD5\xD6\x07p\x02" +
		"\x02\xD6\x14\x03\x02\x02\x02\xD7\xD8\x07u\x02\x02\xD8\xD9\x07g\x02\x02" +
		"\xD9\xDA\x07n\x02\x02\xDA\xDB\x07g\x02\x02\xDB\xDC\x07e\x02\x02\xDC\xDD" +
		"\x07v\x02\x02\xDD\x16\x03\x02\x02\x02\xDE\xDF\x07%\x02\x02\xDF\xE0\x07" +
		"<\x02\x02\xE0\xE2\x03\x02\x02\x02\xE1\xE3\n\x02\x02\x02\xE2\xE1\x03\x02" +
		"\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4\xE5\x03\x02" +
		"\x02\x02\xE5\x18\x03\x02\x02\x02\xE6\xE7\x06\r\x02\x02\xE7\xF3\x05\x9B" +
		"N\x02\xE8\xEA\x07\x0F\x02\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02" +
		"\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xEE\x07\f\x02\x02\xEC\xEE\x07\x0F" +
		"\x02\x02\xED\xE9\x03\x02\x02\x02\xED\xEC\x03\x02\x02\x02\xEE\xF0\x03\x02" +
		"\x02\x02\xEF\xF1\x05\x9BN\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02" +
		"\x02\x02\xF1\xF3\x03\x02\x02\x02\xF2\xE6\x03\x02\x02\x02\xF2\xED\x03\x02" +
		"\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF5\b\r\x02\x02\xF5\x1A\x03\x02\x02" +
		"\x02\xF6\xF7\x07c\x02\x02\xF7\xF8\x07p\x02\x02\xF8\xF9\x07f\x02\x02\xF9" +
		"\x1C\x03\x02\x02\x02\xFA\xFB\x07q\x02\x02\xFB\xFC\x07t\x02\x02\xFC\x1E" +
		"\x03\x02\x02\x02\xFD\xFE\x07z\x02\x02\xFE\xFF\x07q\x02\x02\xFF\u0100\x07" +
		"t\x02\x02\u0100 \x03\x02\x02\x02\u0101\u0102\x07@\x02\x02\u0102\u0103" +
		"\x07@\x02\x02\u0103\"\x03\x02\x02\x02\u0104\u0105\x07>\x02\x02\u0105\u0106" +
		"\x07>\x02\x02\u0106$\x03\x02\x02\x02\u0107\u0108\x07@\x02\x02\u0108\u0109" +
		"\x07@\x02\x02\u0109\u010A\x07@\x02\x02\u010A&\x03\x02\x02\x02\u010B\u010C" +
		"\x07]\x02\x02\u010C\u010D\b\x14\x03\x02\u010D(\x03\x02\x02\x02\u010E\u010F" +
		"\x07_\x02\x02\u010F\u0110\b\x15\x04\x02\u0110*\x03\x02\x02\x02\u0111\u0112" +
		"\x07*\x02\x02\u0112\u0113\b\x16\x05\x02\u0113,\x03\x02\x02\x02\u0114\u0115" +
		"\x07+\x02\x02\u0115\u0116\b\x17\x06\x02\u0116.\x03\x02\x02\x02\u0117\u0118" +
		"\x07}\x02\x02\u0118\u0119\b\x18\x07\x02\u01190\x03\x02\x02\x02\u011A\u011B" +
		"\x07\x7F\x02\x02\u011B\u011C\b\x19\b\x02\u011C2\x03\x02\x02\x02\u011D" +
		"\u011E\x07B\x02\x02\u011E4\x03\x02\x02\x02\u011F\u0120\x07.\x02\x02\u0120" +
		"6\x03\x02\x02\x02\u0121\u0122\x07?\x02\x02\u01228\x03\x02\x02\x02\u0123" +
		"\u0124\x07A\x02\x02\u0124:\x03\x02\x02\x02\u0125\u0126\x07<\x02\x02\u0126" +
		"<\x03\x02\x02\x02\u0127\u0128\x07<\x02\x02\u0128\u0129\x07<\x02\x02\u0129" +
		">\x03\x02\x02\x02\u012A\u012B\x070\x02\x02\u012B@\x03\x02\x02\x02\u012C" +
		"\u012D\x07-\x02\x02\u012DB\x03\x02\x02\x02\u012E\u012F\x07/\x02\x02\u012F" +
		"D\x03\x02\x02\x02\u0130\u0131\x07\x80\x02\x02\u0131F\x03\x02\x02\x02\u0132" +
		"\u0133\x07#\x02\x02\u0133H\x03\x02\x02\x02\u0134\u0135\x07,\x02\x02\u0135" +
		"J\x03\x02\x02\x02\u0136\u0137\x071\x02\x02\u0137L\x03\x02\x02\x02\u0138" +
		"\u0139\x07\'\x02\x02\u0139N\x03\x02\x02\x02\u013A\u013B\x07`\x02\x02\u013B" +
		"P\x03\x02\x02\x02\u013C\u013D\x07%\x02\x02\u013DR\x03\x02\x02\x02\u013E" +
		"\u013F\x07>\x02\x02\u013FT\x03\x02\x02\x02\u0140\u0141\x07@\x02\x02\u0141" +
		"V\x03\x02\x02\x02\u0142\u0143\x07>\x02\x02\u0143\u0144\x07?\x02\x02\u0144" +
		"X\x03\x02\x02\x02\u0145\u0146\x07@\x02\x02\u0146\u0147\x07?\x02\x02\u0147" +
		"Z\x03\x02\x02\x02\u0148\u0149\x07?\x02\x02\u0149\u014A\x07?\x02\x02\u014A" +
		"\\\x03\x02\x02\x02\u014B\u014C\x07#\x02\x02\u014C\u014D\x07?\x02\x02\u014D" +
		"^\x03\x02\x02\x02\u014E\u014F\x07(\x02\x02\u014F\u0150\x07(\x02\x02\u0150" +
		"`\x03\x02\x02\x02\u0151\u0152\x07~\x02\x02\u0152\u0153\x07~\x02\x02\u0153" +
		"b\x03\x02\x02\x02\u0154\u0155\x07,\x02\x02\u0155\u0156\x07?\x02\x02\u0156" +
		"d\x03\x02\x02\x02\u0157\u0158\x071\x02\x02\u0158\u0159\x07?\x02\x02\u0159" +
		"f\x03\x02\x02\x02\u015A\u015B\x07\'\x02\x02\u015B\u015C\x07?\x02\x02\u015C" +
		"h\x03\x02\x02\x02\u015D\u015E\x07-\x02\x02\u015E\u015F\x07?\x02\x02\u015F" +
		"j\x03\x02\x02\x02\u0160\u0161\x07/\x02\x02\u0161\u0162\x07?\x02\x02\u0162" +
		"l\x03\x02\x02\x02\u0163\u0164\x07>\x02\x02\u0164\u0165\x07>\x02\x02\u0165" +
		"\u0166\x07?\x02\x02\u0166n\x03\x02\x02\x02\u0167\u0168\x07@\x02\x02\u0168" +
		"\u0169\x07@\x02\x02\u0169\u016A\x07?\x02\x02\u016Ap\x03\x02\x02\x02\u016B" +
		"\u016C\x07@\x02\x02\u016C\u016D\x07@\x02\x02\u016D\u016E\x07@\x02\x02" +
		"\u016E\u016F\x07?\x02\x02\u016Fr\x03\x02\x02\x02\u0170\u0171\x07(\x02" +
		"\x02\u0171\u0172\x07?\x02\x02\u0172t\x03\x02\x02\x02\u0173\u0174\x07`" +
		"\x02\x02\u0174\u0175\x07?\x02\x02\u0175v\x03\x02\x02\x02\u0176\u0177\x07" +
		"~\x02\x02\u0177\u0178\x07?\x02\x02\u0178x\x03\x02\x02\x02\u0179\u017A" +
		"\x07^\x02\x02\u017Az\x03\x02\x02\x02\u017B\u017C\x07~\x02\x02\u017C|\x03" +
		"\x02\x02\x02\u017D\u017E\x07a\x02\x02\u017E~\x03\x02\x02\x02\u017F\u0180" +
		"\x07<\x02\x02\u0180\u0181\x07?\x02\x02\u0181\x80\x03\x02\x02\x02\u0182" +
		"\u0183\x07<\x02\x02\u0183\u0184\x07<\x02\x02\u0184\u0185\x07?\x02\x02" +
		"\u0185\x82\x03\x02\x02\x02\u0186\u0187\x070\x02\x02\u0187\u0188\x070\x02" +
		"\x02\u0188\u0189\x070\x02\x02\u0189\x84\x03\x02\x02\x02\u018A\u018B\x07" +
		"p\x02\x02\u018B\u018C\x07w\x02\x02\u018C\u018D\x07n\x02\x02\u018D\u018E" +
		"\x07n\x02\x02\u018E\x86\x03\x02\x02\x02\u018F\u0190\x07v\x02\x02\u0190" +
		"\u0191\x07t\x02\x02\u0191\u0192\x07w\x02\x02\u0192\u0199\x07g\x02\x02" +
		"\u0193\u0194\x07h\x02\x02\u0194\u0195\x07c\x02\x02\u0195\u0196\x07n\x02" +
		"\x02\u0196\u0197\x07u\x02\x02\u0197\u0199\x07g\x02\x02\u0198\u018F\x03" +
		"\x02\x02\x02\u0198\u0193\x03\x02\x02\x02\u0199\x88\x03\x02\x02\x02\u019A" +
		"\u019B\x05\xA3R\x02\u019B\x8A\x03\x02\x02\x02\u019C\u019D\x05\xA3R\x02" +
		"\u019D\u019E\x070\x02\x02\u019E\u019F\x05\xA3R\x02\u019F\x8C\x03\x02\x02" +
		"\x02\u01A0\u01A4\x07)\x02\x02\u01A1\u01A3\x05\xA7T\x02\u01A2\u01A1\x03" +
		"\x02\x02\x02\u01A3\u01A6\x03\x02\x02\x02\u01A4\u01A2\x03\x02\x02\x02\u01A4" +
		"\u01A5\x03\x02\x02\x02\u01A5\u01A7\x03\x02\x02\x02\u01A6\u01A4\x03\x02" +
		"\x02\x02\u01A7\u01A8\x07)\x02\x02\u01A8\x8E\x03\x02\x02\x02\u01A9\u01AA" +
		"\x07h\x02\x02\u01AA\u01AB\x07)\x02\x02\u01AB\u01AF\x03\x02\x02\x02\u01AC" +
		"\u01AE\x05\xA7T\x02\u01AD\u01AC\x03\x02\x02\x02\u01AE\u01B1\x03\x02\x02" +
		"\x02\u01AF\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B2" +
		"\x03\x02\x02\x02\u01B1\u01AF\x03\x02\x02\x02\u01B2\u01B3\x07}\x02\x02" +
		"\u01B3\x90\x03\x02\x02\x02\u01B4\u01B8\x07\x7F\x02\x02\u01B5\u01B7\x05" +
		"\xA7T\x02\u01B6\u01B5\x03\x02\x02\x02\u01B7\u01BA\x03\x02\x02\x02\u01B8" +
		"\u01B6\x03\x02\x02\x02\u01B8\u01B9\x03\x02\x02\x02\u01B9\u01BB\x03\x02" +
		"\x02\x02\u01BA\u01B8\x03\x02\x02\x02\u01BB\u01BC\x07}\x02\x02\u01BC\x92" +
		"\x03\x02\x02\x02\u01BD\u01C1\x07\x7F\x02\x02\u01BE\u01C0\x05\xA7T\x02" +
		"\u01BF\u01BE\x03\x02\x02\x02\u01C0\u01C3\x03\x02\x02\x02\u01C1\u01BF\x03" +
		"\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C4\x03\x02\x02\x02\u01C3" +
		"\u01C1\x03\x02\x02\x02\u01C4\u01C5\x07)\x02\x02\u01C5\x94\x03\x02\x02" +
		"\x02\u01C6\u01CA\t\x03\x02\x02\u01C7\u01C9\t\x04\x02\x02\u01C8\u01C7\x03" +
		"\x02\x02\x02\u01C9\u01CC\x03\x02\x02\x02\u01CA\u01C8\x03\x02\x02\x02\u01CA" +
		"\u01CB\x03\x02\x02\x02\u01CB\x96\x03\x02\x02\x02\u01CC\u01CA\x03\x02\x02" +
		"\x02\u01CD\u01D2\x05\x9BN\x02\u01CE\u01D2\x05\x9FP\x02\u01CF\u01D2\x05" +
		"\x9DO\x02\u01D0\u01D2\x05\xA1Q\x02\u01D1\u01CD\x03\x02\x02\x02\u01D1\u01CE" +
		"\x03\x02\x02\x02\u01D1\u01CF\x03\x02\x02\x02\u01D1\u01D0\x03\x02\x02\x02" +
		"\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D4\bL\t\x02\u01D4\x98\x03\x02\x02" +
		"\x02\u01D5\u01D6\v\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8" +
		"\bM\n\x02\u01D8\x9A\x03\x02\x02\x02\u01D9\u01DB\t\x05\x02\x02\u01DA\u01D9" +
		"\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DA\x03\x02\x02\x02" +
		"\u01DC\u01DD\x03\x02\x02\x02\u01DD\x9C\x03\x02\x02\x02\u01DE\u01DF\x07" +
		"1\x02\x02\u01DF\u01E0\x07,\x02\x02\u01E0\u01E4\x03\x02\x02\x02\u01E1\u01E3" +
		"\v\x02\x02\x02\u01E2\u01E1\x03\x02\x02\x02\u01E3\u01E6\x03\x02\x02\x02" +
		"\u01E4\u01E5\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E5\u01E7\x03" +
		"\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7\u01E8\x07,\x02\x02\u01E8" +
		"\u01E9\x071\x02\x02\u01E9\x9E\x03\x02\x02\x02\u01EA\u01EB\x071\x02\x02" +
		"\u01EB\u01EC\x071\x02\x02\u01EC\u01F0\x03\x02\x02\x02\u01ED\u01EF\n\x02" +
		"\x02\x02\u01EE\u01ED\x03\x02\x02\x02\u01EF\u01F2\x03\x02\x02\x02\u01F0" +
		"\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\xA0\x03\x02\x02" +
		"\x02\u01F2\u01F0\x03\x02\x02\x02\u01F3\u01F5\x07^\x02\x02\u01F4\u01F6" +
		"\x05\x9BN\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02" +
		"\u01F6\u01FC\x03\x02\x02\x02\u01F7\u01F9\x07\x0F\x02\x02\u01F8\u01F7\x03" +
		"\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA" +
		"\u01FD\x07\f\x02\x02\u01FB\u01FD\x07\x0F\x02\x02\u01FC\u01F8\x03\x02\x02" +
		"\x02\u01FC\u01FB\x03\x02\x02\x02\u01FD\xA2\x03\x02\x02\x02\u01FE\u0200" +
		"\x05\xA5S\x02\u01FF\u01FE\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02" +
		"\u0201\u01FF\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u020B\x03" +
		"\x02\x02\x02\u0203\u0205\x07a\x02\x02\u0204\u0206\x05\xA5S\x02\u0205\u0204" +
		"\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207\u0205\x03\x02\x02\x02" +
		"\u0207\u0208\x03\x02\x02\x02\u0208\u020A\x03\x02\x02\x02\u0209\u0203\x03" +
		"\x02\x02\x02\u020A\u020D\x03\x02\x02\x02\u020B\u0209\x03\x02\x02\x02\u020B" +
		"\u020C\x03\x02\x02\x02\u020C\xA4\x03\x02\x02\x02\u020D\u020B\x03\x02\x02" +
		"\x02\u020E\u020F\t\x06\x02\x02\u020F\xA6\x03\x02\x02\x02\u0210\u0214\n" +
		"\x07\x02\x02\u0211\u0212\x07^\x02\x02\u0212\u0214\t\b\x02\x02\u0213\u0210" +
		"\x03\x02\x02\x02\u0213\u0211\x03\x02\x02\x02\u0214\xA8\x03\x02\x02\x02" +
		"\x19\x02\xE4\xE9\xED\xF0\xF2\u0198\u01A4\u01AF\u01B8\u01C1\u01CA\u01D1" +
		"\u01DC\u01E4\u01F0\u01F5\u01F8\u01FC\u0201\u0207\u020B\u0213\v\x03\r\x02" +
		"\x03\x14\x03\x03\x15\x04\x03\x16\x05\x03\x17\x06\x03\x18\x07\x03\x19\b" +
		"\b\x02\x02\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

