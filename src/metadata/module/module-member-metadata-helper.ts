import { ClassTypeSourceMemberTree } from '../../tree/source/source-member/class-type-source-member/class-type-source-member-tree';
import { MethodSourceMemberTree } from '../../tree/source/source-member/method-source-member/method-source-member-tree';
import { SourceMemberTree } from '../../tree/source/source-member/source-member.tree';
import { ModuleMemberMetadata } from './module-member-metadata';
import { ClassTypeMetadata } from '../type/id-type/class-type/class-type-metadata';
import { MethodModuleMemberMetadata } from './module-member/method-module-member-metadata';

export function getModuleMemberMetadata(
  sourcePath: string,
  tree: SourceMemberTree,
): ModuleMemberMetadata {
  if (tree === undefined) return undefined;

  if (tree instanceof ClassTypeSourceMemberTree)
    return new ClassTypeMetadata(sourcePath, tree.classType);
  if (tree instanceof MethodSourceMemberTree)
    return new MethodModuleMemberMetadata(sourcePath, tree.method);

  throw Error(`ModuleMember metadata not found for "${tree.constructor.name}"`);
}
