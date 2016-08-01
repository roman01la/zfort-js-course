var DrunkError = function(name) {
  Error.call(this, name);

  this.name = 'DrunkError';
  this.message = name + ' is too drunk';

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, DrunkError);
  } else {
    this.stack = (new Error()).stack;
  }
}



var person = {
  name: 'Roman',
  numberOfBeersConsumed: 5,
}

function drive(person) {
  if (person.numberOfBeersConsumed > 2) {
    throw new DrunkError(person.name);
  } else {
    console.log(person.name + ' is driving well');
  }
}

drive(person);
