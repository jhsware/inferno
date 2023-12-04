import type { InfernoLibrary } from './registry';

declare global {
  interface Window {
    __infernojs__: InfernoLibrary;
  }
}

const { linkEvent, render } = global.__infernojs__.import('inferno@8');

type TState = {
  disabled?: boolean;
}
type TAttributes = keyof TState;
const ATTRIBUTES = ["disabled"] as const;

customElements.define(
  "inferno-button",
  class extends HTMLElement {
    static observedAttributes = ATTRIBUTES;
    _state: TState = {};

    constructor() {
      super();
      this._state = {};
    }

    connectedCallback() {
      // To allow SSR we need to do this when the component is connected to the DOM
      this.attachShadow({ mode: "open" });
      render(this.render(), this.shadowRoot);
    }

    adoptedCallback() {
      console.log("moved to a new document");
    }

    disconnectedCallback() {
      render(null, this.shadowRoot);
    }

    set disabled(bool) {
      this.setAttribute("disabled", bool.toString());
    }

    get disabled() {
      return this.getAttribute("disabled") === "true";
    }

    attributeChangedCallback(attrName: TAttributes, oldVal: string | undefined, newVal: string | undefined) {
      if (oldVal === newVal) return;
      switch (attrName) {
        case "disabled": {
          this._state[attrName] = newVal !== "false";
          break;
        }
        default: {
          return;
        }
      }

      if (this.shadowRoot !== null) {
        render(this.render(), this.shadowRoot);
      }
    }

    didClick(root, e: MouseEvent) {
      console.log("Clicked!", e);
      e.stopPropagation();
      // Resend this with custom element as root
      root.dispatchEvent(new PointerEvent("click", e));
    }

    render() {
      // TODO: Hydrate if SSR (how to check?)
      return (
        <button {...this._state} onClick={linkEvent(this, this.didClick)}>
          <slot />
        </button>
      )
    }
  }
);
