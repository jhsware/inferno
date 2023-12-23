import { setData, scheduleRender, renderComponent } from './utils';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'inferno-rich': any;
    }
  }
}

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
      setData(this, "data", value)
      && scheduleRender(this);
    }

    get data() {
      return this._data;
    }

    render() {
      const { title, preamble } = this.data ?? {};
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


