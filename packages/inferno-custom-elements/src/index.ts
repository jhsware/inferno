import { createVNode, Component, createRef, RefObject } from "inferno";
import { ChildFlags, VNodeFlags } from "inferno-vnode-flags";
import { splitProps } from "./splitProps";
import { EMPTY_OBJ } from "inferno";
export * from './nodejsHelper';
export * from './registry';
export * from './utils';

export class CustomElementWrapper extends Component {
  _elType /* CustomElement */: CustomElementConstructor | undefined;
  _$EL: string;
  _ref: RefObject<Element>;
  _state: [Record<string, any>, Record<string, any>];
  _lastRichProps: Record<string, any>;

  constructor(props) {
    super(props);
    const { $EL, ...restProps } = props;
    this._$EL = $EL;
    this._elType = globalThis.customElements.get($EL);
    this._state = splitProps(EMPTY_OBJ, restProps, this._elType);
    this._ref = createRef();
  }

  public componentWillReceiveProps(_nextProps) {
    this._lastRichProps = this._state[1] ?? EMPTY_OBJ;
    const { $EL, ...props } = _nextProps;
    this._state = splitProps(this.props, props, this._elType);
  }

  public componentDidMount(): void {
    const [_nextProps, richProps] = this._state;
    this.setRichProps(richProps);
  }

  private setRichProps(props) {
    if (this._ref.current) {
      for (const key in props) {
        if (this._lastRichProps?.[key] !== props[key]) {
          this._ref.current[key] = props[key];
        }
      }
    }
  }

  render(props) {
    const [nextProps, richProps] = this._state;
    const { className, children, ...restProps } = nextProps;
    this.setRichProps(richProps);
    console.log(nextProps);
    return createVNode(VNodeFlags.HtmlElement, props.$EL, className, children, ChildFlags.UnknownChildren, restProps, null, this._ref as any);
  }
}