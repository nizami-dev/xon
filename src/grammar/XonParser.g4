parser grammar XonParser
    ;

options {
    tokenVocab = XonLexer;
}

program:  /* imports*?  */ statement*;

imports:      importPath ':' ('*' 'as' alias = ID | importMember (',' importMember)*);
importPath:   '.'* (ID | StringLiteral) ('.' (ID | StringLiteral))*;
importMember: name = ID 'as' alias = ID | name = ID;

// type definitions
definition
    : 'class' ID ':' LineBreak INDENT (classItem LineBreak)+ DEDENT
    | 'enum' ID ':' LineBreak INDENT (enumItem LineBreak)+ DEDENT
    | 'scheme' ID ':' LineBreak INDENT (schemeItem LineBreak)+ DEDENT
    ;

classItem
    : name = ID ':' type = ID? ('=' value = expression)
    | ID (scopeArgument (',' scopeArgument)*)? body
    ;

enumItem: ID ('=' DecimalLiteral)?;

schemeItem
    : name = ID ':' type = ID? ('=' value = expression)
    | name = ID ':' LineBreak INDENT schemeItem+ DEDENT
    ;

// statements
statement
    : Preprocessor                                                                    # preprocessorStatement
    | 'if' expression body ('else' ('if' expression)? body)?                          # ifStatement
    | 'loop' ((value = ID (',' key = ID?)? (',' index = ID)? 'in')? expression)? body # loopStatement
    | name = ID ':' (type = ID | type = ID? '=' value = expression)                   # declarationStatement
    | ID '=' expression                                                               # assignmentStatement
    | ID (scopeArgument (',' scopeArgument)*)? body                                   # scopeStatement
    | 'continue'                                                                      # continueStatement
    | 'break'                                                                         # breakStatement
    | 'return' expression?                                                            # returnStatement
    | expression                                                                      # expressionStatement
    | LineBreak                                                                       # LineBreakStatement
    ;

scopeArgument: name = ID ':' type = ID ('=' value = expression)? (':' condition = expression)?;
body:          ':' (statement | LineBreak INDENT statement+ DEDENT);

// expressions
expression
    : object = expression '(' (args += expression (',' args += expression)*)? ')'                     # functionExpression
    | value = expression '[' index = expression ']'                                                   # indexExpression
    | value = expression '[' startPos = expression ':' end = expression? (':' step = expression)? ']' # sliceExpression
    | expression '?'? '.' ID                                                                          # memberExpression
    | base = expression '^' exponent = expression                                                     # powExpression
    | '+' expression                                                                                  # unaryPlusExpression
    | '-' expression                                                                                  # unaryMinusExpression
    | '~' expression                                                                                  # bitNotExpression
    | '!' expression                                                                                  # logicalNotExpression
    | left = expression operation = ('*' | '/' | '%') right = expression                              # mulDivModExpression
    | left = expression operation = ('+' | '-') right = expression                                    # addSubExpression
    | left = expression operation = ('<<' | '>>' | '>>>') right = expression                          # bitShiftExpression
    | left = expression operation = ('<' | '<=' | '>=' | '>') right = expression                      # relationalExpression
    | left = expression operation = ('==' | '!=') right = expression                                  # equalityExpression
    | left = expression 'and' right = expression                                                      # bitAndExpression
    | left = expression 'xor' right = expression                                                      # bitXorExpression
    | left = expression 'or' right = expression                                                       # bitOrExpression
    | left = expression '&&' right = expression                                                       # logicalAndExpression
    | left = expression '||' right = expression                                                       # logicalOrExpression
    | ID                                                                                              # idExpression
    | literal                                                                                         # literalExpression
    | StringFormat                                                                                    # stringFormatExpression
    | '[' (items += expression (',' items += expression)*)? ']'                                       # arrayExpression
    | '[' startPos = expression ':' end = expression (':' step = expression)? ']'                     # rangeExpression
    | '{' (ID ':' expression (',' ID ':' expression)*)? '}'                                           # objectExpression
    | '(' expression ')'                                                                              # parenthesizedExpression
    | left = expression '|' (ID ':')? right = expression                                              # pipeExpression
    | '\\' (ID (',' ID)* ':')? expression                                                             # lambdaExpression
    ;

literal
    : DecimalLiteral # decimalLiteral
    | FloatLiteral   # floatLiteral
    | BooleanLiteral # booleanLiteral
    | StringLiteral  # stringLiteral
    ;