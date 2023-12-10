# Custom Element Demo

1. install and build the Inferno project

```sh
npm i && npm run build
```

2. install this demo and start the app

Browser only demo:

```sh
cd demo/inferno-custom-element
npm i
npm run dev
```

SSR demo:

```sh
npm run dev-ssr
```

## Developer Notes

Benchmark with [Lit](https://github.com/lit/lit)

Use case:
- allow using inferno components in non-inferno apps (to create UI-component libraries)
- provide a method of componentisation while reducing clutter in DOM-inspector
- improve robustness of component styling

Main features:
- we need a library registry so custom elements can:
  - be provided as individual components yet share the same core libs
  - follow different release cycles where they depend on different major versions of Inferno
- custom elements need to be first class citizens in an Inferno app, supporting:
  - orchestrating animations
  - custom callbacks
  - (maybe) passing rich data

Some issues worth looking into:

- do custom elements need a flag set by the JSX-transpiler?
- should I mock HTMLElement and CustomElementRegistry or use JSDom for SSR tests to make sure that hydration works as expected?
- should the core library provide some kind of support for passing rich data to custom elements?
- can we use shadow DOM in ordinary components to make inspecting the DOM a more pleasant experience (this could actually be a very nice feature)?
- make sure we support streaming
- make sure we support animations
- should we add version string to other libs or perform check in different way to make registry more robust
- can we add a `renderStyling()` method to allow us to inject styling once as a global template and reuse it for each instance of the component to reduce size of html?

Thoughts on animations: 
Do we need something like `mountFunctionalComponent` and add animation support to the custom element class? This might be cleaner than wrapping custom elements in a functional component. However this won't work unless the custom element is mounted in an Inferno app.

Perhaps we could make ALL elements aware of animation hooks which would have the benefit of supporting animations on any DOM-element. Normal elements don't have a ref though so I am not sure we can keep track of the hooks.

We might need to accept that custom elements can't be animated just like normal elements can't be animated.

Note on flexbox: should inferno-animation handle parent gap dynamically in the same way we handle width and height?

Experiment 1: animate custom elements without wrapper
TODO: Create `mountCustomElement` and make it aware of animation hooks
  - TODO: animations need to be run on the outermost element in the shadow DOM
- benefit: we don't need a wrapper element to animate custom elements
- benefit: we could probably bake the animation hooks into the custom element root class (but this would require runtime check for animation hooks on every instance of a custom element)
- drawback: adds code to core library
- note: we probably want to do the check for custom-elements and animation hooks during JSX-transformation to avoid performance penalty

Experiment 2: animate all elements
TODO: Allow all elements to be aware of animation hooks, meaning we could animate any dom element as we please
- benefit: we don't need to set a flag for custom elements
- drawback: we would need to set a flag during JSX transformation to avoid costly check for animation hooks
- note: I am not convinced we actually want this, animating elements like this is only useful in demos