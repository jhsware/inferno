import { scheduleRender, renderComponent } from 'inferno-custom-elements';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'inferno-button': any;
    }
  }
}

global ??= globalThis;
const { linkEvent } = global.__infernojs__.import('inferno@8');

type TState = {
  disabled?: boolean;
}
const ATTRIBUTES = ["disabled"] as const;
type TAttributes = typeof ATTRIBUTES[number];
// type TValues =  TState[typeof ATTRIBUTES[number]];

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

    attributeChangedCallback(attrName: TAttributes, oldVal: string | null | undefined, newVal: string | null | undefined) {
      console.log(attrName, oldVal, newVal)
      if (oldVal === newVal) return;
      switch (attrName) {
        case "disabled":
          this._state[attrName] = newVal !== "false" && newVal != undefined;
          break;
        default:
          // this._state[attrName] = newVal;
      }

      scheduleRender(this);
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
