import type { InfernoLibrary } from './registry';
declare global {
  interface Window {
    __infernojs__: InfernoLibrary;
  }
}

// TODO: This should be moved to new shared package inferno-custom-element

global ??= globalThis;
const { linkEvent, render } = global.__infernojs__.import('inferno@8');

// We don't want to execute the actual render function on the server
// so we make it a noop
export const renderComponent = (typeof window === "undefined" ? () => null : render);

export function setData(self, propName, value): boolean {
  const name = "_" + propName;
  if (self[name] !== value) {
    self[name] = value;
    return true;
  }
  return false;
}
export function scheduleRender(self) {
  if (self.shadowRoot === null || self._scheduled) return;
  self._scheduled = true;
  Promise.resolve().then(() => {
    self._scheduled = false;
    renderComponent(self.render(), self.shadowRoot);
  });
}
