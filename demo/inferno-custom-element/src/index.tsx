import './register';
import { render } from 'inferno';
import { App1, App2 } from './App';

render(<App1 />, document.getElementById('app1'));
render(<App2 />, document.getElementById('app2'));
