

/* === setTimeout === */

// https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout

setTimeout(function() {
  console.log('Hey!');
}, 1000);

// with additional params
setTimeout(function(a, b, c) {
  console.log('Hey!', a, b, c);
}, 1000, 1, 2, 3);

// cancelling timeout
var id = setTimeout(function() {
  console.log('Hey!');
}, 1000);

clearTimeout(id);

// minimum delay is 4 ms
setTimeout(function() {
  console.log('Hey!');
});

// maximum delay is 2147483647 ms (~24.85 days)
setTimeout(function() {
  console.log('Hey!');
}, 2147483647 + 1);


/* === setInterval === */

// https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval

setInterval(function() {
  console.log('Hey!');
}, 1000);

// with additional params
setInterval(function(a, b, c) {
  console.log('Hey!', a, b, c);
}, 1000, 1, 2, 3);

// cancelling interval
var id = setInterval(function() {
  console.log('Hey!');
}, 1000);

clearInterval(id);

// minimum delay is 4 ms
setInterval(function() {
  console.log('Hey!');
});

// maximum delay is 2147483647 ms (~24.85 days)
setInterval(function() {
  console.log('Hey!');
}, 2147483647 + 1);
