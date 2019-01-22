class PlayerList extends GameElement {
    constructor(playerList) {
        super();
        this.playerList = playerList;
    }

    render(ctx) {
        console.log(this.playerList);
        let br = document.createElement("br");
        document.body.appendChild(br);
        this.playerList.forEach(player => {
            let newPlayer = document.createElement("img");
            newPlayer.classList = "char-image";
            newPlayer.setAttribute("data-image", player.getShapeUrl);
            newPlayer.src = player.getShapeUrl;
            document.body.appendChild(newPlayer);
        });
    }
}

