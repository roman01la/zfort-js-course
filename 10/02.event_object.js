// https://learn.javascript.ru/obtaining-event-object

function handleEvent(event) {
  console.log(event);
}

var button = document.querySelector('.btn');

button.addEventListener('click', handleEvent);

/*

  event.type --> "click"
  event.currentTarget --> button
  event.clientX / event.clientY --> click coords

*/
