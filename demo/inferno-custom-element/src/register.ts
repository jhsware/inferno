import { InfernoLibrary } from './registry';
import * as Inferno from 'inferno';

declare global {
  interface Window {
    __infernojs__: InfernoLibrary;
  }
}

if (typeof global !== 'undefined') {
  (global as any).__infernojs__ = new InfernoLibrary();
  global.__infernojs__.register('inferno', Inferno);
}