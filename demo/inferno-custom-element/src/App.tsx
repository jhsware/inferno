import { Component, linkEvent } from 'inferno';
import { componentDidAppear, componentWillDisappear } from 'inferno-animation';
import './inferno-button';
import './inferno-list';
import './inferno-rich';

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
  /* CSS-vars passes through to shadow DOM */
  --infernoAnimationEnter: all .4s ease-out;
  --infernoAnimationLeave: all .3s ease-out;
  /* REM passes through to shadow DOM */
  font-size: 1.2em;
}

/* Style directly on custom element using inherited styling rules */
inferno-list-item {
  font-family: serif;
}

/* Style directly on custom element using class */
.ListItemElement {
  color: green;
}


/* TODO: I would like to do this directly on the custom element */
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
  counter = 3;

  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 0, text: `Item 0` },
        { id: 1, text: `Item 1` },
        { id: 2, text: `Item 2` }
      ],
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
            <inferno-list-item class="ListItemElement" index={v.id} onRemove={linkEvent(this, this.doRemove)}><p>This is index {v.text}</p></inferno-list-item>
          </AnimWrapper>;
        })}</inferno-list>
      </div>
    );
  }
}

function AnimWrapper({ children, ...props }) {
  return <div className="ListItem">{children}</div>
}

export class App3 extends Component<any, { data: { title: string, preamble: string } }> {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        title: "Hello World!",
        preamble: "This is a test of the Inferno Rich component."
      }
    };
  }

  doChange(self, e) {
    e.preventDefault();
    self.setState({
      data: {
        title: "Good Bye World!",
        preamble: "Test Complete."
      }
    });
  }
  
  render() {
    return (
      <div>
        <style>{app2Css}</style>
        <inferno-button onClick={linkEvent(this, this.doChange)}>Change</inferno-button>
        <inferno-rich data={this.state.data}>The body is here...</inferno-rich>
      </div>
    );
  }
}

