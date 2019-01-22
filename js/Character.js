class Character extends GameElement {
    constructor(x, y, shapeUrl) {
        super();
        this.x = x;
        this.y = y;
        this.shapeUrl = shapeUrl;
    }

    get getX() {
        return this.x;
    }

    set setX(x) {
        this.x = x;
    }

    get getY() {
        return this.y;
    }

    set setY(y) {
        this.y = y;
    }

    get getShapeUrl() {
        return this.shapeUrl;
    }

    set setShapeUrl(shapeUrl) {
        this.shapeUrl = shapeUrl;
    }
}