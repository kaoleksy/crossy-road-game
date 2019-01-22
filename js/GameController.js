var lastTime;
var score = 0;
var scoreField = document.getElementById("result");
var lives = 3;
var livesField = document.getElementById("lives");
class GameController {
    constructor(context, player, playerList, enemies, board) {
        this.context = context;
        this.player = player;
        this.playerList = playerList;
        this.enemies = enemies;
        this.board = board;
        Resources.load([
            'images/stone-block.png',
            'images/water-block.png',
            'images/grass-block.png',
            'images/enemy-bug.png',
            'images/char-boy.png',
            'images/char-cat-girl.png',
            'images/char-pink-girl.png',
            'images/char-horn-girl.png',
            'images/char-princess-girl.png'
        ]);
        Resources.onReady(this.startGame.bind(this));
    }


    updateGame(dt) {
        this.updateCharacters(dt);
        this.checkCollisions();
        this.checkIfPoint();
    }

    updateCharacters(dt) {
        this.enemies.forEach(function (enemy) {
            enemy.updatePosition(dt);
        });
        this.player.updatePosition();
    }

    checkCollisions() {
        this.enemies.forEach((enemy) => {
            if ((this.player.y >= enemy.y - 50 && this.player.y <= enemy.y + 50)
                && (this.player.x >= enemy.x - 50 && this.player.x <= enemy.x + 50)) {
                this.removeLife();
            }
        });
    }

    checkIfPoint() {
        if (this.player.y <= 0) {
            score++;
            scoreField.innerHTML = score;
            this.player.y = 315;
        }
    }

    resetButtonEvent() {
        document.getElementById("btn").addEventListener('click', () => {
            this.resetGame();
        })
    }

    resetGame() {
        score = 0;
        lives = 3;
        scoreField.innerHTML = 0;
        livesField.innerHTML = 3;
        this.player.setX = 200;
        this.player.setY = 315;
    }

    renderElements() {
        this.board.render(this.context);
        this.enemies.forEach((enemy) => {
            enemy.render(this.context);
        });

        this.player.render(this.context);
    }



    changePlayer() {
        const charImages = document.querySelectorAll(".char-image");
        for (let i = 0; i < charImages.length; i++) {
            charImages[0].classList.add("active");
            charImages[i].addEventListener("click", () => {
                this.player.setShapeUrl = charImages[i].getAttribute("data-image");
                charImages.forEach(function (image) {
                    image.classList.remove("active");
                })
                charImages[i].classList.add("active");
            });
        }
    }

    removeLife() {
        lives--;
        livesField.innerHTML = lives;
        this.player.setX = 200;
        this.player.setY = 315;
        if (lives === 0) {
            this.gameOver();
        }
    }

    gameOver() {
        alert("Good Job!\nYour score is: " + score + "\n\nWant to play again?");
        this.resetGame();
    }

    prepareGame() {
        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;
        this.updateGame(dt);
        this.renderElements();
        lastTime = now;
        window.requestAnimationFrame(this.prepareGame.bind(this));
    }

    startGame() {
        lastTime = Date.now();
        this.prepareGame();
        this.playerList.render(this.context);
        this.resetButtonEvent();
        this.changePlayer();
    }


}