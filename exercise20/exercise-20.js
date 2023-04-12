class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate (value){
    if( value instanceof Square){
      this.value = value.side * value.side;
    }else if (value instanceof Rectangle){
      this.value= value.height * value.width / 2;
    }else if ( value  instanceof  Circle){
      this.value = (value.radius * value.radius)* Math.PI;
    }else{
      this.value = "this polygon does not exist";
    }
    return this.value;
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
