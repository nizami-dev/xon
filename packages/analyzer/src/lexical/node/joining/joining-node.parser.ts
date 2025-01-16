import {$JoiningNode, CR, JOINING, JoiningNode, LF, SPACE} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseJoiningNode(source: CharStream): JoiningNode | Nothing {
  const node = source.takeWhile(
    $JoiningNode,
    (x, i) => x.equals(JOINING) || (i > 0 && (x.equals(SPACE) || x.equals(CR) || x.equals(LF))),
  );

  if (node) {
    node.isHidden = true;
  }

  return node;
}