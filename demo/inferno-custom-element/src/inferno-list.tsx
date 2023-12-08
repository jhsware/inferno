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
const { componentDidAppear, componentWillDisappear } = global.__infernojs__.import('inferno-animation@8');

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

  /*******************************************/
  /* Animate height and opacity of card <li> */
  /*******************************************/
  .ListItem-leave {
      /* Leave animation start state */
      opacity: 1;
      transform: translateX(0);
  }

  .ListItem-leave-active {
      /* Leave animation transitions */
      overflow: visible;
      transition: var(--infernoAnimationLeave);
      pointer-events: none; /* prevent hover to fire transition events */
  }

  .ListItem-leave-end {
      /* Leave animation end state */
      opacity: 0;
      height: 0;
      padding-top: 0;
      padding-bottom: 0;
      border-width: 0;
      transform: translateX(100%);
  }

  .ListItem-enter {
      /* Enter animation start state */
      opacity: 0.7;
      height: 0;
      padding-top: 0;
      padding-bottom: 0;
      border-width: 0;
  }

  .ListItem-enter-active {
      /* Enter animation transitions */
      transition: var(--infernoAnimationEnter);
      pointer-events: none; /* prevent hover to fire transition events */
  }

  .ListItem-enter-end {
      /* Enter animation end state */
      opacity: 1;
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
        <LI onClick={linkEvent(this, this.didClick)}
          animation="ListItem"
          onComponentDidAppear={componentDidAppear}
          onComponentWillDisappear={componentWillDisappear}>
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
