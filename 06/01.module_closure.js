// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

// IIFE (immediately-invoked function expression)
var MyModule = (function(global, OtherModule) {

  // namespace
  var MyModule = {};

  // private variable
  var x = 1;

  // private function
  function double(x) {
    return x * 2;
  }

  // public API
  MyModule.getX = function() {
    return x;
  }
  MyModule.setX = function(nextX) {
    x = nextX;
  }
  MyModule.getDoubleX = function() {
    return double(x);
  }

  // exporting module

  // window.MyModule
  // global.MyModule
  return MyModule;
})(window, OtherModule); // importing dependencies


/* ========================== */

MyModule.getX(); // 1
MyModule.setX(5);
MyModule.getDoubleX(); // 25
