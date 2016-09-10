// XMLHttpRequest
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

// GET
var xhr = new XMLHttpRequest();

xhr.open('GET', '/users');

xhr.responseType = 'json';

xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.response);
  }
};

xhr.send();


// POST
var xhr = new XMLHttpRequest();

xhr.open('POST', '/users');

xhr.responseType = 'json';

// set HTTP headers
xhr.setRequestHeader('X-Header', 'HELLO!');

// download progress
xhr.onprogress = function(event) {
  var percentComplete = event.loaded / event.total;
  console.log(percentComplete);
};

xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText); // response body as text
    console.log(xhr.response); // text, json, arraybuffer, blob
    console.log(xhr.statusText);
  }
};

xhr.onerror = function() {
  if (xhr.status === 404) {

  }
}

xhr.send(JSON.stringify({
  name: 'John Doe'
}));

// cancel request
xhr.abort();
