import './register';
import './inferno-button';
import { render } from 'inferno';

function didClick(e) {
  console.log('Clicked in app!', e);
}

document.addEventListener('click', (e) => {
  console.log('Clicked in document!', e);
});

// Disable TS linting on next line
// @ts-ignore
render(<span><inferno-button disabled>No click!</inferno-button><inferno-button onClick={didClick}>Do click!</inferno-button></span>, document.getElementById('app'));
