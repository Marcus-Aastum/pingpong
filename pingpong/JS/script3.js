let player1 = JSON.parse(localStorage.getItem("player1"));
let player2 = JSON.parse(localStorage.getItem("player2"));
let player3 = JSON.parse(localStorage.getItem("player3"));
let player4 = JSON.parse(localStorage.getItem("player4"));
let player5 = JSON.parse(localStorage.getItem("player5"));
let player6 = JSON.parse(localStorage.getItem("player6"));
let switchedSidesG1 = false;
let switchedSidesG2 = false;
let countPoints = localStorage.getItem("countPoints");
let countWins = localStorage.getItem("countWins");

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
            player1.wins = 0;
            player1.password = form.password.value;
            localStorage.setItem("password", form.password.value)
            console.log(player1.password)
            localStorage.setItem("player1", JSON.stringify(player1))
            // document.getElementById("playerN1").innerHTML = "Spiller 1: " + player1.id
            sendData("player1",JSON.parse(localStorage.getItem("player1")))
            break;
        case 2:
            player2 = {};
            player2.id = form.playerNameInput.value;
            player2.score = 0;
            player2.wins = 0;
            player2.password = form.password.value;
            localStorage.setItem("player2", JSON.stringify(player2))
            // document.getElementById("playerN2").innerHTML = "Spiller 2: " + player2.id;
            sendData("player2",JSON.parse(localStorage.getItem("player2")))
            break;
        case 3:
            player3 = {};
            player3.id = form.playerNameInput.value;
            player3.score = 0;
            player3.wins = 0;
            player3.password = form.password.value;
            localStorage.setItem("player3", JSON.stringify(player3))
            // document.getElementById("playerN3").innerHTML = "Spiller 3: " + player3.id;
            sendData("player3",JSON.parse(localStorage.getItem("player3")))
            break;
        case 4:
            player4 = {};
            player4.id = form.playerNameInput.value;
            player4.score = 0;
            player4.wins = 0;
            player4.password = form.password.value;
            localStorage.setItem("player4", JSON.stringify(player4))
            // document.getElementById("playerN4").innerHTML = "Spiller 4: " + player4.id;
            sendData("player4",JSON.parse(localStorage.getItem("player4")))
            break;
        case 5:
            player5 = {};
            player5.id = form.playerNameInput.value;
            player5.score = 0;
            player5.wins = 0;
            player5.password = form.password.value;
            localStorage.setItem("player5", JSON.stringify(player5))
            // document.getElementById("playerN4").innerHTML = "Spiller 4: " + player4.id;
            sendData("player5",JSON.parse(localStorage.getItem("player5")))
            break;
        case 6:
            player6 = {};
            player6.id = form.playerNameInput.value;
            player6.score = 0;
            player6.wins = 0;
            player6.password = form.password.value;
            localStorage.setItem("player6", JSON.stringify(player6))
            // document.getElementById("playerN4").innerHTML = "Spiller 4: " + player4.id;
            sendData("player6",JSON.parse(localStorage.getItem("player6")))
            break;
        default:
            break;
    }
}

