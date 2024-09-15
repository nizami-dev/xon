import {Boolean2} from '#common';
import {$, TextData, TextRange, TextResource} from '#core';

export interface TextResourceRange {
  $: $.TextResourceRange;
  resource: TextResource;
  range: TextRange;

  equals(reference: TextResourceRange): Boolean2;
  text(): TextData;
}

export function textResourceRange(resource: TextResource, range: TextRange): TextResourceRange {
  return {
    $: $.TextResourceRange,
    resource,
    range,

    equals(other: TextResourceRange): Boolean2 {
      return this.resource.equals(other.resource) && this.range.equals(other.range);
    },

    text(): TextData {
      return this.resource.data.slice(this.range);
    },
  };
}