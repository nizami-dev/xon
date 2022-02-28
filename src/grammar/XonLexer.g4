lexer grammar XonLexer;

channels {
    ERROR,
    WHITESPACE,
    COMMENT_CHANNEL,
}

options {
    superClass = XonLexerBase;
}

tokens {
    INDENT,
    DEDENT
}

@lexer::header { 
    import { XonLexerBase } from "./xon-lexer-base";
}

OPEN_BRACKET:  '[' {this.opened++;};
CLOSE_BRACKET: ']' {this.opened--;};
OPEN_PAREN:    '(' {this.opened++;};
CLOSE_PAREN:   ')' {this.opened--;};
OPEN_BRACE:    '{' {this.opened++;};
CLOSE_BRACE:   '}' {this.opened--;};

ACTUAL: 'actual';
BREAK:  'break';
DO:     'do';
ELSE:   'else';
EXPECT: 'expect';
EXPORT: 'export';
FOR:    'for';
IF:     'if';
IN:     'in';
IMPORT: 'import';
RETURN: 'return';
SET:    'set';
WHILE:  'while';
NOT:    'not';

ASSIGN:        '=';
COLON:         ':';
COMMA:         ',';
DOT:           '.';
GENERIC_LEFT:  '<|';
GENERIC_RIGHT: '|>';
HASH:          '#';
QUESTION:      '?';

FLOAT_LITERAL:
    Radix AlphabetNumber '.' AlphabetNumber
    | DigitNumber '.' DigitNumber
    ;
INTEGER_LITERAL: Radix AlphabetNumber | DigitNumber;
REGEX_LITERAL:   '`' (~[`] | '\\' [`\\])* '`';
STRING_LITERAL:  '\'' (~['] | '\\' ['\\bfnrtv])* '\'';

PREPROCESSOR: '#{' .*? '}';

ID:       [_a-zA-Z] [_a-zA-Z0-9]*;
OPERATOR: [+-^*%] | '..' | '...' | '<=' | '>=' | '==' | '!=';

NL: ({this.atStartOfInput()}? WS | ( '\r'? '\n' | '\r') WS?) {this.handleLineBreak()}
    ;
WS:            [ \t]+                          -> channel(WHITESPACE);
BLOCK_COMMENT: '/*' (BLOCK_COMMENT | .)*? '*/' -> channel(COMMENT_CHANNEL);
LINE_COMMENT:  '--' ~[\r\n]*                   -> channel(COMMENT_CHANNEL);
UNEXPECTED:    .                               -> channel(ERROR);

fragment Radix:          [0-9][0-9]? [xX];
fragment DigitNumber:    [0-9] ('_' | [0-9])*;
fragment AlphabetNumber: [0-9a-zA-Z] ('_' | [0-9a-zA-Z])*;
