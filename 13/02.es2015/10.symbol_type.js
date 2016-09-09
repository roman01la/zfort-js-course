// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Symbol

// unique and immutable

const mySym = Symbol('my symbol');

typeof mySym // "symbol"

const obj = {};
obj[mySym] = 1; // {Symbol(my symbol): 1}
obj[mySym] // 1
obj[Symbol('my symbol')] // undefined



const MyClass = (function() {

  const key = Symbol('private key');

  return class Shape {
    constructor(id, x, y, privateData) {
      this.id = id;
      this[key] = privateData;
      this.move(x, y);
    }
    move(x, y) {
      this.x = x;
      this.y = y;
    }
  }
})();



const mySym = Symbol('my symbol');

const obj = {};
obj[mySym] = 1;

const syms = Object.getOwnPropertySymbols(obj); // [Symbol(my symbol)]

obj[syms[0]] // 1


/* Global Symbols */

const mySym = Symbol.for('my symbol');
const sym = Symbol.for('my symbol');

sym === mySym // true

Symbol.keyFor(mySym); // "my symbol"


/* Well-known symbols */

Symbol.iterator
Symbol.hasInstance
Symbol.isConcatSpreadable
// ...
