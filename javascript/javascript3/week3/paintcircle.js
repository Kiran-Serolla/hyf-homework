const canvas = document.getElementById("circlecanvas");
let context = canvas.getContext("2d");
context.beginPath();
context.arc(175, 175, 50, 0, 2 * Math.PI);
context.stroke();
context.fillStyle = "red";
context.fill();
