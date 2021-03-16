// circle calculator class defination
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getDiameter() {
    let diameter = this.radius * 2;
    console.log(diameter);
  }
  getCircumference() {
    let circumferance = 2 * this.radius * 3.14;
    console.log(circumferance);
  }

  getArea() {
    let area = 3.14 * (this.radius * this.radius);
    console.log(area);
  }
}
const circle = new Circle(10);
circle.getDiameter();
circle.getCircumference();
circle.getArea();
