// http://www.2ality.com/2014/09/es6-modules-final.html

/* src/myModule.js */

export function publicFn() {
  return 6;
}

export default {
  x: 1
};

/* index.js */
import MyModule, { publicFn } from './src/myModule';

MyModule.x // 1
publicFn(); // 6
