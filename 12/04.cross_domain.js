/* CORS */

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
// http://www.html5rocks.com/en/tutorials/cors/
// http://enable-cors.org/

// ----> Origin: http://www.foo.com
// <---- Access-Control-Allow-Origin: http://www.foo.com
// <---- Access-Control-Allow-Methods: PUT, DELETE
// <---- Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept


// Cookies
xhr.withCredentials = true;

// <---- Access-Control-Allow-Credentials: true



/* JSONP (JSON with Padding) */

// <script src="example.com/jsonp?callback=myCallback"></script>
// <---- myCallback({ some: data });

function myCallback(data) {
  // ...
}
