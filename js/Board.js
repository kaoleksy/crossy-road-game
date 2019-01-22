class Board extends GameElement {
    constructor(rowImagesUrl, numRows, numCols) {
        super();
        this.rowImagesUrl = rowImagesUrl;
        this.numRows = numRows;
        this.numCols = numCols;
    }

    loadWaterField(ctx) {
        let water = this.rowImagesUrl[0];
        for(let col = 0; col < this.numCols; col++) {
            ctx.drawImage(Resources.get(water), col * 101, 0);
        } 
    }

    loadStoneField(ctx) {
        let stone = this.rowImagesUrl[1];
        for(let row = 1; row < 4; row++){
            for(let col = 0; col < this.numCols; col++) {
                ctx.drawImage(Resources.get(stone), col * 101, row * 83);
            }
        }
    }

    loadGrassField(ctx) {
        let grass = this.rowImagesUrl[2];
        for(let row = 4; row < 6; row++){
            for(let col = 0; col < this.numCols; col++) {
                ctx.drawImage(Resources.get(grass), col * 101, row * 83);
            }
        }
    }

    render(ctx) {
        ctx.clearRect(0, 0, 606, 505)
        this.loadWaterField(ctx);
        this.loadStoneField(ctx);
        this.loadGrassField(ctx);
    }
}