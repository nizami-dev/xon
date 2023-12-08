/* eslint-disable func-names */
/* eslint-disable no-extend-native */
import { Char, Number2, String2 } from './lib/core';

// Array
Array.prototype.takeWhile = function takeWhile<T>(
  predicate: (value: T, index: number) => unknown,
  startIndex = 0,
): T[] {
  for (let i = startIndex; i < this.length; i++) {
    if (!predicate(this[i], i)) {
      return this.slice(startIndex, i);
    }
  }

  return this.slice(startIndex, this.length);
};

Array.prototype.findLast = function <T>(predicate: (value: T, index: number, obj: T[]) => unknown): T | null {
  const index = this.findLastIndex(predicate);

  if (index < 0) {
    return null;
  }

  return this[index];
};

Array.prototype.firstOrNull = function <T>(): T | null {
  return this[0] ?? null;
};

Array.prototype.lastOrNull = function <T>(): T | null {
  return this[this.length - 1] ?? null;
};

Array.prototype.first = function <T>(): T {
  return this[0];
};

Array.prototype.last = function <T>(): T {
  return this[this.length - 1];
};

Array.prototype.removeFirst = function <T>(): T[] {
  this.splice(0, 1);

  return this;
};

Array.prototype.removeLast = function <T>(): T[] {
  this.splice(-1, 1);

  return this;
};

// Array aggregators
Array.prototype.sum = function <T>(select: (value: T, index: number, obj: T[]) => Number2): Number2 {
  return this.reduce((sum, val, index, array) => sum + select(val, index, array), 0);
};

// String
String.prototype.takeWhile = function takeWhile(
  predicate: (value: Char, index: number) => unknown,
  startIndex = 0,
): String2 {
  for (let i = startIndex; i < this.length; i++) {
    if (!predicate(this[i], i)) {
      return this.slice(startIndex, i);
    }
  }

  return this.slice(startIndex, this.length);
};

String.prototype.margin = function margin(delimiter?: String2): String2 {
  throw new Error('Not implemented');
};

String.prototype.toCharCodes = function toCharCodes(): Uint8Array {
  const utf8Encoder = new TextEncoder();

  return utf8Encoder.encode(this as string);
  // return Array.from(this).map((x) => x.charCodeAt(0));
};
