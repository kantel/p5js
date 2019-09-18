let balls = [];
const numOfBalls = 30

function setup() {
    let myCanvas = createCanvas(640, 360);
    // myCanvas.parent("myCanvas");
    for (let i = 0; i < numOfBalls; i++) {
        balls.push(new Ball());
        }
}

function draw() {
    background("#2b3e50");
    for (let ball of balls) {
        ball.checkEdges();
        ball.move();
        ball.show();
    }
}
