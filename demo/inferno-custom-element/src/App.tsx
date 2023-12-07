import './inferno-button';

function didClick(e) {
  console.log('Clicked in app!', e);
}

if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    console.log('Clicked in document!', e);
  });
}

// Disable TS linting on next line
// @ts-ignore
export function App() {
  return (
    <span>
      <inferno-button disabled>No click!</inferno-button>
      <inferno-button onClick={didClick}>Do click!</inferno-button>
    </span>
  );
}
