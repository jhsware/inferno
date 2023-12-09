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

Some issues worth looking into:

- do custom elements need a flag set by the JSX-transpiler?
- should I mock HTMLElement and CustomElementRegistry or use JSDom for SSR tests to make sure that hydration works as expected?
- should the core library provide some kind of support for passing rich data to custom elements?
- can we use shadow DOM in ordinary components to make inspecting the DOM a more pleasant experience (this could actually be a very nice feature)?
- make sure we support streaming
- make sure we support animations
- should we add version string to other libs or perform check in different way?

Thoughts on animations: 
Do we need something like `mountFunctionalComponent` and add animation support to the custom element class? This might be cleaner than wrapping custom elements in a functional component. However this won't work unless the custom element is mounted in an Inferno app.

Perhaps a better solution is to find a way of jacking into the custom element lifecycle. But this might be a dead end since we don't have a virtual DOM.

We might need to accept that custom elements can't be animated just like normal elements can't be animated.

Note on flexbox: should inferno-animation handle parent gap dynamically in the same way we handle width and height?

TODO: Create `mountCustomElement` and make it aware of animation hooks