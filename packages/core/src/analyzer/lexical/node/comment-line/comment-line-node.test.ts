import {nothing} from '#common';
import {$, CommentLineNode, syntaxFromResource, textResourceFromData} from '#core';

test('line comment', () => {
  const text = '// abc';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes[0] as CommentLineNode;

  expect(statements.length).toBe(0);
  expect(syntax.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($.CommentLineNode);
  expect(node.text.toString()).toBe('// abc');
});
