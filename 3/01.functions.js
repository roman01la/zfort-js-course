/*

function name(parameters) {
  body
}

*/

function add(a, b) {
  return a + b;
}


/*

fn(arguments);

*/

add(1, 2);


/* Functions are first-class citizens */

// function can accept functions
function map(fn, coll) {
  return coll.map(fn);
}

map(function(n) { return n + 1; }, [1, 2, 3]); // [2, 3, 4]


// and return functions
function map(fn) {
  return function(coll) {
    return coll.map(fn);
  };
}

map(function(n) { return n + 1; })([1, 2, 3]); // [2, 3, 4]
