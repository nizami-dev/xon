import { Integer } from '~/lib/core';

export interface SyntaxNode extends Node {}

export interface Node {
  $: NodeType;
  start: Integer;
  stop: Integer;
}

export enum NodeType {
  HIDDEN = 'HIDDEN',
  COMMENT = 'COMMENT',
  NL = 'NL',
  WHITESPACE = 'WHITESPACE',
  JOINING = 'JOINING',

  UNKNOWN = 'UNKNOWN',
  STATEMENT = 'STATEMENT',

  ID = 'ID',
  STRING = 'STRING',
  GROUP = 'GROUP',
  ITEM = 'ITEM',
  INTEGER = 'INTEGER',
  OPERATOR = 'OPERATOR',
  MODIFIER = 'MODIFIER',
  MODIFIER_ID = 'MODIFIER_ID',
  KEYWORD = 'KEYWORD',
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  COMMA = 'COMMA',

  BODY = 'BODY',
  INFIX = 'INFIX',
  INVOKE = 'INVOKE',
  POSTFIX = 'POSTFIX',
  PREFIX = 'PREFIX',
  FLOAT = 'FLOAT',
  MEMBER = 'MEMBER',
  DECLARATION = 'DECLARATION',
  // ID_DECLARATION = 'ID_DECLARATION',
  // FUNCTION_DECLARATION = 'FUNCTION_DECLARATION',
  // LAMBDA_DECLARATION = 'LAMBDA_DECLARATION',

  // DECLARATION = 'DECLARATION',
  // FUNCTION_VALUE_DECLARATION = 'FUNCTION_VALUE_DECLARATION',
  // FUNCTION_BODY_DECLARATION = 'FUNCTION_BODY_DECLARATION',
  // LAMBDA_VALUE_DECLARATION = 'LAMBDA_VALUE_DECLARATION',
  // LAMBDA_BODY_DECLARATION = 'LAMBDA_BODY_DECLARATION',
  TYPE = 'TYPE',
  VALUE = 'VALUE',
}

export function is<T extends Node = Node>(node: Node | null | undefined, nodeType: NodeType): node is T {
  return node?.$ === nodeType;
}
