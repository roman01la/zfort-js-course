// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

// RangeError

function recur() {
  recur();
}

recur(); // Uncaught RangeError: Maximum call stack size exceeded


// ReferenceError

x // Uncaught ReferenceError: x is not defined


// SyntaxError

var a = } // Uncaught SyntaxError: Unexpected token }


// URIError

decodeURI('%') // Uncaught URIError: URI malformed
