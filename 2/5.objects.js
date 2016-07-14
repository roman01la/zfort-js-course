// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

/* === Objects === */

var obj = {};

// set value
obj.myProp = 1;
obj.my_prop = 2;
obj['my prop'] = 3;
obj[4] = 4; // { 4: 4 }
obj[{}] = 5 // { [object Object]: 5 }

// get value
obj.myProp // 1
obj.my_prop // 2
obj['my prop'] // 3

// delete value
delete obj.myProp // {}
obj.prop  = undefined

// Iteration
var obj = { x: 1, y: 2, z: 3 };

Object.keys(obj); // ['x', 'y', 'z']

Object.values(obj); // [1, 2, 3]

Object.entries(obj); // [['x',1], ...]

Object.keys(obj).forEach(function(key) {
  console.log(key, obj[key]);
});


// extend object
var obj = { x: { y: 7 } };

Object.assign(obj, { a: 1, x: { g: 9 } });

console.log(obj); // { a: 1, x: { g: 9 } } }
