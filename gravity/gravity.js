let ball;

function setup() {
  createCanvas(640, 480);
  ball = new Ball(width/2, height/2, 15);

}

function draw() {
  background("#2b3e50");
  ball.update();
  ball.show();

}
