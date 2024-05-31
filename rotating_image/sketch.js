let python;

function preload() {
  python = loadImage("data/python.jpg");
}

function setup() {
  createCanvas(450, 450);
  imageMode(CENTER);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(220);
  translate(width/2, height/2);
  rotate(90);
  image(python, 0, 0, 450, 450);
  print("I did it, Babe!")
}