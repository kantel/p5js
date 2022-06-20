let balloon1;
let x, y, dx;

function preload() {
  balloon1 = loadImage("images/balloon1.png");
}

function setup() {
  let myCanvas = createCanvas(640, 320);
  myCanvas.parent("myCanvas");
  x = 20;
  dx = 0.5;
  y = random(20, 220);
}

function draw() {
  background(200);
  image(balloon1, x, y);
  x += dx;
  if (x > width + 20) {reset()};
}

function reset() {
  x = random(-50, -20);
  y = random(20, 220);
  dx = random(0.2, 0.7);
}