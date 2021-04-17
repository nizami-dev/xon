parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

program: (library | statement | definition | NL)*;

library:       libraryPath ':' libraryMember (',' libraryMember)*;
libraryPath:   id ('-' id)* '/' id ('-' id)*;
libraryMember: name = DEFINITION_ID (AS alias = DEFINITION_ID)?;

definition:
    DEFINITION_ID declaredGenerics? parameters? (IS type)? ':' NL INDENT (
        member
        | NL
    )+ DEDENT
    ;

member:
    id type ('=' expression)?                    # propertyMember
    | 'init' body                                # initMember
    | operator parameters type body?             # operatorMember
    | id declaredGenerics? parameters type body? # methodMember
    ;

statement:
    LOOP ((value = id (',' index = id)? IN)? expression)? body # loopStatement
    | IF expression body (ELSE body)?                          # ifStatement
    | BREAK                                                    # breakStatement
    | RETURN expression?                                       # returnStatement
    | id type? '=' expression                                  # assignmentStatement
    | expression                                               # expressionStatement
    | PREPROCESSOR                                             # preprocessorStatement
    ;

expression:
    '@'                                                                   # instanceExpression
    | DEFINITION_ID generics? arguments                                   # instantiationExpression
    | id                                                                  # idExpression
    | literal                                                             # literalExpression
    | expression '.' id                                                   # memberExpression
    | expression generics? arguments                                      # methodExpression
    | expression '[' expression ']'                                       # indexExpression
    | left = expression op = '^' right = expression                       # powExpression
    | '-' expression                                                      # negativeExpression
    | NOT expression                                                      # logicalNotExpression
    | left = expression op = ('*' | '/' | '%') right = expression         # mulDivModExpression
    | left = expression op = ('+' | '-') right = expression               # addSubExpression
    | left = expression op = '..' right = expression                      # rangeExpression
    | left = expression op = ('<' | '<=' | '>=' | '>') right = expression # relationalExpression
    | left = expression op = ('==' | '!=') right = expression             # equalityExpression
    | left = expression AND right = expression                            # logicalAndExpression
    | left = expression OR right = expression                             # logicalOrExpression
    | '[' (expression (',' expression)*)? ']'                             # arrayExpression
    | '(' expression ')'                                                  # parenthesizedExpression
    // |  id+ ':')? expression                         # lambdaExpression
    | '\\' (id (',' id)* ':')? expression # lambdaExpression
    ;

literal:
    NULL_LITERAL      # nullLiteral
    | BOOLEAN_LITERAL # booleanLiteral
    | INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | CHAR_LITERAL    # charLiteral
    | STRING_LITERAL  # stringLiteral
    ;

type:
    DEFINITION_ID generics?                                             # plainType
    | literal                                                           # literalType
    | type '?'                                                          # nullableType
    | type '[' ']'                                                      # arrayType
    | type '|' type                                                     # unionType
    | '(' (params += type (',' params += type)*)? ')' returnType = type # functionType
    | '(' type ')'                                                      # parenthesizedType
    ;

operator:
    '^'
    | '*'
    | '/'
    | '%'
    | '+'
    | '-'
    | '<'
    | '>'
    | '=='
    | '&&'
    | '||'
    | '^^'
    | '..'
    ;

id:               ID;
parameter:        name = id type ('#' meta = DEFINITION_ID)?;
parameters:       '(' (parameter (',' parameter)*)? ')';
argument:         (id '=')? expression;
arguments:        '(' (argument (',' argument)*)? ')';
generics:         '<' type (',' type)* '>';
declaredGenerics: '<' DEFINITION_ID (',' DEFINITION_ID)* '>';
body:             ':' statement | ':' NL INDENT (statement | NL)+ DEDENT;
