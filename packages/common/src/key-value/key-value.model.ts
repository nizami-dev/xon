import {Anything_V2, Boolean2, commonPackageType, String2} from '#common';
import {$Model, Model} from '#typing';

export type KeyValue<K extends Model = Model, V extends Anything_V2 = Anything_V2> = Model & {
  key: K;
  value: V;

  toString(): String2;
  equals(other: KeyValue<K, V>): Boolean2;
  equals(other: KeyValue<K, V>, onlyKeyCompare: Boolean2): Boolean2;
};

export const $KeyValue = <T extends Model, V extends Model>($T = $Model, $V = $Model) =>
  commonPackageType<KeyValue<T, V>>('KeyValue', null, [$T, $V]);