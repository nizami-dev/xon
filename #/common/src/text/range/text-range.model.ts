import {Boolean2, commonPackageType, TextPosition} from '#common';
import {Model} from '#typing';

export type TextRange = Model & {
  start: TextPosition;
  stop: TextPosition;

  contains(position: TextPosition): Boolean2;
  contains(range: TextRange): Boolean2;
  union(other: TextRange): TextRange;
  clone(): TextRange;
  equals(other: TextRange): Boolean2;
};

export const $TextRange = commonPackageType<TextRange>('TextRange');