function setPoints() {

    countPoints = parseInt(document.getElementsByTagName("form")[1].numberOfPoints.value)
    countWins = parseInt(document.getElementsByTagName("form")[1].numberOfWins.value)

    localStorage.setItem("countPoints", countPoints)
    localStorage.setItem("countWins", countWins)
    console.log(countPoints, countWins)
    document.getElementById('pointsShow').innerHTML = 'Poeng satt til: ' + countPoints
    document.getElementById('winsShow').innerHTML = 'Sett satt til: ' + countWins
}
function addPoint(playerIndex){
    switch (playerIndex) {
        case 1:
            player1.score ++;
            player1.password = localStorage.getItem("password")
            if (player1.score >= countPoints && player1.score - player2.score >= 2){
                player1.wins ++;
                player1.score = 0;
                player2.score = 0;
                localStorage.setItem("player2", JSON.stringify(player2))
                sendData("player2",JSON.parse(localStorage.getItem("player2")))
            }
            localStorage.setItem("player1", JSON.stringify(player1));
            sendData("player1",JSON.parse(localStorage.getItem("player1")))
            break;
        case 2:
            player2.score ++;
            player2.password = localStorage.getItem("password")
            if (player2.score >= countPoints && player2.score - player1.score >= 2){
                player2.wins ++;
                player2.score = 0;
                player1.score = 0;
                localStorage.setItem("player1", JSON.stringify(player1))
                sendData("player1",JSON.parse(localStorage.getItem("player1")))
            }
            localStorage.setItem("player2", JSON.stringify(player2));
            sendData("player2",JSON.parse(localStorage.getItem("player2")))
            break;
        case 3:
            player3.score ++;
            player3.password = localStorage.getItem("password")
            if (player3.score >= countPoints && player3.score - player4.score >= 2){
                player3.wins ++;
                player3.score = 0;
                player4.score = 0;
                localStorage.setItem("player4", JSON.stringify(player4))
                sendData("player4",JSON.parse(localStorage.getItem("player4")))
            }
            localStorage.setItem("player3", JSON.stringify(player3));
            sendData("player3",JSON.parse(localStorage.getItem("player3")))
            break;
        case 4:
            player4.score ++;
            player4.password = localStorage.getItem("password")
            if (player4.score >= countPoints && player4.score - player3.score >= 2){
                player4.wins ++;
                player4.score = 0;
                player3.score = 0;
                localStorage.setItem("player3", JSON.stringify(player3))
                sendData("player3",JSON.parse(localStorage.getItem("player3")))
            }
            localStorage.setItem("player4", JSON.stringify(player4));
            sendData("player4",JSON.parse(localStorage.getItem("player4")))
            break;
            case 5:
                player5.score ++;
                player5.password = localStorage.getItem("password")
                if (player5.score >= countPoints && player5.score - player6.score >= 2){
                    player5.wins ++;
                    player5.score = 0;
                    player5.score = 0;
                    localStorage.setItem("player6", JSON.stringify(player6))
                    sendData("player6",JSON.parse(localStorage.getItem("player6")))
                }
                localStorage.setItem("player5", JSON.stringify(player5));
                sendData("player5",JSON.parse(localStorage.getItem("player5")))
                break;
            case 6:
                player6.score ++;
                player6.password = localStorage.getItem("password")
                if (player6.score >= countPoints && player6.score - player5.score >= 2){
                    player6.wins ++;
                    player6.score = 0;
                    player6.score = 0;
                    localStorage.setItem("player5", JSON.stringify(player5))
                    sendData("player5",JSON.parse(localStorage.getItem("player5")))
                }
                localStorage.setItem("player6", JSON.stringify(player6));
                sendData("player6",JSON.parse(localStorage.getItem("player6")))
                break;
        
        case -1:
            player1.score --;
            player1.password = localStorage.getItem("password")
            localStorage.setItem("player1", JSON.stringify(player1));
            sendData("player1",JSON.parse(localStorage.getItem("player1")))
            break;
        case -2:
            player2.score --;
            player2.password = localStorage.getItem("password")
            localStorage.setItem("player2", JSON.stringify(player2));
            sendData("player2",JSON.parse(localStorage.getItem("player2")))
            break;
        case -3:
            player3.score --;
            player3.password = localStorage.getItem("password")
            localStorage.setItem("player3", JSON.stringify(player3));
            sendData("player3",JSON.parse(localStorage.getItem("player3")))
            break;
        case -4:
            player4.score --;
            player4.password = localStorage.getItem("password")
            localStorage.setItem("player4", JSON.stringify(player4));
            sendData("player4",JSON.parse(localStorage.getItem("player4")))
            break;
        case -5:
            player5.score --;
            player5.password = localStorage.getItem("password")
            localStorage.setItem("player5", JSON.stringify(player5));
            sendData("player5",JSON.parse(localStorage.getItem("player5")))
            break;
        case -6:
            player6.score --;
            player6.password = localStorage.getItem("password")
            localStorage.setItem("player6", JSON.stringify(player6));
            sendData("player6",JSON.parse(localStorage.getItem("player6")))
            break;
        default:
            break;
    }
    if (player1.wins >= countWins){
        document.getElementsByClassName("player2")[0].remove()
        document.getElementById("scoreP1").remove()
        document.getElementsByClassName("player1")[0].style.width = "100%"
        document.getElementsByClassName("score")[0].innerHTML = "Vinner!"
        player1.wins = 0
        player1.score = 0
        player2.wins = 0
        player2.score = 0
        localStorage.setItem("player1", JSON.stringify(player1))
        localStorage.setItem("player2", JSON.stringify(player2))
        sendData("player1", player1)
        sendData("player2", player2)
        setTimeout(function(){
         window.location.pathname=window.location.pathname;
        }, 2000)
        
       
    }
    else if (player2.wins >= countWins){
        document.getElementsByClassName("player1")[0].remove()
        document.getElementById("scoreP2").remove()
        document.getElementsByClassName("player2")[0].style.width = "100%"
        document.getElementsByClassName("score")[0].innerHTML = "Vinner!"
        player1.wins = 0
        player1.score = 0
        player2.wins = 0
        player2.score = 0
        localStorage.setItem("player1", JSON.stringify(player1))
        localStorage.setItem("player2", JSON.stringify(player2))
        sendData("player1", player1)
        sendData("player2", player2)
        setTimeout(function(){
         window.location.pathname=window.location.pathname;
        }, 2000)
    }
    else if (player3.wins >= countWins){
        document.getElementsByClassName("player4")[0].remove()
        document.getElementById("scoreP3").remove()
        document.getElementsByClassName("player3")[0].style.width = "100%"
        document.getElementsByClassName("score")[4].innerHTML = "Vinner!"
        player3.wins = 0
        player3.score = 0
        player4.wins = 0
        player4.score = 0
        localStorage.setItem("player3", JSON.stringify(player3))
        localStorage.setItem("player4", JSON.stringify(player4))
        sendData("player3", player3)
        sendData("player4", player4)
        setTimeout(function(){
         window.location.pathname=window.location.pathname;
        }, 2000)
        
       
    }
    else if (player4.wins >= countWins){
        document.getElementsByClassName("player3")[0].remove()
        document.getElementById("scoreP4").remove()
        document.getElementsByClassName("player4")[0].style.width = "100%"
        document.getElementsByClassName("score")[4].innerHTML = "Vinner!"
        player3.wins = 0
        player3.score = 0
        player4.wins = 0
        player4.score = 0
        localStorage.setItem("player3", JSON.stringify(player3))
        localStorage.setItem("player4", JSON.stringify(player4))
        sendData("player3", player3)
        sendData("player4", player4)
        setTimeout(function(){
         window.location.pathname=window.location.pathname;
        }, 2000)
    }
    else if (player5.wins >= countWins){
        document.getElementsByClassName("player6")[0].remove()
        document.getElementById("scoreP5").remove()
        document.getElementsByClassName("player5")[0].style.width = "100%"
        document.getElementsByClassName("score")[8].innerHTML = "Vinner!"
        player5.wins = 0
        player5.score = 0
        player6.wins = 0
        player6.score = 0
        localStorage.setItem("player5", JSON.stringify(player5))
        localStorage.setItem("player6", JSON.stringify(player6))
        sendData("player5", player5)
        sendData("player6", player6)
        setTimeout(function(){
         window.location.pathname=window.location.pathname;
        }, 2000)
        
       
    }
    else if (player6.wins >= countWins){
        document.getElementsByClassName("player5")[0].remove()
        document.getElementById("scoreP6").remove()
        document.getElementsByClassName("player6")[0].style.width = "100%"
        document.getElementsByClassName("score")[8].innerHTML = "Vinner!"
        player5.wins = 0
        player5.score = 0
        player6.wins = 0
        player6.score = 0
        localStorage.setItem("player5", JSON.stringify(player5))
        localStorage.setItem("player6", JSON.stringify(player6))
        sendData("player5", player5)
        sendData("player6", player6)
        setTimeout(function(){
         window.location.pathname=window.location.pathname;
        }, 2000)
    }

}
console.log(player1, player2)
// addPoint(0)
// addPoint(0)
// addPoint(0)
// addPoint(0)
// addPoint(1)
console.log(player1, player2)
function updateScore(countPlayers = ""){
    fetch('/api/send/player1', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the JSON response
        } else {
            console.error('Failed to fetch data');
        }
    })
    .then(data => {
        // console.log('Data received from the server:', data.id, data.score);
        // Use the data in your web application
        player1 = data
        player1.password = localStorage.getItem("password")
        localStorage.setItem("player1", JSON.stringify(player1))
    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('/api/send/player2', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the JSON response
        } else {
            console.error('Failed to fetch data');
        }
    })
    .then(data => {
        // console.log('Data received from the server:', data.id, data.score);
        // Use the data in your web application
        player2 = data
        player2.password = localStorage.getItem("password")
        localStorage.setItem("player2", JSON.stringify(player2))
    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('/api/send/player3', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the JSON response
        } else {
            console.error('Failed to fetch data');
        }
    })
    .then(data => {
        // console.log('Data received from the server:', data.id, data.score);
        // Use the data in your web application
        player3 = data
        player3.password = localStorage.getItem("password")
        localStorage.setItem("player3", JSON.stringify(player3))
    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('/api/send/player4', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the JSON response
        } else {
            console.error('Failed to fetch data');
        }
    })
    .then(data => {
        // console.log('Data received from the server:', data.id, data.score);
        // Use the data in your web application
        player4 = data
        player4.password = localStorage.getItem("password")
        localStorage.setItem("player4", JSON.stringify(player4))
    })
    .catch(error => {
        console.error('Error:', error);
    });
    fetch('/api/send/player5', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the JSON response
        } else {
            console.error('Failed to fetch data');
        }
    })
    .then(data => {
        // console.log('Data received from the server:', data.id, data.score);
        // Use the data in your web application
        player5 = data
        player5.password = localStorage.getItem("password")
        localStorage.setItem("player5", JSON.stringify(player5))
    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('/api/send/player6', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the JSON response
        } else {
            console.error('Failed to fetch data');
        }
    })
    .then(data => {
        // console.log('Data received from the server:', data.id, data.score);
        // Use the data in your web application
        player6 = data
        player6.password = localStorage.getItem("password")
        localStorage.setItem("player6", JSON.stringify(player6))
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
    if(window.location.pathname == "/html/" || window.location.pathname == "/html/index.html"){
        document.getElementById("playerN1").innerHTML = "Spiller 1: " + player1.id;
        document.getElementById("playerN2").innerHTML = "Spiller 2: " + player2.id;
        document.getElementById("playerN3").innerHTML = "Spiller 3: " + player3.id;
        document.getElementById("playerN4").innerHTML = "Spiller 4: " + player4.id;
    }
    else{
            document.getElementById("navnP1").innerHTML = player1.id
            document.getElementById("navnP2").innerHTML = player2.id
            document.getElementById("scoreP1").innerHTML = player1.score
            document.getElementById("scoreP2").innerHTML = player2.score
            document.getElementById("navnP3").innerHTML = player3.id
            document.getElementById("navnP4").innerHTML = player4.id
            document.getElementById("scoreP3").innerHTML = player3.score
            document.getElementById("scoreP4").innerHTML = player4.score
            document.getElementById("navnP5").innerHTML = player5.id
            document.getElementById("navnP6").innerHTML = player6.id
            document.getElementById("scoreP5").innerHTML = player5.score
            document.getElementById("scoreP6").innerHTML = player6.score
    }
    
    
    
}
if(window.location.pathname == "/html/game1.html" || window.location.pathname == "/html/game2.html"){
    updateScore()
}
function inputHandler(key){
    switch (key) {
        case "1":
            addPoint(1)
            break;
        case "2":
            addPoint(2)
            break;
        case "3":
            addPoint(3)
            break;
        case "4":
            addPoint(4)
            break;
        case "5":
            addPoint(5)
            break;
        case "6":
            addPoint(6)
            break;
        case "a":
            addPoint(-1)
            break;
        case "b":
            addPoint(-2)
            break;
        case "c":
            addPoint(-3)
            break;
        case "d":
            addPoint(-4)
            break;
        case "e":
            addPoint(-5)
            break;
        case "f":
            addPoint(-6)
            break;
        default:
            break;
        }
}
function switchSides(countPlayers){
    if (countPlayers == 2){
        switchedSidesG1 = !switchedSidesG1
        updateScore(2)
    }
    else if (countPlayers == 4){
        switchedSidesG2 = !switchedSidesG2
        updateScore(4)
    }
}

function tilSpill(){
    if (!player1 || !player2 || !player3 || !player4){
        document.getElementById("alert").innerHTML = "Du må legge til minst 2 spillere før du kan starte spillet"
        }
    
    else if(player3.id || player4.id){ 
        window.location.href="../html/game2.html"
        console.log("game2")
    }
    else{
        window.location.href="../html/game1.html"
        console.log("game1")
    }
}
function sendData(url, dataToSend){
    fetch("/api/motta/"+url, {
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
    // player1.id = ""
    // player1.score = 0
    // player1.password = ""
    // player2.id = ""
    // player2.score = 0
    // player2.password = ""
    // player3.id = ""
    // player3.score = 0
    // player3.password = ""
    // player4.id = ""
    // player4.score = 0
    // player4.password = ""
    // localStorage.setItem("player1", JSON.stringify(player2))
    // localStorage.setItem("player2", JSON.stringify(player2))
    // localStorage.setItem("player3", JSON.stringify(player3))
    // localStorage.setItem("player4", JSON.stringify(player4))
    document.getElementById('pointsShow').innerHTML = 'Poeng satt til: ' + countPoints
    document.getElementById('winsShow').innerHTML = 'Sett satt til: ' + countWins
}
if (window.location.pathname == "/html/game1.html" || window.location.pathname == "/html/game2.html"|| window.location.pathname == "/html/game3.html"|| window.location.pathname == "/html/"|| window.location.pathname == "/html/index.html"){
    setInterval(updateScore, 1000)
}
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    // true for mobile device
    document.getElementsByClassName("player1")[0].style.height = "45%"
    document.getElementsByClassName("player2")[0].style.height = "45%"
    document.getElementsByClassName("player3")[0].style.height = "45%"
    document.getElementsByClassName("player4")[0].style.height = "45%"
    document.getElementsByClassName("player5")[0].style.height = "45%"
    document.getElementsByClassName("player6")[0].style.height = "45%"
    document.getElementsByClassName("player1")[0].style.width = "48%"
    document.getElementsByClassName("player2")[0].style.width = "48%"
    document.getElementsByClassName("player3")[0].style.width = "48%"
    document.getElementsByClassName("player4")[0].style.width = "48%"
    document.getElementsByClassName("player5")[0].style.width = "48%"
    document.getElementsByClassName("player6")[0].style.width = "48%"
    document.getElementById("bord1").remove()
    document.getElementById("bord2").remove()
    document.getElementById("bord3").remove()
  }
function deletePlayer(button){
    switch (button.value) {
        case "1":
            player1.id = ""
            player1.score = 0
            player1.password = localStorage.getItem("password")
            localStorage.setItem("player1", JSON.stringify(player1));
            sendData("player1",JSON.parse(localStorage.getItem("player1")))
            break;
        case "2":
            player2.id = ""
            player2.score = 0
            player2.password = localStorage.getItem("password")
            localStorage.setItem("player2", JSON.stringify(player2));
            sendData("player2",JSON.parse(localStorage.getItem("player2")))
            break;
        case "3":
            player3.id = ""
            player3.score = 0
            player3.password = localStorage.getItem("password")
            localStorage.setItem("player3", JSON.stringify(player3));
            sendData("player3",JSON.parse(localStorage.getItem("player3")))
            break;
        case "4":
            player4.id = ""
            player4.score = 0
            player4.password = localStorage.getItem("password")
            localStorage.setItem("player4", JSON.stringify(player4));
            sendData("player4",JSON.parse(localStorage.getItem("player4")))
            break;

        default:
            break;
    }
}