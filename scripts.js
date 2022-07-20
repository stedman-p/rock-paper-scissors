/* 
    Run in the console

    rps = the popular game Rock Paper Scissors
*/

const playerChoices = document.querySelectorAll("input");

playerChoices.forEach(element => {
    element.addEventListener("click", selectChoice)
});

const playbutton = document.getElementById("play");

playbutton.addEventListener("click", function(e) {
    incrementCounterById("round-p")
});

function game() {
    let winLoseDraw = [0, 0, 0];
    let winString = "";
    let roundString = [];
    for (i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        roundString = playRound(
            // change input to buttons
            prompt("'Rock', 'Paper', or 'Scissors?'"),
            computerPlay()
        );
        winString = roundString.split(" ")[1];
        console.log(roundString);
        if (winString === "win!") {
            winLoseDraw[0]++;
        } else if (winString === "lose!") {
            winLoseDraw[1]++;
        } else {
            winLoseDraw[2]++;
        }
    }

    console.log(
        `Wins: ${winLoseDraw[0]}, Losses: ${winLoseDraw[1]}, Draws: ${winLoseDraw[2]}`
    );
    if (winLoseDraw[0] > winLoseDraw[1]) {
        console.log("You win!");
    } else if (winLoseDraw[0] < winLoseDraw[1]) {
        console.log("You Lose!");
    } else {
        console.log("It's a TIE!");
    }
}

    // Returns 0 if the player wins, 1 if the player loses, 3 if they tie

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    winStatus = determineWinner(
        convertChoice(playerSelection),
        convertChoice(computerSelection)
    );

    return `You ${winStatus}! ${playerSelection.toUpperCase()} ${winStatus}s against ${computerSelection.toUpperCase()}!`;
}

function selectChoice() {
    
}

function incrementCounterById(elementId) {
    const Incrementee = document.getElementById(elementId);

    Incrementee.textContent = parseInt(Incrementee.textContent) + 1 + "";
}

function determineWinner(player1, player2) {
    /*
       params: converted player rps choice
       returns: winner of round from player1's perspective
    */

    if (player1 === player2) {
        return "tie";
    } else if ((player1 + 1) % 3 === player2) {
        return "lose";
    } else {
        return "win";
    }
}

function convertChoice(rpsChoice) {
    /* 
        params: string of 'rock', 'paper', or 'scissors'
        returns: number corresponding to string
        for use in rps algorithm from https://stackoverflow.com/a/41458257
    */
    switch (rpsChoice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

function computerPlay() {
    // returns: random play for computer
    const guess = Math.floor(Math.random() * 3) + 1;
    switch (guess) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}
