let balloon = [];
let bg;
let x = [];
let y = [];
let dx = [];

numBalloons = 6;

function preload() {
  for (i = 0; i < numBalloons; i++) {
    balloon[i] = loadImage("images/balloon" + (i + 1) + ".png");
  }
  bg = loadImage("images/background.jpg");
}

function setup() {
  let myCanvas = createCanvas(940, 315);
  myCanvas.parent("myCanvas");
  
  for (i = 0; i < numBalloons; i++) {
    x[i] = random(width + 100, width + 500);
    y[i] = random(20, 100);
    dx[i] = random(-0.7, -0.2);
  }
}

function draw() {
  background(bg);
  for (i = 0; i < numBalloons; i++) {
    image(balloon[i], x[i], y[i]);
    x[i] += dx[i];
    if (x[i] <= -100) {
      x[i] = random(width + 100, width + 500);
      y[i] = random(20, 100);
      dx[i]= random(-0.7, -0.2);
    }
  }
}

