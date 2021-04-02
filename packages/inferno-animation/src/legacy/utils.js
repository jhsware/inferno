import { findDOMfromVNode } from 'inferno';

export function animationIsRunningOnParent(node) {
  return (node.closest && node.closest('.InfernoAnimation--noAnim'))
}


export function findDOMNode(ref) {
  if (ref && ref.nodeType) {
    return ref;
  }

  if (!ref || ref.$UN) {
    return null;
  }

  if (ref.$LI) {
    return findDOMfromVNode(ref.$LI, true);
  }

  if (ref.flags) {
    return findDOMfromVNode(ref, true);
  }

  return null;
}
