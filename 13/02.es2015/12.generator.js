function* fibonacci(n) {
  let iter = 0, pre = 0, cur = 1;
  while (iter < n) {
    [ pre, cur ] = [ cur, pre + cur ];
    iter++;
    yield cur; // <--- stop until next `next` call
  }
}

for (let i of fibonacci(5)) {
  console.log(i); // 1, 2, 3, 5, 8
}



const iter = fibonacci(5);

iter.next(); // {value: 1, done: false}
iter.next(); // {value: 2, done: false}
iter.next(); // {value: 3, done: false}
iter.next(); // {value: 5, done: false}
iter.next(); // {value: 8, done: false}
iter.next(); // {value: undefined, done: true}



const [a, b, c, ...rest] = fibonacci(5);
//     1  2  3  [5, 8]


// Co-routines
async(function*() {
  const [{ id }] = yield fakeFetch('/users');
  const friends = yield fakeFetch(`/users/${id}/friends`);
  return friends.map(({ name }) => name);
})
.then((friends) => console.log(friends)); // ['John', 'Mark']

// runner function
function async(gen) {
  const iter = gen();
  return new Promise((resolve, reject) => {
    function loop(value) {
      let result;
      try {
        result = iter.next(value);
      } catch (err) {
        reject(err);
      }
      if (result.done) {
        resolve(result.value);
      } else if (result.value instanceof Promise) {
        result.value.then(loop, reject);
      } else {
        loop(result.value);
      }
    }
    loop();
  });
}

function fakeFetch(url) {
  if (url === '/users') {
    return Promise.resolve([{ id: 1 }]);
  }
  if (url === '/users/1/friends') {
    return Promise.resolve([{ name: 'John' }, { name: 'Mark' }]);
  }
}

// Generator methods
class Clz {
  *bar() {
    // ...
  }
}

const obj = {
  *foo() {
    // ...
  }
}
