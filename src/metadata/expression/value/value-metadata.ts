import { Any2 } from '../../../lib/core';
import { Metadata } from '../../metadata';
import { TypeMetadata } from '../type/type-metadata';

export abstract class ValueMetadata extends Metadata {
  type(): TypeMetadata | null {
    throw new Error('Not implemented');
  }

  eval(): Any2 {
    throw new Error('Not implemented');
  }
}
