// https://sourcemaking.com/design_patterns/mediator

class Tower {
  constructor() {
    this.isTrackBusy = false;
  }
  askToLand(plane) {
    if (!this.isTrackBusy) {
      this.isTrackBusy = true;
      setTimeout(() => plane.land(), 1000);
    }
  }
}

class Plane {
  land() {
    this.landed = true;
  }
}

const tower = new Tower();

const plane1 = new Plane();
const plane2 = new Plane();
const plane3 = new Plane();

tower.askToLand(plane1); // landing
tower.askToLand(plane2); // not landed
tower.askToLand(plane3); // not landed
