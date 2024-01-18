import 'inferno';

declare global {
  interface Window {
    readonly customElements: CustomElementRegistry;
    HTMLElement: typeof HTMLElement;
  }
}

type TShadowRootMode = 'open' | 'closed';

global ??= globalThis;
if (!global?.customElements) {
  const _mockGlobalRegistry = {};
  // Mock for SSR in Nodejs
  // https://github.com/jsdom/jsdom/tree/main/lib/jsdom/living/custom-elements

  global.customElements = {
    define: (name: string, constructor: CustomElementConstructor) => {
      _mockGlobalRegistry[name] = constructor;
    },
    get: (name: string): CustomElementConstructor | undefined => { return _mockGlobalRegistry[name]; },
    upgrade: () => { /* not needed for SSR I believe */ },
    whenDefined: async (_name: string): Promise<CustomElementConstructor> => { return undefined as any /* not needed for SSR I believe */; },
  };
}

if (!global?.HTMLElement) {
  // Mock for SSR in Nodejs  
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
