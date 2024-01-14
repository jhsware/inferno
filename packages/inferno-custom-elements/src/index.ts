import { createVNode, Component } from "inferno";
import { VNodeFlags } from "inferno-vnode-flags";
import { splitProps } from "./splitProps";
import { EMPTY_OBJ } from "inferno";


export class CustomElementWrapper extends Component {
  _elType /* CustomElement */;
  _ref;
  _state;
  _lastRichProps;

  constructor(props) {
    super(props);
    this._elType = globalThis.customElements.get(props.$EL);
    this._state = splitProps(EMPTY_OBJ, props, this._elType);
  }

  componentWillReceiveProps(_nextProps) {
    this._lastRichProps = this._state[1] ?? EMPTY_OBJ;
    this._state = splitProps(this.props, _nextProps, this._elType);
  }

  render(props) {
    const [nextProps, richProps] = this._state;
    const { className, children, ...restProps } = nextProps;
    if (this._ref.el) {
      for (const key in richProps) {
        if (this._lastRichProps[key] !== richProps[key]) {
          this._ref.el[key] = richProps[key];
        }
      }
    }
    const childFlags = undefined;
    return createVNode(VNodeFlags.Element, props.$EL, className, children, childFlags, restProps, null, this._ref);
  }
}