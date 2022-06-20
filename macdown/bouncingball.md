<script src="javascripts/p5.min.js" type="text/javascript" ></script>

# Bouncing Ball mit P5.js


<script type="text/javascript">
let ball;

function setup() {
	var myCanvas = createCanvas(560, 315);
	myCanvas.parent("bouncingball");
	ball = new Ball(200, 200, 40 (255, 0, 0));
}

function draw() {
	background(204);
	ball.move();
	ball.show();
}

class Ball {

    constructor(x, y, r, c) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c;
        this.dy = 0;
        this.gravity = 0.1;
    }
    
    move() {
        this.dy = this.dy + this.gravity;
        this.y = this.y + this.dy;
        if (this.y <= 560) {
            this.dy = this.dy * -1;
            this.y = 560;
        }
}
    
    show() {
        noStroke();
        fill(this.c);
        circle(this.x, this.y, this.r);
    }
}
</script>

<div id="bouncingball"></div>
