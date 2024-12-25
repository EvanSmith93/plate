import type {
  NodeOf,
  SetNodesOptions,
  TEditor,
  TNodeProps,
} from '../interfaces';

export const setNode = <N extends NodeOf<E>, E extends TEditor = TEditor>(
  editor: E,
  node: N,
  props: Partial<TNodeProps<N>>,
  options?: Omit<SetNodesOptions<E>, 'at'>
) => {
  const path = editor.findPath(node);

  if (!path) return;

  editor.setNodes(props, {
    ...options,
    at: path,
  } as any);
};
