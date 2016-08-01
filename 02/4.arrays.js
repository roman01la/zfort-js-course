/* === Arrays === */
var arr = [1, 'hello', [3, 4], 5];

arr.length // 4

// set value
var arr = [];

arr[0] = 1; // [1]
arr[3] = 2; // [1, , , 2]

// get value
var arr = [1, 2, 3, 4];

// first
arr[0]; // 1

// last
arr[arr.length - 1]; // 4

//////

// add to end
arr.push('hello');

// add to front
arr.unshift('hey');

// remove last
arr.pop();

// remove first
arr.shift();

// find index
arr.indexOf('hello'); // 1

// remove by index
arr.splice(2, 1);

// check existence
[1, 2, 3, 4].includes(3); //true

// copy
arr.slice();

// merge
[1, 2].concat([3, 4]); // [1, 2, 3, 4]

// join element
['h', 'e', 'l', 'l', 'o'].join('-'); // 'h-e-l-l-o'

// reverse
[1, 2, 3].reverse(); // [3, 2, 1]

// sorting
[3, 4, 0, 1, 9].sort(); // [0, 1, 3, 4, 9]

[3, 4, 0, 1, 9].sort(function(a, b) {
  return a - b;
}); // [0, 1, 3, 4, 9]

[3, 4, 0, 1, 9].sort(function(a, b) {
  return b - a;
}); // [9, 4, 3, 1, 0]

// Iteration

var  a = [1, 2, 3, 4, 5]
a.forEach(function(n, idx) {
  a[idx] = m + 1;
});

users.map(function(user) {
  return user.name;
}); // [2, 3, 4, 5, 6]

[1, 2, 3, 4, 5].filter(function(n) {
  return n > 3;
}); // [4, 5]

[1, 2, 3, 4].reduce(function(a, b) {
  return a + b;
}, 0); // 10

[1, 2, 3].every(function(n) {
  return typeof n === 'number';
}); // true

[1, 2, 'hello', 3].some(function(n) {
  return typeof n === 'string';
}); // true

[1, 2, 3, 4].find(function(n) {
  return n % 3 === 0;
}); // 3


// combination
var users = [
  {
    name: 'John',
    age: 35,
    sex: 'male'
  },
  {
    name: 'Anna',
    age: 27,
    sex: 'female'
  },
  {
    name: 'Sonya',
    age: 47,
    sex: 'female'
  },
  {
    name: 'Robert',
    age: 25,
    sex: 'male'
  },
  {
    name: 'Mark',
    age: 17,
    sex: 'male'
  },
];

users
  .filter(function(user) {
    return user.age > 20;
  })
  .map(function(user) {
    return user.age;
  })
  .reduce(function(a, b) {
    return a + b;
  }); // 134
