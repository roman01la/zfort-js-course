// https://learn.javascript.ru/dispatch-events

var btn = document.getElementById('btn');

btn.addEventListener('my_event', function() {
  console.log('DONE!');
});



var customEvent = new Event('my_event');

btn.dispatchEvent(customEvent);
