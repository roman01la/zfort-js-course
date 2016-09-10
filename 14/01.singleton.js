// http://largescalejs.ru/

/* A singleton should be used when
   managing access to a shared resource */

// pubsub.js
let instance;

class PubSub {
  addEventListener() {
    // ...
  }
  removeEventListener() {
    // ...
  }
}

export function getInstance() {
  if (instance === undefined) {
    instance = new PubSub();
  }
  return instance;
}

////

// module1.js
import PubSub from 'pubsub';

const pubSub = PubSub.getInstance();

pubSub.addEventListener(fn1);

// module2.js
import PubSub from 'pubsub';

const pubSub = PubSub.getInstance();

pubSub.addEventListener(fn2);
