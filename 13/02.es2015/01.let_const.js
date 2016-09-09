// http://es6-features.org/
// https://github.com/lukehoban/es6features

if (true) {
  let y = 2;
  const z = 3;
}

console.log(y); // Uncaught ReferenceError: y is not defined
console.log(z); // Uncaught ReferenceError: z is not defined

const a = 1;
a = 2; // Uncaught TypeError: Assignment to constant variable.

const b; // Uncaught SyntaxError: Missing initializer in const declaration

const obj = { x: 1 };
obj.y = 2;
console.log(obj); // {x: 1, y: 2}
