// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode

'use strict';

// 1. eliminates some JavaScript silent errors by changing them to throw errors
// 2. fixes mistakes that make it difficult for JavaScript engines to perform optimizations
// 3. prohibits some syntax likely to be defined in future versions of ECMAScript

x = 1 // Uncaught ReferenceError: x is not defined

window = 1;
// Uncaught TypeError: Cannot assign to read only property 'window' of object '#<Window>'

var x = 1;
x.prop = 0; // Uncaught TypeError: Cannot create property 'prop' on number '1'

function fn(a, b, a) {
}
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context

function fn() { return this; }
fn(); // undefined

// Reserved words
// implements, interface, let, package, private, protected, public, static, yield
