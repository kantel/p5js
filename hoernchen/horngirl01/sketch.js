let horngirl;

function preload() {
  horngirl = loadImage("data/horngirl.png");
}

function setup() {
  createCanvas(600, 400);
  imageMode(CENTER);
  // horngirl = loadImage("data/horngirl.png");
  noLoop();
}

function draw() {
  background(92, 132, 168);
  image(horngirl, width/2, height/2, 100, 100);
}

