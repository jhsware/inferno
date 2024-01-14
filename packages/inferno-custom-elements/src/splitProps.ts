import { EMPTY_OBJ } from 'inferno';
import { isFunction, isNull, isUndefined } from 'inferno-shared';

function isFunctionOrLinkEventObject(o: any): boolean {
  // The check for linkEvent object is a bit too unspecific but I didn't want to create a link event class
  // before investigating what performance impact it would have.
  return isFunction(o) || (!isNull(o) && typeof o === 'object' && isFunction(o.event) && o.hasOwnProperty('data'));
}

export function splitProps(lastProps: any, nextProps: any, customElement /* InfernoCustomElement */): [Record<string, any>, Record<string, any>] {
  if (isUndefined(customElement)) {
    return [nextProps, EMPTY_OBJ];
  }

  let _lastProps, _nextProps;
  let _nextCustomElementProps;

  const observedAttrs = (customElement as any).observedAttributes;
  // Should these be cached on vNode?
  if (!isUndefined(nextProps)) {
    for (const key in nextProps) {
      // Attributes and callbacks should be passed as inferno props
      if (observedAttrs.includes(key) || isFunctionOrLinkEventObject(nextProps[key])) {
        _nextProps ??= {};
        _nextProps[key] = nextProps[key];
      } else {
        _nextCustomElementProps ??= {};
        _nextCustomElementProps[key] = nextProps[key];
      }
    }
  }

  if (!isUndefined(lastProps)) {
    for (const key in lastProps) {
      // Attributes and callbacks should be passed as inferno props
      if (observedAttrs.includes(key) || isFunctionOrLinkEventObject(lastProps[key])) {
        // Clear the value by setting it to undefined, otherwise it won't be sent to the custom element
        _nextProps ??= {};
        if (!_nextProps.hasOwnProperty(key)) {
          _nextProps[key] = undefined;
        }
        _lastProps ??= {};
        _lastProps[key] = lastProps[key];
      } else {
        // Clear the value by setting it to undefined, otherwise it won't be sent to the custom element
        _nextCustomElementProps ??= {};
        if (!_nextCustomElementProps.hasOwnProperty(key)) {
          _nextCustomElementProps[key] = undefined;
        }
      }
    }
  }

  return [_nextProps ?? EMPTY_OBJ, _nextCustomElementProps ?? EMPTY_OBJ];
}
