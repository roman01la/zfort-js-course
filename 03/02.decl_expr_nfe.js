// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

/* Function declaration */

add(1, 2); // 3

function add(a, b) {
  return a + b;
}


/* Function expression */

add(1, 2); // Uncaught TypeError: add is not a function

var add = function(a, b) {
  return a + b;
};


/* Named function expression */

var add = function myAdd(a, b) {

  myAdd(1, 2);

  return a + b;
};

add(1, 2); // 3

myAdd(1, 2); // Uncaught ReferenceError: myAdd is not defined
