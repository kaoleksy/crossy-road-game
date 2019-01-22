class Main {
    static main() {
        let enemy12 = new Enemy([50, 500, 300, 550]);
        enemy12.setX = -300;
        enemy12.setY = 225;
        let enemy21 = new Enemy([150, 300, 500, 280]);
        enemy21.setX = -100;
        enemy21.setY = 145;
        let enemy22 = new Enemy([150, 300, 290, 550]);
        enemy22.setX = -150;
        enemy22.setY = 145;
        let enemy31 = new Enemy([150, 300, 220, 310]);
        enemy31.setX = 0;
        enemy31.setY = 60;
        let enemy32 = new Enemy([150, 300, 500, 290]);
        enemy32.setX = -50;
        enemy32.setY = 60;
        
        let allEnemies = [enemy12, enemy21, enemy22, enemy31, enemy32];
        
        let player = new Player();
        player.setX = 200;
        player.setY = 315;
        player.setShapeUrl = 'images/char-pink-girl.png';
        let player2 = new Player();
        player2.setShapeUrl = 'images/char-boy.png';
        let player3 = new Player();
        player3.setShapeUrl = 'images/char-cat-girl.png';
        let player4 = new Player();
        player4.setShapeUrl = 'images/char-horn-girl.png';
        let player5 = new Player();
        player5.setShapeUrl = 'images/char-princess-girl.png';
        let board = new Board([
            'images/water-block.png',   
            'images/stone-block.png',   
            'images/grass-block.png',   
        ], 6, 5);
        let playerList = new PlayerList([player, player2, player3, player4, player5])
        
        let doc = document,
            canvas = doc.createElement('canvas'),
            context = canvas.getContext('2d');
            
        canvas.width = 505;
        canvas.height = 606;
        doc.getElementById("stats").appendChild(canvas);
        
        new GameController(context, player, playerList, allEnemies, board);
    }
}


Main.main();
