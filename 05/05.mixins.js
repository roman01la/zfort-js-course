/*
  When to use mixins?
  - You want to provide a lot of optional features for a class
  - You want to use one particular feature in a lot of different classes
  - You want multiple inheritance
*/

// helper function
Function.prototype.extend = function(mixin) {
  this.prototype = Object.assign(this.prototype, mixin);
}




// class
var Pikachu = function() {

}

Pikachu.inherit(Pokemon);

// methods
Pikachu.prototype.method

// mixin
var Colorizable = {
  setColor: function(color) {
    this.color = color;
  },
  matchColors: function(target) {
    return this.color === target.color;
  }
};

Pikachu.extend(Colorizable);
Bulbasaur.extend(Colorizable);

var pikachu = new Pikachu();
var bulbasaur = new Bulbasaur();

pikachu.setColor('yellow');
bulbasaur.setColor('green');

pikachu.matchColors(bulbasaur); // false
