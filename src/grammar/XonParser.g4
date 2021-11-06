parser grammar XonParser;

options {
    tokenVocab = XonLexer;
}

source:       (library | export | NL)* ( sourceMember | NL)*;
sourceMember: definition # definitionSourceMember | test # testSourceMember;

export: EXPORT libraryPath;
library:
    IMPORT libraryPath (
        AS alias = LOWER_ID
        | ':' libraryMember (',' libraryMember)*
    )?
    ;
libraryPath:     points += '.'* libraryPathPart ('.' libraryPathPart)*;
libraryPathPart: '@'? LOWER_ID;
libraryMember:   name = id | name = id AS alias = id;

definition:
    name = UPPER_ID genericParameters? parameters? (IS type)? (
        ':' NL+ INDENT ( classMember | NL)+ DEDENT
    )? # classDefinition
    ;

classMember:
    attribute                              # attributeClassMember
    | modifier* name = operator type body? # operatorClassMember
    ;

test: TEST expression? body?;

statement:
    FOR (value = LOWER_ID (',' index = LOWER_ID)? IN)? expression body # forStatement
    | WHILE expression body                                            # whileStatement
    | DO body WHILE expression                                         # doWhileStatement
    | IF expression thenBody = body (ELSE elseBody = body)?            # ifStatement
    | BREAK                                                            # breakStatement
    | RETURN expression?                                               # returnStatement
    | ACTUAL actual = expression NL+ EXPECT expect = expression        # assertStatement
    | PREPROCESSOR                                                     # preprocessorStatement
    | expression                                                       # expressionStatement
    | attribute                                                        # attributeStatement
    | assignment                                                       # assignmentStatement
    ;

attribute: modifier* name = LOWER_ID (type | body | type body);

assignment:
    name = LOWER_ID '=' expression                                      # idAssignment
    | '[' names += LOWER_ID (',' names += LOWER_ID)* ']' '=' expression # arrayAssignment
    | '{' names += LOWER_ID (',' names += LOWER_ID)* '}' '=' expression # objectAssignment
    | '$' name = LOWER_ID '=' expression                                # thisMemberAssignment
    | expression '.' name = LOWER_ID '=' expression                     # memberAssignment
    | expression '[' expression ']' '=' expression                      # indexAssignment
    ;

expression:
    name = LOWER_ID                                                     # idExpression
    | name = '$'                                                        # instanceExpression
    | '$' name = LOWER_ID                                               # instanceMemberExpression
    | name = UPPER_ID genericArguments? arguments                       # instantiationExpression
    | literal                                                           # literalExpression
    | expression genericArguments? arguments                            # callExpression
    | expression '[' expression ']'                                     # indexExpression
    | '(' expression ')'                                                # parenthesizedExpression
    | '[' (expression (',' expression)*)? ']'                           # arrayExpression
    | expression '?'? '.' name = LOWER_ID                               # memberExpression
    | op = ('!' | '-' | '+') expression                                 # prefixExpression
    | left = expression op += '^' right = expression                    # powExpression
    | left = expression op += ('*' | '/' | '%') right = expression      # mulDivModExpression
    | left = expression op += ('+' | '-') right = expression            # addSubExpression
    | left = expression op += '.' op += '.' right = expression          # rangeExpression
    | left = expression op += '?' right = expression                    # elvisExpression
    | left = expression op += ('<' | '>') op += '='? right = expression # relationalExpression
    | left = expression op += ('=' | '!') op += '=' right = expression  # equalityExpression
    | left = expression op += '&' op += '&' right = expression          # conjunctionExpression
    | left = expression op += '|' op += '|' right = expression          # disjunctionExpression
    | expression '|' name = LOWER_ID ':' expression                     # pipeExpression
    | '\\' ((parameter (',' parameter)*)? ':')? expression              # lambdaExpression
    ;

type:
    name = UPPER_ID genericArguments?             # idType
    | literal                                     # literalType
    | type '?'                                    # nullableType
    | type '[' size = INTEGER_LITERAL? ']'        # arrayType
    | type '&' type                               # intersectionType
    | '(' type '&' type ')'                       # intersectionParenthesizedType
    | type '|' type                               # unionType
    | '(' type '|' type ')'                       # unionParenthesizedType
    | genericParameters? parameters type?         # functionType
    | '(' genericParameters? parameters type? ')' # functionParenthesizedType
    ;

literal:
    NULL_LITERAL      # nullLiteral
    | BOOLEAN_LITERAL # booleanLiteral
    | INTEGER_LITERAL # integerLiteral
    | FLOAT_LITERAL   # floatLiteral
    | CHAR_LITERAL    # charLiteral
    | STRING_LITERAL  # stringLiteral
    ;

operator:
    (
        '~'
        | '!'
        | '^'
        | '*'
        | '/'
        | '%'
        | '+'
        | '-'
        | '<'
        | '>'
        | '='
        | '&'
        | '|'
        | '.'
    )+
    ;

modifier: INFIX | PREFIX | POSTFIX;

id: UPPER_ID | LOWER_ID;

parameter:  name = LOWER_ID type? ('#' meta = UPPER_ID)?;
parameters: '(' (parameter (',' parameter)*)? ')';

argument:  expression;
arguments: '(' (argument (',' argument)*)? ')';

genericArguments:  '<' (type (',' type)*)? '>';
genericParameters: '<' names += UPPER_ID (',' names += UPPER_ID)* '>';

body: ':' statement? | ':' NL+ INDENT (statement | NL)* DEDENT;
