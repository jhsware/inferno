import { render } from 'inferno';

function Component({ children, ...props }) {
  return (
    <button {...props}>{children}</button>
  )
}

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
      const shadowRoot = this.attachShadow({ mode: "open" });
      render(this.render(), this.shadowRoot);
    }

    adoptedCallback() {
      console.log("moved to a new document");
    }

    disconnectedCallback() {
      render(null, this.shadowRoot);
    }

    didClick = (e: MouseEvent) => {
      console.log("Clicked!", e);
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

    render() {
      // TODO: Hydrate if SSR (how to check?)
      // return (
      //   <Component {...this._state} onClick={this.didClick}>
      //     Click Me Now
      //   </Component>
      // )
      return (
        <button {...this._state} onClick={this.didClick}>
          Click Me Now
        </button>
      )
    }
  }
);
