// http://requirejs.org/
// http://requirejs.org/docs/api.html

/* myModule.js */

// Define a module
define('MyModule', ['OtherModule'], function(OtherModule) {

  function publicFn() {
    return OtherModule.doStuff()
  }

  return {
    publicFn: publicFn
  };
});


/* index.js */

// Entry point module
require(['MyModule'], function(MyModule) {
  MyModule.publicFn();
});
