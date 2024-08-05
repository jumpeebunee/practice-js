class Shape {
  constructor(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }

  getArea() {
    throw new Error("Area is must be implemented");
  }

  getPerimeter() {
    throw new Error("Perimeter is must be implemented");
  }
}

class Square extends Shape {
  constructor(side) {
    super("Square");
    this.side = side;
  }

  getArea() {
    return this.side * this.side;
  }

  getPerimeter() {
    return this.side * 4;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }

  getArea() {
    return this.radius ** 2 * Math.PI;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super("Rectangle");

    this.width = w;
    this.height = h;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return this.width * 2 + this.height * 2;
  }
}

const shapes = [new Circle(10), new Square(5), new Rectangle(4, 6)];

shapes.forEach((shape) => {
  console.log(`Type: ${shape.getType()}`);
  console.log(`Area: ${shape.getArea()}`);
  console.log(`Perimeter: ${shape.getPerimeter()}`);
  console.log("---------------------");
});
