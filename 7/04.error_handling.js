// https://www.sitepoint.com/proper-error-handling-javascript/
// https://learn.javascript.ru/exception

function fn() {
  throw new Error('oooops!');
}

try {
  fn();
} catch (error) {
  console.log(error.message); // 'oooops!'
}



// Errors in async code
try {
  setTimeout(function() {
    throw new Error();
  });
} catch (error) {
  console.log(error);
}

// Uncaught Error


// finally block
try {
  fn();
} catch (error) {
  console.log(error.message); // 'oooops!'
} finally {
 console.log('Code execution is done');
}


// global error handling
window.addEventListener('error', function(event) {
  ajax.post('report-error', error.message);
});
