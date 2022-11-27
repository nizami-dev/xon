import { lstatSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { Number2, String2 } from '~/lib/core';

export class Source {
  constructor(public text: String2, public location: String2 | null) {}

  lineText(line: Number2): String2 {
    return this.text.split('\n')[line];
  }

  static fromText = fromText;
  static fromPath = fromPath;
}

function fromText(text: String2, location: String2 | null): Source {
  return new Source(text, location);
}

function fromPath(path: String2): Source {
  const fullPath = resolve(path);
  const stats = lstatSync(fullPath);

  if (!stats.isFile()) {
    throw new Error(`Not a file: ${fullPath}`);
  }
  const text = readFileSync(fullPath).toString();

  return new Source(text, path);
}