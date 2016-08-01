// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

[] instanceof Array // true
[].__proto__ === Array.prototype // true

Pokemon.isPokemon = function(target) {
  return target instanceof Pokemon;
}

Pokemon.prototype.attack = function(target) {
  if (Pokemon.isPokemon(target)) {
    // perform attack
  }
}
