// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers


/* Memoization */

function performExpensiveComputation() {
  // ...
}

function memoize(fn) {
  // ...
}

const memzd = memoize(performExpensiveComputation);

memzd(10); // takes 1000ms to execute
memzd(10); // returns cached result immediately




/* `arguments` */

function fn() {
  const args = Array.prototype.slice.call(arguments); // deopt
}
