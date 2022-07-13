parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

source: NL | NL? (statement nl += NL)* statement NL?;

statement
    : value = LINE_COMMENT                                                 # commentStatement
    | EXPORT path = expression                                             # exportStatement
    | FOR (value = parameter (',' index = parameter)? ID)? expression body # forStatement
    | WHILE expression body                                                # whileStatement
    | DO body WHILE expression                                             # doWhileStatement
    | IF expression thenBody = body NL* (ELSE elseBody = body)?            # ifStatement
    | BREAK                                                                # breakStatement
    | CONTINUE                                                             # continueStatement
    | RETURN expression?                                                   # returnStatement
    | ACTUAL actual = expression NL* EXPECT expect = expression            # assertStatement
    | expression                                                           # expressionStatement
    | parameter                                                            # declarationStatement
    ;

expression
    : PREPROCESSOR                                                                       # preprocessorExpression
    | '(' expression ')'                                                                 # groupExpression
    | arguments                                                                          # arrayExpression
    | expression QUESTION                                                                # nullableExpression
    | expression DOT name = ID?                                                          # memberExpression
    | expression arguments                                                               # invokeExpression
    | left = expression op = (AS | IS | AND | OR | OP | LESS | GREAT) right = expression # infixExpression
    | method                                                                             # methodExpression
    | op = (OP | IMPORT) expression                                                      # prefixExpression
    | name = ID                                                                          # idExpression
    | literal                                                                            # literalExpression
    ;

literal
    : INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | STRING_LITERAL  # stringLiteral
    ;

method
    : params = parameters valueType? LAMBDA expression
    | generics = parameters params = parameters valueType? LAMBDA expression
    ;

parameter
    : destructure = parameters valueType? valueBody?
    | modifier = ID? name = (ID | OP | LESS | GREAT) params = parameters valueType? valueBody?
    | modifier = ID? name = (ID | OP | LESS | GREAT) generics = parameters params = parameters valueType? valueBody?
    | modifier = ID? name = (ID | OP | LESS | GREAT) valueType? valueBody?
    ;
valueBody: ASSIGN value = expression? | body;
valueType: COLON type = expression?;

parameters
    : open = ('<' | '(' | '[' | '{') (parameter (',' parameter)* ','?)? close = (
        '}'
        | ']'
        | ')'
        | '>'
    )
    ;
argument: (name = ID ASSIGN)? expression;
arguments
    : open = ('<' | '(' | '[' | '{') (argument (',' argument)* ','?)? close = (
        '}'
        | ']'
        | ')'
        | '>'
    )
    ;

body: NL INDENT source DEDENT;
