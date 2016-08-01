// https://learn.javascript.ru/default-browser-action

/*

<a id="link" href="/user.html">link</a>

*/

document.getElementById('link')
  .addEventListener('click', function(event) {
    event.preventDefault();
    console.log(this.href);
  });
