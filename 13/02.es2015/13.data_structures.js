/* Set */

const coll = new Set([1, 2, 3, 1, 0, 3]); // Set {1, 2, 3, 0}

coll.size // 4
coll.add(1); // Set {1, 2, 3, 0}
coll.has(1); // true

Array.from(coll)

[...coll] // [1, 2, 3, 0]

for (let x of coll) {
  console.log(x);
}



/* Map */

const map = new Map();

const user = { name: 'John' };

map.set('key', 'value'); // Map {"key" => "value"}
map.set(user, [1, 2, 3, 4]);
map.set([{ name: 'John' }], 'Hello!');

map.size // 3

map.get('key'); // 'value'
map.get(user); // [1, 2, 3, 4]

map.keys(); // MapIterator {"key", Object {name: "John"}, [Object]}
map.values(); // MapIterator {"value", [1, 2, 3, 4], "Hello!"}
map.entries(); // MapIterator {["key", "value"], [Object, Array[4]], [Array[1], "Hello!"]}

for (let [key, val] of map) {
  console.log(key, val);
}

for (let key of map.keys()) {
  console.log(key);
}




/* WeakSet, WeakMap */
// http://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap

var map = new WeakMap();

// private state
const MyClass = (function() {

  const privateData = new WeakMap();

  return class MyClass {
    constructor(name, age) {
      privateData.set(this, { name, age });
    }
    getUserInfo() {
      const { name, age } = privateData.get(this);
      return `User: ${name} of age ${age}.`;
    }
  }

})();



// bind data to DOM

const DomMap = new WeakMap();

const button = document.querySelector('.button');

DomMap.set(button, { clicks: 0 });

button.addEventListener('click', function() {
  const clicks = DomMap.get(this).clicks + 1;
  DomMap.set(this, { clicks });
});
