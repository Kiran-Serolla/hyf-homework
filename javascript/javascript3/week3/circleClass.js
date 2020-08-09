const canvas = document.getElementById("circlecanvas");
const context = canvas.getContext("2d");

// circle class definition

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  //  method to draw circle
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    context.stroke();
    context.fillStyle = this.fillColor;
    context.fill();
  }
}

// instances of class

/* const c1 = new Circle(150, 150, 50, 0, 2 * Math.PI, "brown");
c1.draw();

const c2 = new Circle(250, 250, 50, 0, 2 * Math.PI, "green");
c2.draw();

const c3 = new Circle(400, 250, 100, 0, 2 * Math.PI, "yellow");
c3.draw(); */

/* setInterval(function () {
  for (var i = 0; i < 10; i++) {
    c1.draw();
    console.log("circle drawn");
  }
}, 100);
 */
