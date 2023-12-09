import type { InfernoLibrary } from './registry';

declare global {
  interface Window {
    __infernojs__: InfernoLibrary;
  }
  namespace JSX {
    interface IntrinsicElements {
      'inferno-list': any;
      'inferno-list-item': any;
    }
  }
}

global ??= globalThis;
const { linkEvent, render } = global.__infernojs__.import('inferno@8');

// We don't want to execute the actual render function on the server
// so we make it a noop
const renderComponent = (typeof window === "undefined" ? () => null : render);

const cssList = `
ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #eee;
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  overflow: hidden;
}
`

global.customElements.define(
  "inferno-list",
  class extends HTMLElement {
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

    render() {
      return (
        <ul>
          <style>{cssList}</style>
          <slot />
        </ul>
      )
    }
  }
);

const cssListItem = `
  li {
    background-color: #fff;
    padding: 1rem 0.5rem;
  }
`

type TState = {
  index?: number;
}
type TAttributes = keyof TState;
const ATTRIBUTES = ["index"] as const;

global.customElements.define(
  "inferno-list-item",
  class extends HTMLElement {
    static observedAttributes = ATTRIBUTES;
    _state: TState = {};

    constructor() {
      super();
      this._state = {};
    }

    attributeChangedCallback(attrName: TAttributes, oldVal: number | undefined, newVal: number | undefined) {
      if (oldVal === newVal) return;
      switch (attrName) {
        case "index": {
          this._state[attrName] = newVal as number | undefined;
          break;
        }
      }
      
      if (this.shadowRoot !== null) {
        renderComponent(this.render(), this.shadowRoot);
      }
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

    didClick(root, e: MouseEvent) {
      console.log("Clicked -- " + root._state.index);
      e.stopPropagation();
      root.dispatchEvent(new Event("remove", e));
    }

    render() {
      return (
        <LI onClick={linkEvent(this, this.didClick)}>
          <style>{cssListItem}</style>
          <slot />
        </LI>
      )
    }
  }
);

function LI({ children, ...props }) {
  return <li {...props}>{children}</li>;
}
