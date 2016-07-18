// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments

function fn(a,b) {
  return arguments;
}

fn(1, 2, 3); // [1, 2, 3]




function fn() {
  var args = Array.prototype.slice.call(arguments); // prevents optimizations in V8
  return args;
}

fn(1, 2, 3); // [1, 2, 3]



function sum() {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(sum, x) {
    return sum + x;
  }, 0);
}

sum(1, 7, 2, 0, 9); // 19
