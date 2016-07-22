// https://learn.javascript.ru/native-prototypes
// https://learn.javascript.ru/classes

/*

  Function                     Object
 -----------            --------------------
| prototype |   --->   | Prototype Instance |
 -----------            --------------------

*/

// Constructor function
var Person = function() {

};

/*
{
  constructor: Person
}
*/
Person.prototype

Person === Person.prototype.constructor // true

// Instance of Person
var roman = new Person();

roman.constructor === Person // true



var Pokemon = function(name) {
  this.name = name;
};

Pokemon.prototype.talk = function() {
  console.log('I am ' + this.name);
}

var pikachu = new Pokemon('Pikachu');
pikachu.talk();

var bulbasaur = new Pokemon('Bulbasaur');
bulbasaur.talk();
