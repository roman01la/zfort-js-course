// https://learn.javascript.ru/descriptors-getters-setters

var human = {};

Object.defineProperty(human, 'age', {
  value: 0, // default value
  writable: true, // can be changed
  configurable: true, // descriptor can be changed
  enumerable: true, // property is visible in for...in and Object.keys()
});


Object.defineProperty(human, 'name', {
  get: function() {
    return this.firstname + ' ' + this.lastname;
  },
  set: function(name) {
    var flname = name.split(' ');
    this.firstname = flname[0];
    this.lastname = flname[1];
  }
});

var human = {
  get name() {
    return this.firstname + ' ' + this.lastname;
  },
  set name(name) {
    var flname = name.split(' ');
    this.firstname = flname[0];
    this.lastname = flname[1];
  }
}
