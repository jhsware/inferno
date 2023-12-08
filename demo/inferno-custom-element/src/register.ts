import { InfernoLibrary } from './registry';
import * as Inferno from 'inferno';
import * as InfernoAnimation from 'inferno-animation';

declare global {
  interface Window {
    __infernojs__: InfernoLibrary;
    readonly customElements: CustomElementRegistry;
    HTMLElement: typeof HTMLElement;
  }
}

const _mockGlobalRegistry = {};

global ??= globalThis;

if (typeof global !== 'undefined') {
  (global as any).__infernojs__ = new InfernoLibrary();
  global.__infernojs__.register('inferno', Inferno);
  global.__infernojs__.register('inferno-animation', InfernoAnimation, '8');

  if (!global.customElements) {
    // https://github.com/jsdom/jsdom/tree/main/lib/jsdom/living/custom-elements

    global.customElements = {
      define: (name: string, constructor: CustomElementConstructor) => {
        _mockGlobalRegistry[name] = constructor;
      },
      get: (name: string): CustomElementConstructor | undefined => { return _mockGlobalRegistry[name]; },
      upgrade: () => { /* not needed for SSR I believe */ },
      whenDefined: async (name: string): Promise<CustomElementConstructor> => { return  /* not needed for SSR I believe */; },
    };
  }

  if (!global.HTMLElement) {
    type TShadowRootMode = 'open' | 'closed';
    class MockHTMLElement {
      _shadowRootMode: TShadowRootMode = 'open';
      constructor() {
      }
      attachShadow({ mode = 'open' }: { mode?: TShadowRootMode }) {
        this._shadowRootMode = mode;
      }

      get shadowRoot() {
        return this._shadowRootMode === 'open' ? {} : null;
      }
    }

    global.HTMLElement = MockHTMLElement as any;
  }
}