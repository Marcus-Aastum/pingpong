let player1 = JSON.parse(localStorage.getItem("player1"))
let player2 = JSON.parse(localStorage.getItem("player2"))
function createNewPlayer(form){
    console.log("test")
    switch (Number(form.playerID.value)) {
        case 0:
            player1 = {};
            player1.id = form.playerNameInput.value;
            player1.score = 0;
            localStorage.setItem("player1", JSON.stringify(player1))
            break;
        case 1:
            player2 = {};
            player2.id = form.playerNameInput.value;
            player2.score = 0;
            localStorage.setItem("player2", JSON.stringify(player2))
            break;
        default:
            break;
    }
}
function addPoint(playerIndex){
    switch (playerIndex) {
        case 0:
            player1.score ++;
            localStorage.setItem("player1", JSON.stringify(player1))
            break;
        case 1:
            player2.score ++
            localStorage.setItem("player2", JSON.stringify(player2))
            break;
        default:
            break;
    }
}
function clearPlayers(){
    player1.id = ""
    player1.score = 0
    player2.id = ""
    player2.score = 0
    localStorage.setItem("player1", JSON.stringify(player2))
    localStorage.setItem("player2", JSON.stringify(player2))
}
console.log(player1, player2)
// addPoint(0)
// addPoint(0)
// addPoint(0)
// addPoint(0)
// addPoint(1)
console.log(player1, player2)