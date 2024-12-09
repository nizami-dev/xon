import {$Char, $TextData, ArrayData, Boolean2, Char, newArrayData, String2, TextData} from '#common';
import {is} from '#typing';

const UPPER_A_CODE = 'A'.charCodeAt(0);
const UPPER_Z_CODE = 'Z'.charCodeAt(0);
const LOWER_A_CODE = 'a'.charCodeAt(0);
const LOWER_Z_CODE = 'z'.charCodeAt(0);
const DIGIT_0_CODE = '0'.charCodeAt(0);
const DIGIT_9_CODE = '9'.charCodeAt(0);

export function newChar(charString: String2): Char {
  return {
    $: $Char,
    _string: charString,

    isUpperLetter(): Boolean2 {
      const char = this._string.charCodeAt(0);

      return char >= UPPER_A_CODE && char <= UPPER_Z_CODE;
    },

    isLowerLetter(): Boolean2 {
      const char = this._string.charCodeAt(0);

      return char >= LOWER_A_CODE && char <= LOWER_Z_CODE;
    },

    isLetter(): Boolean2 {
      const char = this._string.charCodeAt(0);

      return (char >= UPPER_A_CODE && char <= UPPER_Z_CODE) || (char >= LOWER_A_CODE && char <= LOWER_Z_CODE);
    },

    isDigit(): Boolean2 {
      const char = this._string.charCodeAt(0);

      return char >= DIGIT_0_CODE && char <= DIGIT_9_CODE;
    },

    isLetterOrDigit(): Boolean2 {
      const char = this._string.charCodeAt(0);

      return (
        (char >= DIGIT_0_CODE && char <= DIGIT_9_CODE) ||
        (char >= UPPER_A_CODE && char <= UPPER_Z_CODE) ||
        (char >= LOWER_A_CODE && char <= LOWER_Z_CODE)
      );
    },

    equals(other: Char | TextData | String2): Boolean2 {
      if (typeof other === 'string') {
        return this._string === other;
      }

      if (is(other, $TextData)) {
        return this._string === other.toString();
      }

      return this._string === other._string;
    },

    toString(): String2 {
      return this._string;
    },
  };
}

export function stringToCharArray(string: String2): ArrayData<Char> {
  const characters = string.match(/.|\s/gu)?.map((x) => newChar(x)) ?? [];

  return newArrayData(characters);
}
