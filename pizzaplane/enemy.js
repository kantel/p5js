// Class Enemy
class Enemy {

    constructor(_x, _y, _im) {
        this.x = _x;
        this.y = _y;
        this.img = _im;
        this.w = this.img.width;
        this.h = this.img.height;
        this.speed = random(2, 5);
    }

    reset() {
        this.x = width + random(30, 100);
        this.y = random(10, height - 100);
        this.speed = random(2, 5);
    }

    update() {
        this.x -= this.speed;
        if (this.x < - 30) {
            this.reset();
        }
    }

    display() {
        image(this.img, this.x, this.y);
    }
}