// http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html

// global scope
var x = 1;

function fn1() {

  console.log(x); // 1

  // locally scoped in fn1
  y = 1;

  // scope shadowing
  var x = 2;

  function a() {
    y = 1
    console.log(y)
  }
}


function fn2() {

  // locally scoped in fn2
  // scope shadowing
  var x = 2;

  console.log(x); // 2
}

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  });
}
