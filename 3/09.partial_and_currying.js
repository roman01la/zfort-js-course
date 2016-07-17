/* Order of function's arguments is important
 * for partial application and currying
 */

/* Partial application */
function onClick(a, b, c, event) {
  // ...
}

function partial(fn, a, b, c) {
  return function(event) {
    return fn(a, b, c, event);
  }
}

var handleClick = partial(onClick, 1, 2, 3);

element.addEventListener('click', handleClick);

// partial
function partial() {
  var fn = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1, arguments.length);

  return function() {
    var restArgs = Array.prototype.slice.call(arguments);
    return fn.apply(null, args.concat(restArgs));
  }
}


/* Currying */
function listen(type) {
  return function(element) {
    return function(handler) {
      return element.addEventListener(type, handler);
    }
  }
}

var onClick = listen('click');

var submitOnClick = onClick(function() {
  // ...
});

submitOnClick(button1);
submitOnClick(button2);


// currying
function curry(fn) {

  var arity = fn.length;

  return function _curry() {

    var args = Array.prototype.slice.call(arguments);

    if (args.length >= arity) {
      return fn.apply(null, args);
    } else {
      return function() {
        var args2 = Array.prototype.slice.call(arguments);
        return _curry.apply(null, args.concat(args2));
      }
    }
  };
}
