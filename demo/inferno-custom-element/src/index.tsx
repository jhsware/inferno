import 'inferno-custom-elements';
import { render } from 'inferno';
import { App1, App2, App3 } from './App';

render(<App1 />, document.getElementById('app1'));
render(<App2 />, document.getElementById('app2'));
render(<App3 />, document.getElementById('app3'));
