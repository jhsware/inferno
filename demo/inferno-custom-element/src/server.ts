import * as koa from 'koa'; // koa@2
import * as logger from 'koa-logger';
import * as koaRouter from 'koa-router'; // koa-router@next
import * as koaStatic from 'koa-static';
import * as koaMount from 'koa-mount';
import { renderToString } from 'inferno-server';
import {Parcel} from '@parcel/core';
import * as InfernoAnimation from 'inferno-animation';
import 'inferno-custom-elements';

global ??= globalThis;
if (typeof global !== 'undefined') {
  // Adding additional libraries for custom elements:
  global.__infernojs__.register('inferno-animation', InfernoAnimation, '8');
}


const PORT = process.env.PORT || 3000;

// Parcel watch subscription and bundle output
// NOTE: Currently deactivated watcher (the following line and `bundler.watch` further down)
// let subscription;
let bundles;

let bundler = new Parcel({
  // NOTE: Specifying target: { source: './src/App.tsx' } didn't work for me
  entries: ['./src/App.tsx', './src/indexSSR.tsx'],
  defaultConfig: '@parcel/config-default',
  targets: {
    default: {
      context: 'node',
      engines: {
        node: ">=18"
      },
      distDir: "./distServer",
      publicUrl: "/", // Should be picked up from environment
    },
    browser: {
      context: 'browser',
      engines: {
        browsers: '> 0.5%, last 2 versions, not dead'
      },
      distDir: "./distBrowser",
      publicUrl: "/", // Should be picked up from environment
    }
  },
  mode: 'development'
});


const app = new koa()
const frontend = new koaRouter()

/**
 * Logging
 */
app.use(logger((str, args) => {
  console.log(str)
}))

/**
 * Endpoint for healthcheck
 */

function renderPage(html) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>Inferno Custom Elements Demo</title>
    <script type="module" src="/dist/indexSSR.js"></script>
  </head>
  <body>
    <section>
      <h2>Custom Elment in HTML</h2>
      <inferno-button disabled>DISABLED</inferno-button>
      <inferno-button>Click me!</inferno-button>
    </section>
    <section>
      <h2>Custom Elment in App</h2>
      <div id="app1">${html}</div>
    </section>
  </body>
</html>  
`
}

frontend.get('/', async (ctx) => {
  const pathToAppJs  = bundles.find(b => b.name === 'App.js' && b.env.context === 'node').filePath;
  const { App } = require(pathToAppJs)

  const htmlApp = renderToString(App());

  ctx.body = renderPage(htmlApp);
})

/**
 * Mount all the routes for Koa to handle
 */
app.use(frontend.routes());
app.use(frontend.allowedMethods());
app.use(koaMount('/dist', koaStatic('distBrowser')));

app.listen(PORT, async () => {
  
  // Trigger first transpile
  // https://parceljs.org/features/parcel-api/
  try {
    let {bundleGraph, buildTime} = await bundler.run();
    bundles = bundleGraph.getBundles();
    console.log(`✨ Built ${bundles.length} bundles in ${buildTime}ms!`);
  } catch (err) {
    console.log(err.diagnostics);
  }

  console.log('Server listening on: ' + PORT)
})
