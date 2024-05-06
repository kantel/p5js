function preload() {
  face01 = loadImage("data/face01.png");
  face02 = loadImage("data/face02.png");
  face03 = loadImage("data/face03.png");
  face04 = loadImage("data/face04.png");
  face05 = loadImage("data/face05.png");
  face06 = loadImage("data/face06.png");
  face07 = loadImage("data/face07.png");
  face08 = loadImage("data/face08.png");
  face09 = loadImage("data/face09.png");
  face10 = loadImage("data/face10.png");
  face11 = loadImage("data/face11.png");
  face12 = loadImage("data/face12.png");
}

let faces = [];
const numFaces = 30;

function setup() {
  createCanvas(800, 480);
  imageMode(CENTER);
  background("#2b3e50");
  for (let i = 0; i < numFaces; i++) {
    faces.push(new Face());
  }
  print(faces.length);
}

function draw() {
  background("#2b3e50");
  for (let face of faces) {
    face.checkEdges();
    face.move();
    face.show();
  }
}