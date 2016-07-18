// https://learn.javascript.ru/bind

function fn(a, b, c) {
  console.log(this, a, b, c);
}

fn(1, 2, 3); // Window, 1, 2, 3

/* `call` */
fn.call({ x: 1 }, 1, 2, 3); // { x: 1 }, 1, 2, 3


/* `apply` */
fn.apply({ x: 1 }, [1, 2, 3]); // { x: 1 }, 1, 2, 3


/* `bind` */
var myFn = fn.bind({ x: 1 }, 1, 2);

myFn(3); // { x: 1 }, 1, 2, 3
