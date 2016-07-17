function fn() {

  var a = 1;

  // closure
  function innerFn() {

    return 1 + a;
  }

  return innerFn();
}

fn(); // 2




function fn() {

  var a = 1;

  // closure
  return function innerFn() {

    return 1 + a;
  }
}

var myFn = fn();

myFn(); // 2
