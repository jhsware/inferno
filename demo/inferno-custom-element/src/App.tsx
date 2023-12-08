import { Component, linkEvent } from 'inferno';
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
inferno-list-item {
  --infernoAnimationEnter: all 1.2s ease-out;
  --infernoAnimationLeave: all .6s ease-out;
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
          return <inferno-list-item key={v.id} index={v.id} onRemove={linkEvent(this, this.doRemove)}>This is index {v.text}</inferno-list-item>;
        })}</inferno-list>
      </div>
    );
  }
}
