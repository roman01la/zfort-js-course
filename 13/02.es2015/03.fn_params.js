
/* Default parameters */

const defaultOpts = {};

function init(element, opts  defaultOpts) {
  // ...
}

const sum = (x = 0, y = 0) => x + y;


function getFullName(fname, lname = findByFName(fname)) {
  return fname + ' ' + lname;
}

function findByFName(fname) {
  if (fname === 'John') {
    return 'Doe';
  }
}


/* Rest parameters */

function sum(x, y, ...nums) {
  return x + y + nums.length;
}

sum(1, 2, 3, 4, 5); // 6


function fn(...args) {
  return args.map((v) => v + 1);
}
