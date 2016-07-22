// https://learn.javascript.ru/class-inheritance
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create


// helper function to inherit from target
Function.prototype.inherit = function(target) {
  this.prototype = Object.create(target.prototype);
}

// base class
var Pokemon = function(name) {

  // class properties
  this.name = name;
  this.health = 100;
}

// class methods which can be inherited
Pokemon.prototype.talk = function() {
  console.log('I am ' + this.name);
}

Pokemon.prototype.attack = function(target) {
  var damage = Math.round(Math.random() * 10);
  target.health = target.health - damage;
  console.log(this.name + ' caused ' + damage + ' points of damage to ' + target.name);
}




var Pikachu = function(burstDamage) {

  // call Pokemon class constructor function
  // to get class properties
  Pokemon.call(this, 'Pikachu');

  this.burstDamage = burstDamage;
}

// inherit from Pokemon class
Pikachu.prototype = Object.create(Pokemon.prototype);

// specialAttack is unique to Pikachu instance objects
Pikachu.prototype.specialAttack = function(target) {

  var totalDamage = this.burstDamage.reduce(function(a,b) { return a + b; });

  this.burstDamage.forEach(function(damage) {
    target.health = target.health - damage;
  });

  console.log('SPECIAL ATTACK!');
  console.log(this.name + ' caused ' + totalDamage + ' points of damage to ' + target.name);
}




var Bulbasaur = function() {

  // alternative call of Pokemon class constructor function
  this.__proto__.constructor.call(this, 'Bulbasaur');
}

// inherit from Pokemon class
Bulbasaur.inherit(Pokemon);

// use inherited Pokemon's class method within Bulbasaur's method with the same name
Bulbasaur.prototype.attack = function() {
  Pokemon.prototype.attack.apply(this, arguments);
  this.health = this.health + Math.round(Math.random() * 5);
}




var pikachu = new Pikachu([3, 4, 9, 1]);
var bulbasaur = new Bulbasaur();

pikachu.talk();
bulbasaur.talk();

pikachu.attack(bulbasaur);
bulbasaur.attack(pikachu);

pikachu.specialAttack(bulbasaur);
