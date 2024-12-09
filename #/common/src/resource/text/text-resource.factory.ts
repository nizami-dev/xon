import {
  $TextResource,
  Boolean2,
  Nothing,
  Resource,
  String2,
  Text,
  TextRange,
  TextReference,
  TextResource,
  newTextData,
  newTextReference,
  nothing,
} from '#common';
import {readFileSync, statSync} from 'node:fs';

export function newTextResource(location: Text | Nothing, data: Text): TextResource {
  return {
    $: $TextResource,
    location,
    data,

    reference(range: TextRange): TextReference {
      return newTextReference(this, range);
    },

    equals(other: Resource<Text>): Boolean2 {
      if (this.location) {
        return this.location === other.location;
      }

      return this.data === other.data;
    },

    // clone(): TextResource {
    //   return newTextResourceFromData(this.location, this.data);
    // },

    toString(): String2 {
      return `{ location: ${this.location}, data: ${this.data}}`;
    },
  };
}

export function newTextResourceFromLocation(location: Text): TextResource | Nothing {
  try {
    if (!statSync(location.toString()).isFile()) {
      return nothing;
    }

    const data = newTextData(readFileSync(location.toString()).toString());

    return newTextResource(location, data);
  } catch (error) {
    return nothing;
  }
}