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

Custom element support in different libraries:
https://custom-elements-everywhere.com/

Benchmark with:
- [Lit](https://github.com/lit/lit)
- [Lightning Web Components](https://developer.salesforce.com/docs/platform/lwc/guide/create-components-introduction.html)
- [Light DOM](https://developer.salesforce.com/docs/platform/lwc/guide/create-light-dom.html)

Use case:
- allow using inferno components in non-inferno apps (to create UI-component libraries)
- provide a method of componentisation while reducing clutter in DOM-inspector
- improve robustness of component styling

Main features:
- we need a library registry so custom elements can:
  - be provided as individual components yet share the same core libs
  - mix custom elements on a page even if they depend on different major versions of Inferno
- custom elements need to be first class citizens in an Inferno app, supporting:
  - orchestrating animations
  - custom callbacks
  - passing rich data
    - this requires standardised setters for rich props
  - don't pass context to custom element because it will tightly couple implementation to application, better to use Component for that use case
  - custom element support is mainly implemented as a pattern
    - some library support is provided
    - this allows greater flexibility in implementation of internal hooks etc.

Some issues worth looking into:

- do custom elements need a flag set by the JSX-transpiler?
- there is an overhead for each custom element because they are literally separate Inferno apps (each mounted on respective shadowRoot). Is there a way to provide a shortcut, or consolidate these to optimise the patching algorithm?
- should I mock HTMLElement and CustomElementRegistry or use JSDom for SSR tests to make sure that hydration works as expected?
- should the core library provide some kind of support for passing rich data to custom elements?
  - ANSWER: yes, this is a must
- can we use shadow DOM in ordinary components to make inspecting the DOM a more pleasant experience (this could actually be a very nice feature)?
  - NOTE: We need to break through shadowRoot which adds a new branch in the patching algorithm
- make sure we support streaming
- make sure we support animations
- should we add version string to other libs or perform check in different way to make registry more robust
- can we add a `renderStyling()` method to allow us to inject styling once as a global template and reuse it for each instance of the component to reduce size of html?

### Notes on passing rich data: ###
Ref: https://custom-elements-everywhere.com/
- Vue: To bind to a Custom Element property use :foo.prop="bar"
- Svelte: if the property is defined on the element instance, a property is used, otherwise it will fall back to attributes.
- AngularJS: pass data to attributes using ng-attr, or to properties using ng-prop
- Preact: If a property is already defined on the element instance, Preact will use properties, otherwise it will fallback to attributes
- Polymer: will always attempt to pass data to an element using properties. To explicitly set an attribute, Polymer provides additional syntax in the form of the $= annotation
- Hyperapp: will pass data to an element as properties, as long as the property is defined on the element's prototype. Otherwise it will fallback to passing data as attributes.
- Lit: passes all data to Custom Elements as attributes. However, Lit also provides syntax to bind to properties instead. To bind to a Custom Element property, prefix the property name with a . as in <input .value=${value}>
- Riot: passes all primitive data (strings, numbers, booleans) to Custom Elements as attributes. It passes complex data (Objects, Arrays) to Custom Elements as properties.
- Mithril: if the element or any of its prototypes have a property definition for the key in question, the value will be assigned as a property. Otherwise passed as attribute.
- Dojo: will pass data as attributes only when the data is a type of string, otherwise it is set as a property.
- Solid: passes all non-JSX expression data as attributes. JSX expressions default to attributes unless they are booleans, applied to a custom element, or indicated with prop: namespace.

### Thoughts on animations: ###
Do we need something like `mountFunctionalComponent` and add animation support to the custom element class? This might be cleaner than wrapping custom elements in a functional component. However this won't work unless the custom element is mounted in an Inferno app.
ANSWER: No, lets treat them as ordinary DOM elements, these need to be wrapped in order to animate. Makes sense because when used without a virtual DOM, the elements can't delay their removal from the DOM and thus can't be animated on removal making behaviour inconsistent.

Perhaps we could make ALL elements aware of animation hooks which would have the benefit of supporting animations on any DOM-element. Normal elements don't have a ref though so I am not sure we can keep track of the hooks.
ANSWER: Probably too complex with added overhead. Animations are expensive and requiring a component wrapper is reasonable.

We might need to accept that custom elements can't be animated just like normal elements can't be animated.
ANSWER: Yes, this is the way.

INVESTIGATE: Note on flexbox: should inferno-animation handle parent gap dynamically in the same way we handle width and height?
