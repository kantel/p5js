let enemy;
let player;

function setup() {
	let myCanvas = createCanvas(640, 320);
	myCanvas.parent("myCanvas");
  enemy = new Enemy(width/2 - 64, height/2 - 32);
  player = new Player(20, 20);
}

function draw() {
	background("#95e0f5");
  if (rectCollision(enemy, player)) {
    background("#817ac6");
  } else {
    background("#95e0f5");
  }
  enemy.show();
  player.update();
  player.show();
}

function rectCollision(r1, r2) {
  distanceX = (r1.x + r1.w/2) - (r2.x + r2.w/2);
  distanceY = (r1.y + r1.h/2) - (r2.y + r2.h/2);
  halfW = r1.w/2 + r2.w/2;
  halfH = r1.h/2 + r2.h/2;
  if (abs(distanceX) < halfW) {
    if (abs(distanceY) < halfH) {
      return true;
    }
  }
  return false;
}

class Enemy {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 128;
    this.h = 64;
  }
  
  show() {
    strokeWeight(1);
    fill("#c666e6");
    rect(this.x, this.y, this.w, this.h);
  }
}

class Player {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 32;
    this.h = 32;
  }
  
  update() {
    this.x = mouseX;
    this.y = mouseY;
  }
  
  show() {
    strokeWeight(1);
    fill("#9757a5");
    rect(this.x, this.y, this.w, this.h);
  }
}