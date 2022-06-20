<script src="javascripts/p5.min.js" type="text/javascript" ></script>
<script type="text/javascript" >
let dy = 1;
let dx = 1;
let x = 200;
let y = 50;
let r = 30

function setup() {
	var myCanvas = createCanvas(560, 315);
	myCanvas.parent("jstest");
	fill("#ffff33");
}
	
function draw() {
    background(204);
    circle(x, y, r)
    y = y + dy;
    x = x + dx;
    if (y >= height - 15) {
        dy = -1;
        y = height - 15;
    }
    if (x >= width - 15) {
        dx = -1;
        x = width - 15;
    }
    if (y <= 15) {
        dy = 1;
        y = 15
    }
    if (x <= 15) {
        dx = 1;
        x = 15
    }
}
</script>

# P5.js und MacDown

Man kann tatsächlich P5.js-Skripte in MacDown entwickeln und live anzeigen lassen.

<div id="jstest"></div>

Das sieht dann so wie oben aus. Und den Quellcode kann man auch anzeigen:

~~~javascript
let dy = 1;
let dx = 1;
let x = 200;
let y = 50;
let r = 30

function setup() {
	var myCanvas = createCanvas(560, 315);
	myCanvas.parent("jstest");
	fill("#ffff33");
}
	
function draw() {
    background(204);
    circle(x, y, r)
    y = y + dy;
    x = x + dx;
    if (y >= height - 15) {
        dy = -1;
        y = height - 15;
    }
    if (x >= width - 15) {
        dx = -1;
        x = width - 15;
    }
    if (y <= 15) {
        dy = 1;
        y = 15
    }
    if (x <= 15) {
        dx = 1;
        x = 15
    }
}
~~~
