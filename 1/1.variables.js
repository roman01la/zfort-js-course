// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Grammar_and_types

/* Declaration */
var x = 1;

y = 5 // z in global scope


/* Hoisting */
console.log(y); // undefined

var y = 2;


/* Scope */

function fn() {
  var x = 1;
}

fn();

console.log(x); // Uncaught ReferenceError: x is not defined



if (true) {
  var x = 1;
}

console.log(1); // 1
