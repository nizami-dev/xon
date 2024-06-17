import {Nothing, nothing} from '../../../../../../lib/types';
import {NOT} from '../../../../lexical/lexical-config';
import {$Node, Node, is} from '../../../../syntax/node';
import {PrefixNode} from '../../../../syntax/node/prefix/prefix-node';
import {SemanticContext} from '../../../semantic-context';
import {typeSemanticParse} from '../../type-semantic-parser';
import {NotTypeSemantic, notTypeSemantic} from './not-type-semantic';

export function notTypeSemanticTryParse(context: SemanticContext, node: Node): NotTypeSemantic | Nothing {
  if (is<PrefixNode>(node, $Node.PREFIX) && node.operator.text === NOT) {
    const value = typeSemanticParse(context, node.value);

    if (!value) {
      return nothing;
    }

    const reference = context.createReference(node);
    const semantic = notTypeSemantic(reference, value);

    return semantic;
  }

  return nothing;
}