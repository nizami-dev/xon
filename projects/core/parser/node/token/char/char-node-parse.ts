import {Integer, Nothing, nothing} from '../../../../lib/core';
import {CHAR_QUOTE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {CharNode, charNode} from './char-node';

export function charNodeParse(context: SyntaxContext, index: Integer): CharNode | Nothing {
  const {resource, position} = context;

  if (resource.data[position.index] !== CHAR_QUOTE) {
    return nothing;
  }

  const nextQuoteIndex = resource.data.indexOf(CHAR_QUOTE, position.index + 1);

  const endSlice = nextQuoteIndex < 0 ? resource.data.length : nextQuoteIndex + 1;
  const text = resource.data.slice(position.index, endSlice);
  const range = context.getRange(text.length, false);

  return charNode(range, text);
}