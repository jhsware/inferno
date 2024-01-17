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
  let _richProps;

  const observedAttrs = (customElement as any).observedAttributes ?? [];
  const componentProps = [...observedAttrs, 'children', 'key', 'className', 'style'];
  // Should these be cached on vNode?
  if (!isUndefined(nextProps)) {
    for (const key in nextProps) {
      // Attributes and callbacks should be passed as inferno props
      if (componentProps.includes(key) || isFunctionOrLinkEventObject(nextProps[key])) {
        _nextProps ??= {};
        _nextProps[key] = nextProps[key];
      } else {
        _richProps ??= {};
        _richProps[key] = nextProps[key];
      }
    }
  }

  if (!isUndefined(lastProps)) {
    for (const key in lastProps) {
      // Attributes and callbacks should be passed as inferno props
      if (componentProps.includes(key) || isFunctionOrLinkEventObject(lastProps[key])) {
        // Clear the value by setting it to undefined, otherwise it won't be sent to the custom element
        _nextProps ??= {};
        if (!_nextProps.hasOwnProperty(key)) {
          _nextProps[key] = undefined;
        }
        _lastProps ??= {};
        _lastProps[key] = lastProps[key];
      } else {
        // Clear the value by setting it to undefined, otherwise it won't be sent to the custom element
        _richProps ??= {};
        if (!_richProps.hasOwnProperty(key)) {
          _richProps[key] = undefined;
        }
      }
    }
  }

  return [_nextProps ?? EMPTY_OBJ, _richProps ?? EMPTY_OBJ];
}
