function redirect(){
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
    
    if(window.location.pathname=="/html/game2.html"){
        if(!player3.id && !player4.id){
            window.location.pathname="/html/game1.html"
        }
        else if(player5.id || player6.id){
            window.location.pathname="/html/game3.html"
        }
    }
    else if (window.location.pathname=="/html/game1.html"){
        if((player3.id || player4.id) && !player5.id){
            window.location.pathname="/html/game2.html"
        }
        else if(player5.id || player6.id){
            window.location.pathname="/html/game3.html"
        }
    }
    else if (window.location.pathname=="/html/game3.html"){
        if(!player5.id && !player6.id && !player3.id){
            window.location.pathname="/html/game1.html"
        }
        else if(!player5.id && !player6.id && player3.id){
            window.location.pathname="/html/game2.html"
        }
    }

}
setInterval(redirect, 5000)