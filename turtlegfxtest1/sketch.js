let hugo;
let pal = [];

function setup() {
  createCanvas(640, 480);
  background(4, 21, 31);
  pal = [
    color("#e65046"),
    color("#e26b43"),
    color("#415096"),
    color("#90a6d7"),
    color("#f0c044"),
    color("#019bb7"),
  ];
  hugo = createTurtle();
  hugo.pensize(1.5);
}

function draw() {
  hugo.pencolor(pal[frameCount%6]);
  hugo.forward(frameCount*0.8);
  hugo.right(61);
  if (frameCount > 300) {
    print("I did it Babe!");
    noLoop();
  }
}
