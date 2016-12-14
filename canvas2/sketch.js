var s = function( p ) { // p could be any variable name
  var x = 100; 
  var y = 100;
  var speed = 2.0;
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255, 0, 0);
	x -= speed;
	if (x <= 0) {
		x = p.width;
	}
    p.rect(x,y,50,50);
  };
};
var myp5 = new p5(s, 'mc1');

// Sketch Two
var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(400, 200);
  };

  p.draw = function() {
    p.background(100);
    p.fill(0, 0, 255);
    x += speed; 
    if(x > p.width){
      x = 0; 
    }
    p.ellipse(x,y,50,50);

  };
};
var myp5 = new p5(t, 'mc2');