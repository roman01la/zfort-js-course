// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

var error = new Error('message', 'file/name.js', 45)

error.stack // Stack trace

throw error;
