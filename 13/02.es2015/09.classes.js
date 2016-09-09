
/* Definition */
class Shape {
  constructor(id, x, y) {
    this.id = id;
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

/* Inheritance */
class Rectangle extends Shape {
  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width  = width;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y);
    this.radius = radius;
  }
}

/* Base Class Access */
class Circle extends Shape {
  constructor(id, x, y, radius) {
    super(id, x, y); // <--- constructor
    this.radius = radius;
    super.move(x + 1, y + 1); // <--- method
  }
}

/* Static Members */
class Rectangle extends Shape {
  static defaultRectangle() {
    return new Rectangle('default', 0, 0, 100, 100);
  }
  constructor(id, x, y, width, height) {
    super(id, x, y);
    this.width  = width;
    this.height = height;
  }
}

var rect = new Rectangle('myrect', 10, 14, 89, 67);
var defRectangle = Rectangle.defaultRectangle();
