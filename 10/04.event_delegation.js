// https://learn.javascript.ru/event-delegation

/*

Event declaration

<div>
  <button onclick="handle1()">click</button>
  <div>
    <button onclick="handle2()">click</button>
  </div>
</div>

*/

/*

Event delegation

<div id="wrapper" onclick="handle()">
  <button id="btn-1">click</button>
  <div>
    <button id="btn-2">click</button>
  </div>
</div>

*/

var btn1 = document.querySelector('#btn-1');
var btn2 = document.querySelector('#btn-2');

document.querySelector('#handle')
  .addEventListener('click', function(event) {
    switch (event.target) {
      case btn1:
        handle1(event);
      case btn2:
        handle2(event);
    }
  });
