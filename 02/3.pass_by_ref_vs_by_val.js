
/* === Pass by value === */

var x = 1;
var y = x;

x = 2;

console.log(y); // 1



/* === Pass by reference === */

var obj1 = {};

var newObj = fn1(obj1)
var newObj2 = fn2(obj1)

newObj2

var obj2 = obj1;

obj1.prop = 1;

console.log(obj2); // { prop: 1 }


var arr1 = [];
var arr2 = arr1;


arr1[0] = 1;

console.log(arr2); // [1]
