

const name = 'John';
console.log(`Hello! My name is ${name}.`); // Hello! My name is John.



i18n`Welcome to ${'USA'}, you are visitor number ${1000}!`
// "Besucher Nr. 1000, willkommen bei USA!"


const dictionary = {
  'Welcome to {0}, you are visitor number {1}!': 'Besucher Nr. {1}, willkommen bei {0}!',
};

function i18n(literals, ...values) {
  let count = 0;
  const key = literals.reduce((res, str, idx) => {
    if (literals[idx + 1]) {
      return res + str + '{'+(count++)+'}';
    } else {
      return res + str;
    }
  }, '');

  const translation = dictionary[key];

  return values.reduce((res, val, idx) => {
    return res.replace('{'+idx+'}', val);
  }, translation);
}
