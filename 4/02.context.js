function fn() {
  console.log(this);
}

fn(); // Window


var person = {
  name: 'Roman',
  sayHi: function() {
    console.log('Hi ' + this.name + '!');
  },
}

person.sayHi(); // 'Hi Roman!'


var sayHi = person.sayHi;

sayHi(); // 'Hi !'

var obj = {
  fn: function(cb) {
    cb();
  }
}

obj.fn(function() {
  console.log(this)
});


var person = {
  name: 'Roman',
  sayHi: function() {

    setTimeout((function() {
      console.log('Hi ' + this.name + '!');
    }).bind(this));

  },
}
