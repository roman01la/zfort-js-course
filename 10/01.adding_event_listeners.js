// https://learn.javascript.ru/introduction-browser-events

// Event handler
function sayHi() {
  console.log('Hi!');
}



// HTML

/*

  <button onclick="sayHi()">Click me!</button>

*/



// Element property

var button = document.querySelector('.btn');

button.onclick = sayHi;
delete button.onclick;



// Element.addEventListener

var button = document.querySelector('.btn');

button.addEventListener('click', sayHi);
button.removeEventListener('click', sayHi);



// IE8

var button = document.querySelector('.btn');

button.attachEvent('onlick', sayHi);
button.detachEvent('onlick', sayHi);
