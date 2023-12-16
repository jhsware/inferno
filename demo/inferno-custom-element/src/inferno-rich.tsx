import type { InfernoLibrary } from './registry';

declare global {
  interface Window {
    __infernojs__: InfernoLibrary;
  }
  namespace JSX {
    interface IntrinsicElements {
      'inferno-rich': any;
    }
  }
}

global ??= globalThis;
const { linkEvent, render } = global.__infernojs__.import('inferno@8');

// We don't want to execute the actual render function on the server
// so we make it a noop
const renderComponent = (typeof window === "undefined" ? () => null : render);

type TState = {
  data?: { title?: string, preamble?: string };
}
const ATTRIBUTES = [] as const;
type TAttributes = typeof ATTRIBUTES[number];
const PROPS = ["data"] as const;
type TProps = typeof PROPS[number];
type TPropValues =  TState[typeof PROPS[number]];

global.customElements.define(
  "inferno-rich",
  class extends HTMLElement {
    static observedAttributes = ATTRIBUTES;
    static props = PROPS;
    _state: TState = {};

    constructor() {
      super();
      this._state = {};
    }

    connectedCallback() {
      this.attachShadow({ mode: "open" });
      renderComponent(this.render(), this.shadowRoot);
    }

    adoptedCallback() {
      console.log("moved to a new document");
    }

    disconnectedCallback() {
      renderComponent(null, this.shadowRoot);
    }

    // On render:
    // 1. Check component.props and call setProp if needed
    // Should this be figured out during JSX transform?
    setProps(props: {name: TProps, value: TPropValues}) {
      let dirty = false;
      for (const [name, value] of Object.entries(props)) {
        if (this._state[name] === value) continue;
        this._state[name] = value;
        dirty = true;
      }
      if (dirty && this.shadowRoot !== null) renderComponent(this.render(), this.shadowRoot);
    }

    render() {
      const { title, preamble } = this._state.data ?? {};
      return (
        <section>
          {title && <h2>{title}</h2>}
          {preamble && <p>{preamble}</p>}
          <slot />
        </section>
      )
    }
  }
);
