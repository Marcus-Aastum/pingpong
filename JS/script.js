let player1 = JSON.parse(localStorage.getItem("player1"));
let player2 = JSON.parse(localStorage.getItem("player2"));
let switchedSides = false;

const inputField = document.getElementById("input-field");

if (window.location.pathname == "/html/index.html" || window.location.pathname == "/html/"){
    inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        createNewPlayer(document.getElementsByTagName("form")[0]);
    }
    });
}

function createNewPlayer(form){
    console.log("test")
    switch (Number(form.playerID.value)) {
        case 1:
            player1 = {};
            player1.id = form.playerNameInput.value;
            player1.score = 0;
            localStorage.setItem("player1", JSON.stringify(player1))
            document.getElementById("playerN1").innerHTML = "Spiller 1: " + player1.id
            break;
        case 2:
            player2 = {};
            player2.id = form.playerNameInput.value;
            player2.score = 0;
            localStorage.setItem("player2", JSON.stringify(player2))
            document.getElementById("playerN2").innerHTML = "Spiller 2: " + player2.id;
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
            sendData("player1",JSON.parse(localStorage.getItem("player1")))
            break;
        case 2:
            player2.score ++;
            localStorage.setItem("player2", JSON.stringify(player2));
            sendData("player2",JSON.parse(localStorage.getItem("player2")))
            break;
        
        case -1:
            player1.score --;
            localStorage.setItem("player1", JSON.stringify(player1));
            break;
        case -2:
            player2.score --;
            localStorage.setItem("player2", JSON.stringify(player2));
            break;
        default:
            break;
    }
    updateScore()
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
if(window.location.pathname == "/html/" || window.location.pathname == "/html/game.html"){
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
                break;
            case "a":
                addPoint(-1)
                break;
            case "b":
                addPoint(-2)
                break;
            default:
                break;
        }
    }
    else{
        switch (key) {
            case "1":
                addPoint(1)
                break;
            case "2":
                addPoint(2)
                break;
            case "a":
                addPoint(-1)
                break;
            case "b":
                addPoint(-2)
                break;
            default:
                break;
        }
    }
}
function switchSides(){
    switchedSides = !switchedSides
    updateScore()
}

function tilSpill(){
    if (!player1 || !player2 || player1.id === "" || player2.id === ""){
        document.getElementById("alert").innerHTML = "Du må legge til minst 2 spillere før du kan starte spillet"}
    
    else{ 
        window.location.href="game.html"
    }
}
function sendData(url, dataToSend){
    fetch("http://pingpong.aastum.no/api/motta/"+url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSend)
    })
    .then(response => {
        if (response.ok) {
            console.log('Data sent successfully');
        } else {
            console.error('Failed to send data');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

if (window.location.pathname == "/html/index.html" || window.location.pathname == "/html/"){
    player1.id = ""
    player1.score = 0
    player2.id = ""
    player2.score = 0
    localStorage.setItem("player1", JSON.stringify(player2))
    localStorage.setItem("player2", JSON.stringify(player2))
}