import { Component, linkEvent } from 'inferno';
import { componentDidAppear, componentWillDisappear } from 'inferno-animation';
import './inferno-button';
import './inferno-list';

function didClick(e) {
  console.log('Clicked in app!', e);
}

if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    console.log('Clicked in document!', e);
  });
}

export function App1() {
  return (
    <span>
      <inferno-button disabled>No click!</inferno-button>
      <inferno-button onClick={didClick}>Do click!</inferno-button>
    </span>
  );
}


const app2Css = `
html {
  --infernoAnimationEnter: all 1.2s ease-out;
  --infernoAnimationLeave: all .6s ease-out;
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
    margin-top: -0.5rem; /* This prevents a jump due to stacking of two consecutive gaps */
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
export class App2 extends Component<any, { list: any[] }> {
  counter = 0;

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  doAdd(self, e) {
    e.preventDefault();
    const list = self.state.list
    self.setState({
      list: [...list, { id: self.counter, text: `Item ${self.counter}` }]
    });
    self.counter++;
  }
  
  doRemove(self, e) {
    e.preventDefault();
    const index = parseInt(e.target._state.index);
    const list = self.state.list.filter((v) => v.id !== index);
    self.setState({ list });
  }

  render() {
    return (
      <div>
        <style>{app2Css}</style>
        <inferno-button onClick={linkEvent(this, this.doAdd)}>Add!</inferno-button>
        <inferno-list>{this.state.list.map((v) => {
          return <AnimWrapper
            key={v.id}
            animation="ListItem"
            onComponentDidAppear={componentDidAppear}
            onComponentWillDisappear={componentWillDisappear}>
            <inferno-list-item index={v.id} onRemove={linkEvent(this, this.doRemove)}>This is index {v.text}</inferno-list-item>
          </AnimWrapper>;
        })}</inferno-list>
      </div>
    );
  }
}

function AnimWrapper({ children, ...props }) {
  return <div>{children}</div>
}
