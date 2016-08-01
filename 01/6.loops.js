// https://learn.javascript.ru/while-for

/* `for` statement */


for (var i = 0; i < 10; ++i {

  console.log(i); // 1

  if (i === 3) {
    break;
  }
}


/* `while` statement */

var x = 10;

while (x) {
  console.log(x);
  x--;
}


/* `for...in` statement */

var obj = {
  a: 1,
  b: 2,
  c: 3
};

for (var prop in obj) {
  console.log(prop, obj[prop]);
}
