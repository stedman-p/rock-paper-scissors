// Run in the console



function game() {

}

function playRound(playerSelection, computerSelection) {
    
}

function computerPlay() {
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