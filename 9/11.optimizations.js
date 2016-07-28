
// Slow
coll.forEach(function(obj) {
  var text = document.querySelector('.box').textContent;
  obj.text = text;
})

// Fast
var text = document.querySelector('.box').textContent;

coll.forEach(function(obj) {
  obj.text = text;
})



// Slow
var ul = document.createElement('ul');

coll.forEach(function(li) {
  ul.appendChild(li)
});

document.body.appendChild(ul);

// Fast
/* Use `innerHTML` if DOM represented as a string */

var ul = document.createElement('ul');
var fragment = document.createDocumentFragment();

coll.forEach(function(li) {
  fragment.appendChild(li)
});

ul.appendChild(fragment);
document.body.appendChild(ul);



// Slow
for (var count = 0; count < 15000; count++) {
    document.getElementById('here').innerHTML += 'a';
}

// Fast
var content = '';
for (var count = 0; count < 15000; count++) {
    content += 'a';
}
document.getElementById('here').innerHTML += content;



// Slow
document.getElementById('my').style.top = "10px";
document.getElementById('my').style.left = "10px";
document.getElementById('my').style.color = "#dad";

// Fast
var mysty = document.getElementById('my').style;
mysty.top = "10px";
mysty.left = "20px";
mysty.color = "#dad";

// Faster
var csstext = "; top: 10px; left: 10px; color: #dad;";
document.getElementById('my').style.cssText += csstext



// Slow
var coll = document.getElementsByTagName('div');
for (var count = 0; count < coll.length; count++) {
    /* do stuff */
}

// Fast
var coll = document.getElementsByTagName('div'),
    len = coll.length;
for (var count = 0; count < len; count++) {
    /* do stuff */
}


/* What forces layout / reflow
 * https://gist.github.com/paulirish/5d52fb081b3570c81e3a
 */

/* Performance tips
 * https://github.com/handsontable/handsontable/wiki/JavaScript-&-DOM-performance-tips
 */
