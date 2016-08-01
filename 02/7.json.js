// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON


// Example
// https://api.github.com/users/octocat/repos

var obj = {
  name: 'John',
  children: [
    {
      name: 'Anna'
    },
    {
      name: 'Rob'
    }
  ]
};

var json = JSON.stringify(obj); // {"name":"John","children":[{"name":"Anna"},{"name":"Rob"}]}

var newObj = JSON.parse(json);

// No JS comments in JSON, double quotes, no trailing commas
