// https://learn.javascript.ru/bind
// http://getinstance.info/articles/javascript/call-apply-and-bind-functions/

function fn() {
  console.log(this);
}


fn(); // Window

fn.apply({ x: 1 }); // { x: 1 }
fn.apply({ x: 1 }); // { x: 1 }

var myFn = fn.bind({ x: 1 });


$(selector).on('click', function() {
  console.log(this.x);
}, { x: 1 });

var person = {
  name: 'Roman',
  sayHi: function() {
    console.log('Hi ' + this.name + '!');
  },
  init: function(element) {
    var handler = this.sayHi.bind(this);
    element.addEventListener('click', handler, false);
    element.removeEventListener('click', handler, false);
  }
}
