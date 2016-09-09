
const inc = (x) => x + 1;
const inc = x => x + 1; // only for single argument functions

const sum = (x, y) => x + y; // implicit return

const sum = (x, y) => {
  console.log(x, y);
  return x + y; // explicit return
};

const getObj = (x) => ({ x: 1 }); // object as expression


const obj = {
  name: 'John Doe',
  sayHi: function() {
    setTimeout(() => console.log('Hi ' + this.name), 1000);
  }
};

obj.sayHi(); // 'Hi John Doe'
