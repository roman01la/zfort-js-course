

// Sync callback
[1, 2, 3].forEach(function(x) {
  console.log(x);
});


// Async callback
setTimeout(function() {
  console.log(1);
}, 100);


// Serial async execution with callbacks
// aka callback hell
$.get('/user', function(user) {
  $.get('/followers/' + user.name, function(followers) {
    console.log(followers);
  });
});

// Error handling
$.get('/user', function(err, user) {
  if (err) {
    console.log(err);
  } else {
    $.get('/followers/' + user.name, function(err, followers) {
      if (err) {
        console.log(err);
      } else {
        console.log(followers);
      }
    });
  }
});
