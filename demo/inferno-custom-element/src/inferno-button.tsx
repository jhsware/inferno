import type { InfernoLibrary } from './registry';

declare global {
  interface Window {
    __infernojs__: InfernoLibrary;
  }
  namespace JSX {
    interface IntrinsicElements {
      'inferno-button': any;
    }
  }
}

global ??= globalThis;
const { linkEvent, render } = global.__infernojs__.import('inferno@8');

// We don't want to execute the actual render function on the server
// so we make it a noop
const renderComponent = (typeof window === "undefined" ? () => null : render);

type TState = {
  disabled?: boolean;
}
type TAttributes = keyof TState;
const ATTRIBUTES = ["disabled"] as const;

global.customElements.define(
  "inferno-button",
  class extends HTMLElement {
    static observedAttributes = ATTRIBUTES;
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

    attributeChangedCallback(attrName: TAttributes, oldVal: string | undefined, newVal: string | undefined) {
      if (oldVal === newVal) return;
      switch (attrName) {
        case "disabled": {
          this._state[attrName] = newVal === "true";
          break;
        }
        default: {
          return;
        }
      }

      if (this.shadowRoot !== null) {
        renderComponent(this.render(), this.shadowRoot);
      }
    }

    didClick(root, e: MouseEvent) {
      console.log("Clicked!", e);
      e.stopPropagation();
      // Resend this with custom element as root
      root.dispatchEvent(new PointerEvent("click", e));
    }

    render() {
      return (
        <button {...this._state} onClick={linkEvent(this, this.didClick)}>
          <slot />
        </button>
      )
    }
  }
);
