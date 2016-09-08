// https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications
// https://learn.javascript.ru/websockets

var connection = new WebSocket('ws://example.com/ws');

connection.onopen = function() {

  console.log('Now we can talk!');

  // ---->
  connection.send('Ping!');
};

// <----
connection.onmessage = function(event) {

  console.log(event.data);

  if (event.data === 'Bye!') {
    // ----x
    connection.close();
  } else {
    // ---->
    setTimeout(() => connection.send('Ping!'), 1000);
  }
};

connection.onclose = function(event) {
  if (event.wasClean) {
    console.log('No more talking');
  } else {
    console.log('Ooops!');
  }
};

connection.onerror = function() {
  console.log('Something went wrong!');
};
