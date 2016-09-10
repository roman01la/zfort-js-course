class ObserverList {
  constructor() {
    this.observerList = [];
  }
  add(obj) {
    this.observerList.push(obj);
  }
  count() {
    return this.observerList.length;
  }
  get(idx) {
    if (idx > -1 && idx < this.count()) {
      return this.observerList[idx];
    }
  }
  indexOf(obj, startIndex) {
    var i = startIndex;

    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i;
      }
      i++;
    }

    return -1;
  }
  removeAt(idx) {
    this.observerList.splice(idx, 1);
  }
}


class Subject {
  constructor() {
    this.observers = new ObserverList();
  }
  addObserver(observer) {
    this.observers.add(observer);
  }
  removeObserver(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  }
  notify( context ) {
    var observerCount = this.observers.count();
    for (var i=0; i < observerCount; i++) {
      this.observers.get(i).update( context );
    }
  }
}



class Observer {
  constructor(handler) {
    this.update = handler;
  }
}

const field = document.querySelector('.field');

field.subject = new Subject();

field.onclick = function(event) {
  this.subject.notify(event);
}

div1.observer = new Observer((event) => console.log(event));
div2.observer = new Observer((event) => console.log(event));
div3.observer = new Observer((event) => console.log(event));

field.addObserver(div1.observer);
field.addObserver(div2.observer);
field.addObserver(div3.observer);
