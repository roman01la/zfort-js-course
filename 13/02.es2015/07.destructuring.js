
/* Array Matching */
const arr = [1, 2, 3, 4];
const [a, , b] = arr;
a // 1
b // 3

const [val1, val2] = getTwoVals();


/* Object Matching */
const { x: xnum, z: znum } = { x: 1, y: 2, z: 3 };
xnum // 1
znum // 3


/* Object Matching: Shorthand Notation */
const { x, z } = { x: 1, y: 2, z: 3 };
x // 1
z // 3

const { name, email } = getUser();


/* Object Matching: Deep Matching */
const { name, address: { street: st, house } } = getUser();
name // 'John'
st // 'Wall Street'
house // 45

function getUser() {
  return {
    name: 'John',
    address: {
      street: 'Wall Street',
      house: 45
    }
  };
}


/* Object + Array Matching */
const { items: [{ num }, [x, y]] } = { items: [{ num: 1 }, [2, 3]] };


/* Parameter Matching */
el.onclick = function({ target: { value } }) {
  console.log(value);
};

function initApp(el, { opt1, opt2 }) {
  // ...
}

[{ x: 1, y: 0, z: 8 }, { x: 2, y: 0, z: 2 }]
  .map(({ x, y }) => ({ x, y }));


/* Fail-Soft Destructuring */
const [x, y, ...a] = [1, 2, 3, 4, 5];

function initApp(el, { name = 'generic name', opt2 }) {
  // ...
}
