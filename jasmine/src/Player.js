class Player extends Character {
    constructor() {
        super();
        this.eventKeyboard();
    }
    updatePosition() {
        return this.y;
    }

    render(ctx) {
        ctx.drawImage(Resources.get(this.shapeUrl), this.x, this.y);
    }

    handleKeyboard(key) {
        switch (key) {
            case "right":
                if (this.x < 400) {
                    this.x += 100;
                }
                break;
            case "left":
                if (this.x > 0) {
                    this.x -= 100;
                }
                break;
            case "up":
                if (this.y > -35) {
                    this.y -= 85;
                }
                break;
            case "down":
                if (this.y < 390) {
                    this.y += 85;
                }
                break;
        }
    }

    eventKeyboard() {
        document.addEventListener('keyup', (e) => {
            let allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };

            this.handleKeyboard(allowedKeys[e.keyCode]);
        });
    }
}