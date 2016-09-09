// http://www.2ality.com/2015/02/es6-iteration.html

const fibonacci = {
  [Symbol.iterator]() { // iterable protocol
    let pre = 0, cur = 1;
    return {
      next() { // iterator protocol
        [ pre, cur ] = [ cur, pre + cur ];
        return { done: false, value: cur }
      }
    }
  }
}

// for...of is an operator to iterate over iterables

for (let n of fibonacci) {
  if (n <= 1000) {
    console.log(n);
  } else {
    break;
  }
}

// iterate manually
const iter = fibonacci[Symbol.iterator]();

iter.next(); // {done: false, value: 1}
iter.next(); // {done: false, value: 2}
iter.next(); // {done: false, value: 3}
iter.next(); // {done: false, value: 5}

// custom iterator for collections
class ArrayMap extends Array {
  constructor(...args) {
    if (args.length % 2 === 0) {
      super(...args);
    } else {
      throw Error('ArrayMap collection accepts an even number of elements')
    }
  }
  [Symbol.iterator]() {

    let cur = 0;

    return {
      next: () => {

        const canNext = this[cur + 1] !== undefined;
        const value = [this[cur], this[cur + 1]];

        cur = cur + 2;

        if (canNext) {
          return { done: false, value };
        } else {
          return { done: true, value };
        }
      }
    };
  }
}

var coll = new ArrayMap('key1', 1, 'key2', 4, 'key3', 6);

for (let [key, val] of coll) {
  console.log(key, val);
}
