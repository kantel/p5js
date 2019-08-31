<script src="js/p5.min.js" type="text/javascript" ></script>

# P5.js und MacDown

Kann man P5.js-Scripte interaktiv in MacDown ausführen lassen? Ja, man kann!

<script type="text/javascript">
function setup() {
	var myCanvas = createCanvas(560, 315);
	myCanvas.parent("animation1130")
	fill("#ff0000");
	noStroke();
}

function draw() {
	background(204);
	ellipse(mouseX + 20, mouseY - 20, 30, 30);
}
</script>

<div id="animation1130"></div>

Diesen Quellcode hab ich in einem Skripttag eingebunden und zuvor `p5.min.js` geladen.

~~~javascript
function setup() {
	var myCanvas = createCanvas(560, 315);
	myCanvas.parent("animation1130")
	fill("#ff0000");
	noStroke();
}

function draw() {
	background(204);
	ellipse(mouseX + 20, mouseY - 20, 30, 30);
}
~~~

Damit steht einem *literate Programming* mit Markdown und JavaScript nichts mehr im Wege.
