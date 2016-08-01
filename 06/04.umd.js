// https://github.com/umdjs/umd
// http://bob.yexley.net/umd-javascript-that-runs-anywhere/

// UMD wrapper
(function (root, factory) {

  // AMD
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);

  // CommonJS
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));

  // Otherwise export into root
  } else {
    root.Requester = factory(root.$);
  }
}(this, function($) {

  // Module definition

  var MyModule = {
    // ...
  };

  return MyModule;
}));
