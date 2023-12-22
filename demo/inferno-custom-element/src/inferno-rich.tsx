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

const ATTRIBUTES = [] as const;
type TAttributes = typeof ATTRIBUTES[number];

interface IInfernoRich extends HTMLElement {
  _data: { title?: string, preamble?: string };
}

global.customElements.define(
  "inferno-rich",
  class extends HTMLElement implements IInfernoRich {
    static observedAttributes = ATTRIBUTES;
    _data: IInfernoRich["_data"];

    constructor() {
      super();
      this._data = {};
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

    set data(value) {
      this._data = value;
      if (this.shadowRoot !== null) {
        renderComponent(this.render(), this.shadowRoot);
      }
    }

    get data() {
      return this._data;
    }

    render() {
      const { title, preamble } = this._data ?? {};
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
