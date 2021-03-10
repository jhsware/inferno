import { Component, render } from 'inferno';
import { triggerEvent } from 'inferno-utils';

describe('transition events', () => {
  let container;

  beforeEach(function () {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(function () {
    render(null, container);
    container.innerHTML = '';
    document.body.removeChild(container);
  });

  /**
   * This is how component animation hooks work:
   * 
   * On node creation, if there is a callback, a reference to the DOM-node is passed to that callback which allows for CSS-
   * animations to be applied.
   * 
   * On node removal, if there is a callback, the node isn't actually removed until the callback has finished.
   * 
   * On node move, if there is a callback, the original node is cloned and both a reference to the cloned node and the new
   * node are passed to the callback allowing CSS-animations to be performed.
   * 
   * ** Entrypoints **
   * - mounting.ts
   * - unmounnting.ts
   * 
   * ** Scope **
   * We will start by implementing this for class components. Animations are expensive so it is probably a reasonable
   * tradeoff to force the use of class componnents.
   * 
   * ** How do we handle nested animations? **
   * Normally we only want to animated the outermost animation, but there are situation when the dev might want to
   * do this differenty. Should we:
   * - always block animations in children?
   * - allow the dev to specify?
   * 
   * Ex. you have a page animation and also animations on items in that page.
   * 
   * ANSWER: I will block all animations down stream for starters. Giving an option requires A LOT of thought on
   * edge cases.
   */

  it('should call "didAppear" when component has been inserted into DOM', () => {
    const spyer = jasmine.createSpy();
    class App extends Component {
      didAppear() {
        spyer('didAppear');
      }
      componentDidMount() {
        spyer('didMount');
      }
      render () {
        return (<div />)
      }
    }

    render(<App />, container);

    expect(spyer).toHaveBeenCalledTimes(2);
    expect(spyer.calls.argsFor(0)).toEqual(['didMount']);
    expect(spyer.calls.argsFor(1)).toEqual(['didAppear']);
  });

  it('should call "willDisappear" when component is about to be removed from DOM', () => {});
  it('should call "willMove" when component is about to be moved to another part of DOM', () => {});

});