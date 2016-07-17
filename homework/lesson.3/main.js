/*
 * 1. Create function `sum` such that
 *    sum(3)(4)(9) === 16
 */

// function sum ...

console.log(
  sum(3)(4)(9) === 16
);


/*
 * 2. Create string buffer function
 *    which accumulates passed in strings one by one
 *    and returns resulting string when called without arguments
 */

// function makeBuffer ...

var buffer = makeBuffer();

buffer('Hello');
buffer(', ');
buffer('world');
buffer('!');

console.log(
  buffer() === 'Hello, world!'
);


/*
 * 3. Create recursive function which walks a tree,
 *    computes sum of values of `value` fields
 *    and returns the final result when walked the whole tree
 */

var tree = {
  value: 1,
  lchild: {
    value: 3,
    lchild: {
      value: 9,
      lchild: {
        value: 45
      },
      rchild: {
        value: 2
      }
    },
    rchild: {
      value: 0
    }
  },
  rchild: {
    value: 6,
    lchild: {
      value: 90
    },
    rchild: {
      value: 1,
      lchild: {
        value: 6,
        lchild: {
          value: 90
        },
        rchild: {
          value: 1
        }
      }
    }
  }
};

// function walkAndCollect ...

console.log(
  walkAndCollect(tree) === 254
);
