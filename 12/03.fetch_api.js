// https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch
// https://davidwalsh.name/fetch

fetch('/user/123') // ---> Promise<Response>
  .then((res) => res.json()) // ---> Promise<JSON>
  .then((json) => console.log(json));


fetch('/user/123', {
  method: 'POST', // 'PUT', 'DELETE', ...
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify({ name: 'John' }), // Blob, FormData, String
})
.then((res) => {
  res.headers // response headers
  res.ok // was response successful?
  res.status // status code
  res.statusText // status text

  res.arrayBuffer() // read response stream as ArrayBuffer
  res.blob() // read response stream as Blob
  res.formData() // read response stream as FormData
  res.json() // read response stream as JSON
  res.text() // read response stream as Text
})
