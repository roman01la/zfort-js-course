// https://learn.javascript.ru/behavior

/*

<button data-toggle-id="menu">toggle 1</button>
<button data-toggle-id="menu">toggle 2</button>

<div id="menu">...</div>

*/

document.addEventListener('click', function(event) {

  var id = event.target.dataset['toggle-id'];

  if (id) {
    var element = document.getElementById(id);
    element.hidden = !element.hidden;
  }
});
