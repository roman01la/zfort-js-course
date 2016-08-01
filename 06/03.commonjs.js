// http://largescalejs.ru/commonjs-modules/

/* src/myModule.js */

function publicFn() {
  return OtherModule.doStuff()
}

module.exports = {
  publicFn
};



/* index.js */

var myModule = require('./src/myModule');

myModule.publicFn();
