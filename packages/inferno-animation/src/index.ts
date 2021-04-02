export { AnimatedComponent } from './AnimatedComponent';

import { addClassName, clearDimensions, forceReflow, getDimensions, registerTransitionListener, removeClassName, setDimensions, setDisplay } from './utils';

export const utils = {
  addClassName,
  clearDimensions,
  forceReflow,
  getDimensions,
  registerTransitionListener,
  removeClassName,
  setDimensions,
  setDisplay
};

/**
 * Legacy exports to support inferno-animation < 7.5
 * NOTE: These will be removed in 8.x and are only exposed
 * to avoid breaking apps that use inferno-animation <7.5.
 * 
 * Legacy docs can be found at https://github.com/jhsware/inferno-animation
 */
 export { default as Animated } from './legacy/Animated';
 export { default as CrossFade } from './legacy/CrossFade';
 export { animateOnRemove, animateOnAdd } from './legacy/animatedComponent';
 export { animationIsRunningOnParent } from './legacy/utils';