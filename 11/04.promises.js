// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

fetch('/users')
  .then(function(user) {
    return fetch('/followers/' + user.name);
  })
  .then(function(followers) {
    console.log(followers);
  })
  .catch(function(err) {
    console.log(err);
  });

/* Promise states:
   - pending
   - fulfilled
   - rejected
*/

// From callbacks to promises
function fetch(url) {

  return new Promise(function(resolve, reject) {

    var xhr = new XMLHttpRequest();

    // ...

    xhr.onload = function() {
      resolve(xhr.response)
    };

    xhr.onerror = function() {
      reject(xhr.status);
    };

    xhr.send();
  });
}


// Immediately resolved promise
Promise.resolve(value);

// Immediately rejected promise
Promise.reject(value);

// Parallel execution
Promise.all([p1, p2, p3])
  .then(function(result) {
    console.log(result); // [val1, val2, val3]
  }) // --> executed when all promises are fulfilled
  .catch(callback) // --> executed when at least one promise has been rejected

// Parallel execution, but resolves or rejects as soon as one of the promises resolves or rejects
Promise.race([p1, p2, p3])
  .then(callback) // --> executed as soon as one of the promises is fulfilled
  .catch(callback) // --> executed as soon as one of the promises is rejected
