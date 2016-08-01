// https://learn.javascript.ru/event-bubbling

var btn = document.querySelector('button');

// capturing phase
document.addEventListener('click', () => console.log('document'), true)

// target phase
btn.addEventListener('click', () => console.log('btn'))

// bubbling phase
document.body.addEventListener('click', () => console.log('body'))


// Stop event execution
event.stopPropagation();

// Stop event execution and other event handlers
event.stopImmediatePropagation();
