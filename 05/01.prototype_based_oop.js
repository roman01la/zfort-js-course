// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
// https://learn.javascript.ru/prototypes
// https://learn.javascript.ru/new-prototype

Array.prototype.map // function
Array.prototype.filter // function
Array.prototype.reduce // function

var coll = [1, 2, 3]; // new Array(1, 2, 3)

coll.map // function
coll.filter // function
coll.reduce // function


var obj = {};
  obj.__proto__ // Object.prototype
    Object.prototype.__proto__ // null


var coll = [];
  coll.__proto__ // Array.prototype
    Array.prototype.__proto__ // Object.prototype
      Object.prototype.__proto__ // null

var coll = [];
coll.hasOwnProperty('length') // coll
  coll.__proto__.hasOwnProperty // Array.prototype
    coll.__proto__.__proto__.hasOwnProperty // Object.prototype


coll.__proto__.__proto__.hasOwnProperty = 0;
coll.hasOwnProperty // 0

var obj = {};
obj.hasOwnProperty // 0
