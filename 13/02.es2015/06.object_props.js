

/* Property Shorthand */

const x = 1;
const y = 2;

const obj = { x, y }; // {x: 1, y: 2}

function createUser(fname, lname, email) {
  return {
    id: Math.random(),
    fullName: `${fname} ${lname}`,
    fname,
    lname,
    email,
  };
}


/* Computed Property Names */

const obj = {
  ['num-' + 1]: '#1',
  ['num-' + sum(1, 2, 3)]: sum(1, 2, 3)
};
// {"num-1": "#1", "num-6": 6}


/* Method Properties */

const obj = {
  name: 'John',
  getName() {
    return this.name;
  }
};
