class Enemy extends Character {
    constructor(speed) {
        super();
        this.shapeUrl = 'images/enemy-bug.png';
        this.speed = speed[Math.floor(Math.random() * speed.length)];
    }

    get getSpeed() {
        return this.speed;
    }

    set setSpeed(speed) {
        this.speed = speed;
    }

    updatePosition(dt) {
        if (this.x > 500) {
            this.x = -100;
        } else {
            this.x += this.speed * dt;
        }
    }

    render(ctx) {
        ctx.drawImage(Resources.get(this.shapeUrl), this.x, this.y);
    }

}