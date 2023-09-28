let player1 = JSON.parse(localStorage.getItem("player1"));
let player2 = JSON.parse(localStorage.getItem("player2"));
let switchedSides = false;
function createNewPlayer(form){
    console.log("test")
    switch (Number(form.playerID.value)) {
        case 1:
            player1 = {};
            player1.id = form.playerNameInput.value;
            player1.score = 0;
            localStorage.setItem("player1", JSON.stringify(player1))
            break;
        case 2:
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
        case 1:
            player1.score ++;
            localStorage.setItem("player1", JSON.stringify(player1));
            break;
        case 2:
            player2.score ++;
            localStorage.setItem("player2", JSON.stringify(player2));
            break;
        default:
            break;
    }
    updateScore()
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
function updateScore(){
    if (!switchedSides){
        document.getElementById("navnP1").innerHTML = player1.id
        document.getElementById("navnP2").innerHTML = player2.id
        document.getElementById("scoreP1").innerHTML = player1.score
        document.getElementById("scoreP2").innerHTML = player2.score
    }
    else{
        document.getElementById("navnP2").innerHTML = player1.id
        document.getElementById("navnP1").innerHTML = player2.id
        document.getElementById("scoreP2").innerHTML = player1.score
        document.getElementById("scoreP1").innerHTML = player2.score
    }
}
if(window.location.pathname == "/html/" || window.location.pathname == "/html/index.html"){
    updateScore()
}
function inputHandler(key){
    if(!switchedSides){
        switch (key) {
            case "1":
                addPoint(1)
                break;
            case "2":
                addPoint(2)
        
            default:
                break;
        }
    }
    else{
        switch (key) {
            case "1":
                addPoint(2)
                break;
            case "2":
                addPoint(1)
        
            default:
                break;
        }
    }
}
function switchSides(){
    switchedSides = !switchedSides
    updateScore()
}