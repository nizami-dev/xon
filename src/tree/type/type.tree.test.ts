import { PropertyClassMemberTree } from '../definition/class-definition/class-member/property-class-member/property-class-member-tree';
import { parseClassMember } from '../parse';

test('1', () => {
  const code = 'a ((String ) Integer) []';
  const tree = parseClassMember<PropertyClassMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyClassMemberTree);

  expect(tree.name).toBe('a');
  expect(tree.type.toString()).toBe('((String) Integer)[]');
});

test('2', () => {
  const code = 'a ((String | null ) Integer |  "hello") []';
  const tree = parseClassMember<PropertyClassMemberTree>(code);
  expect(tree).toBeInstanceOf(PropertyClassMemberTree);

  expect(tree.name).toBe('a');
  expect(tree.type.toString()).toBe('((String | null) Integer | "hello")[]');
});
