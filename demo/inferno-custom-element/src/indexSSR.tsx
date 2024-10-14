import './register';
import { hydrate } from 'inferno-hydrate';
import { App1 } from './App';

hydrate(<App1 />, document.getElementById('app1'))
