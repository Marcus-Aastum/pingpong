const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const cors = require('cors')

//Set these variables to your preferred passwords
const pass_admin = "";
const pass_game_1 = "";
const pass_game_2 = "";
const pass_game_3 = "";

// app.use(cors());
// Serve static files (HTML, CSS, images, etc.) from the 'public' folder
app.use(express.static('pingpong'));
app.use(express.json());

let player1data = {id: "", score: 0};
let player2data = {id: "", score: 0};
let player3data = {id: "", score: 0};
let player4data = {id: "", score: 0};
let player5data = {id: "", score: 0};
let player6data = {id: "", score: 0};
let countpoints = {val: 11};
let countwins = {val: 3};

app.post('/api/motta/player1', (req, res) => {
    const receivedData = req.body; // Access the JSON data from the request body
    console.log('Received JSON data:', receivedData);
    if (receivedData.password == pass_game_1 || receivedData.password == pass_admin){
        player1data = req.body;
    }

    // You can now process the received data, such as saving it to a database

    res.json({ message: 'Data received successfully' });
});
app.post('/api/motta/player2', (req, res) => {
    const receivedData = req.body; // Access the JSON data from the request body
    console.log('Received JSON data:', receivedData);
    if (receivedData.password == pass_game_1 || receivedData.password == pass_admin){
        player2data = req.body;
    }
    // You can now process the received data, such as saving it to a database

    res.json({ message: 'Data received successfully' });
});

app.post('/api/motta/player3', (req, res) => {
    const receivedData = req.body; // Access the JSON data from the request body
    console.log('Received JSON data:', receivedData);
    if (receivedData.password == pass_game_2 || receivedData.password == pass_admin){
        player3data = req.body;
    }

    // You can now process the received data, such as saving it to a database

    res.json({ message: 'Data received successfully' });
});
app.post('/api/motta/player4', (req, res) => {
    const receivedData = req.body; // Access the JSON data from the request body
    console.log('Received JSON data:', receivedData);
    if (receivedData.password == pass_game_2 || receivedData.password == pass_admin){
        player4data = req.body;
    }
    // You can now process the received data, such as saving it to a database

    res.json({ message: 'Data received successfully' });
});
app.post('/api/motta/player5', (req, res) => {
    const receivedData = req.body; // Access the JSON data from the request body
    console.log('Received JSON data:', receivedData);
    if (receivedData.password == pass_game_3 || receivedData.password == pass_admin){
        player5data = req.body;
    }
    // You can now process the received data, such as saving it to a database

    res.json({ message: 'Data received successfully' });
});
app.post('/api/motta/player6', (req, res) => {
    const receivedData = req.body; // Access the JSON data from the request body
    console.log('Received JSON data:', receivedData);
    if (receivedData.password == pass_game_3 || receivedData.password == pass_admin){
        player6data = req.body;
    }
    // You can now process the received data, such as saving it to a database

    res.json({ message: 'Data received successfully' });
});
app.post('/api/motta/countPoints', (req, res) => {
    const receivedData = req.body;
    if(receivedData.password == pass_admin){
        countpoints = receivedData;
    }
    console.log(countpoints, receivedData)
    res.json({ message: 'Data received successfully' });
});
app.post('/api/motta/countWins', (req, res) => {
    const receivedData = req.body;
    if(receivedData.password == pass_admin){
        countwins = receivedData;
    }
    res.json({ message: 'Data received successfully' });
});
app.get('/api/send/player1', (req, res) => {
    const dataToSend = {"id": player1data.id, "score": player1data.score, "wins": player1data.wins}

    // Send the data as a JSON response
    res.json(dataToSend);
});
app.get('/api/send/player2', (req, res) => {
    const dataToSend = {"id": player2data.id, "score": player2data.score, "wins": player2data.wins}

    // Send the data as a JSON response
    res.json(dataToSend);
});
app.get('/api/send/player3', (req, res) => {
    const dataToSend = {"id": player3data.id, "score": player3data.score, "wins": player3data.wins}

    // Send the data as a JSON response
    res.json(dataToSend);
});
app.get('/api/send/player4', (req, res) => {
    const dataToSend = {"id": player4data.id, "score": player4data.score, "wins": player4data.wins}

    // Send the data as a JSON response
    res.json(dataToSend);
});
app.get('/api/send/player5', (req, res) => {
    const dataToSend = {"id": player5data.id, "score": player5data.score, "wins": player5data.wins}

    // Send the data as a JSON response
    res.json(dataToSend);
});
app.get('/api/send/player6', (req, res) => {
    const dataToSend = {"id": player6data.id, "score": player6data.score, "wins": player6data.wins}

    // Send the data as a JSON response
    res.json(dataToSend);
});
app.get('/api/send/countPoints', (req, res) => {
    const dataToSend = countpoints.val;
    // Send the data as a JSON response
    res.json(dataToSend);
});
app.get('/api/send/countWins', (req, res) => {
    const dataToSend = countwins.val;
    // Send the data as a JSON response
    res.json(dataToSend);
});

// Start the server and listen on your local IP address
app.listen(port, '192.168.10.182', () => {
    // const localIP = require('ip').address(); // Requires the 'ip' package
    const localIP = "192.168.10.182"; // Requires the 'ip' package
    console.log(`Server is running on http://${localIP}:${port}`);
});