/*
 * 1. Create function `sum` such that
 *    sum(3)(4)(9) === 16
 */

// function sum ...

function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c
    }
  }
}

console.log(
  sum(3)(4)(9) === 16
);


/*
 * 2. Create string buffer function
 *    which accumulates passed in strings one by one
 *    and returns resulting string when called without arguments
 */

// function makeBuffer ...

function makeBuffer() {
  var buffer = '';
  return function(str) {
    if (str) {
      buffer += str;
    } else {
      return buffer;
    }
  }
}

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

function walkAndCollect(tree) {

  var lsum = 0;
  var rsum = 0;

  if (tree.lchild) {
    lsum = walkAndCollect(tree.lchild);
  }

  if (tree.rchild) {
    rsum = walkAndCollect(tree.rchild);
  }

  return tree.value + lsum + rsum;
}

/*
walkAndCollect(tree, undefined)
  walkAndCollect(tree.lchild, 0)
    walkAndCollect(tree.lchild.lchild, 0)
    walkAndCollect(tree.lchild.rchild, 0)
  walkAndCollect(tree.rchild, 0)
    walkAndCollect(tree.rchild.lchild, 0)
    walkAndCollect(tree.rchild.rchild, 0)
*/

console.log(
  walkAndCollect(tree) === 254
);
