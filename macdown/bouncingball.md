<script src="javascripts/p5.min.js" type="text/javascript" ></script>

# Bouncing Ball mit P5.js


<script type="text/javascript">

let ball;

function setup() {
	var myCanvas = createCanvas(560, 315);
	myCanvas.parent("bouncingball")
	ball = new Ball(200, 200, 40);
}

function draw() {
	background(204);
	ball.move();
	ball.show();
}

class Ball {

    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }
    
    show() {
        noStroke();
        fill(255, 0, 0);
        circle(this.x, this.y, this.r);
    }
}
</script>

<div id="bouncingball"></div>
