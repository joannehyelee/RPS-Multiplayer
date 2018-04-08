// Initialize Firebase
var config = {
    apiKey: "AIzaSyAXaPUqylqF6HqpRafv8p0kFRIFB2XKGXg",
    authDomain: "test-4cb8e.firebaseapp.com",
    databaseURL: "https://test-4cb8e.firebaseio.com",
    projectId: "test-4cb8e",
    storageBucket: "test-4cb8e.appspot.com",
    messagingSenderId: "983384902792"
};
firebase.initializeApp(config);

// Create variable to reference database
var database = firebase.database();

var name = "";
var wins = 0;
var losses = 0;
var choice = "";
var turns = 0;

// GET
$("#start-button").on("click", function(event){
    event.preventDefault();

    // Provide initial data to Firebase database
    name = $("#name").val().trim();

    database.ref().set({
        name: name,
        wins: wins,
        losses: losses
    });

});

// SET

database.ref().on("value", function(snapshot){
// Firebase watcher + intial loader

    console.log(snapshot.val());

    // *** LOGIC:
    if (player 1 exists in database) {
        // Player 2
        $("form").remove();

        $("#player-info").html("<p>Hi " + name + "! You are Player 2.</p>");
        $("#player-two").html("<p>" + name + "</p>");
        $("#score").html("<p>Wins: " + wins + " | Losses: " + losses + "</p>");
    } else {
        // Player 1
        $("form").remove();

        $("#player-info").html("<p>Hi " + name + "! You are Player 1.</p>");
        $("#player-one").html("<p>" + name + "</p>");
        $("#score").html("<p>Wins: " + wins + " | Losses: " + losses + "</p>");
    }

    if (player 1 & player 2 both exist) {

    }


    if (Player1.choice === "Rock") {
        if (Player2.choice === "Rock") {
            "Tie"
        }
        if (Player2.choice === "Scissors") {
            Player2.losses++;
            Player1.wins++;
        }
        if (Player2.choice === "Paper") {
            Player2.wins++;
            Player1.losses++;
        }
    }

    if (Player1.choice === "Paper") {
        if (Player2.choice === "Rock") {
            Player2.losses++;
            Player1.wins++;
        }
        if (Player2.choice === "Scissors") {
            Player2.wins++;
            Player1.losses++;
        }
        if (Player2.choice === "Paper") {
            "Tie";
        }
    }

    if (Player1.choice === "Scissors") {
        if (Player2.choice === "Rock") {
            Player2.wins++;
            Player1.losses++;
        }
        if (Player2.choice === "Scissors") {
            "Tie";
        }
        if (Player2.choice === "Paper") {
            Player2.losses++;
            Player1.wins++;
        }
    }



});