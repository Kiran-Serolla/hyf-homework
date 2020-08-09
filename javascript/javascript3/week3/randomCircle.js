/*randomCircle class draws a new circle with random x & y axis, radius adn color every 100 ms */

// setting canvas width  and height to the window width and height
context.canvas.width = window.innerWidth;
context.canvas.height = window.innerHeight;

// drawRandom  function draws a randon circle
function drawRandom() {
  let x = Math.floor(Math.random() * context.canvas.width);
  let y = Math.floor(Math.random() * context.canvas.height);
  let r = Math.floor(Math.random() * 100);
  let fillColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const randomCircle = new Circle(x, y, r, 0, 2 * Math.PI, fillColor);
  randomCircle.draw();
}
// draws a random circle every 100 ms
setInterval(() => {
  drawRandom();
}, 100);

// draw circle around the cursor using 'mousemove' event listner

document.addEventListener("mousemove", (e) => {
  let x = e.x;
  let y = e.y;
  const circle = new Circle(
    x,
    y,
    50,
    0,
    2 * Math.PI,
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  circle.draw();
});
