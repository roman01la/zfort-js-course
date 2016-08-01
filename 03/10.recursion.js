// https://learn.javascript.ru/recursion
// http://www.integralist.co.uk/posts/js-recursion.html
// http://www.2ality.com/2015/06/tail-call-optimization.html

function range(from, to, coll) {

  coll = coll || [];

  // termination case
  if (from === to) {
    return coll;
  } else { // base case
    coll.push(from);
    return range(from + 1, to, coll); // tail recursion
  }
}

range(2, 5); // [2, 3, 4]

/* execution stack

range(2, 5)
range(3, 5, [2])
range(4, 5, [2, 3])
range(5, 5, [2, 3, 4])
[2, 3, 4]

*/




function range(from, to) {
  if (from + 1 === to) {
    return from;
  } else {
    return [from].concat(range(from + 1, to));
  }
}

range(2, 5); // [2, 3, 4]

/* execution stack

range(2, 5)
[2].concat(range(3, 5))
[2].concat([3].concat(range(4, 5)))
[2].concat([3].concat(4))
[2].concat([3, 4])
[2, 3, 4]

*/




// Mutual recursion

function isEven(n) {
  if (n === 0) {
    return true;
  } else {
    return isOdd(n - 1);
  }
}

function isOdd(n) {
  if (n === 0) {
    return false;
  } else {
    return isEven(n - 1);
  }
}

isEven(3); // false

/* execution stack

isEven(3)
isOdd(2)
isEven(1)
isOdd(0)
false

*/
