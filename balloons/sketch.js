let bg;
let alice;
let balloons = [];
const numBalloons = 20;

function preload() {
  bg = loadImage("data/landscape.png");
  b0 = loadImage("data/balloon0.png");
  b1 = loadImage("data/balloon1.png");
  b2 = loadImage("data/balloon2.png");
  b3 = loadImage("data/balloon3.png");
  b4 = loadImage("data/balloon4.png");
  b5 = loadImage("data/balloon5.png");
  b6 = loadImage("data/balloon6.png");
  b7 = loadImage("data/balloon7.png");
  alice = loadImage("data/alice.png");
}

function setup() {
  createCanvas(800, 450);
  for (let i = 0; i < numBalloons; i++) {
    balloons.push(new Balloon());
  }
}

function draw() {
  image(bg, 0, 0);
  for (let balloon of balloons) {
    balloon.move();
    balloon.show();
  }

  image(alice, 30, 70);
}
