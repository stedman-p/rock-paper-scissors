/* 
    Run in the console

    rps = the popular game Rock Paper Scissors
*/

const playbutton = document.getElementById("play");

playbutton.addEventListener("click", function(e) {
    playRound();
});

function playRound() {

    // Prevents round if no option is selected
    if (!isRadioSelected()) {
        alert("Select a move!");
        return;
    }


    const playerSelection = document.querySelector('input[name="rps-choice"]:checked').value;
    const CPUSelection = computerPlay();

    const choiceDisplay = document.querySelectorAll(".choice");
    choiceDisplay.helloWorld = "Hello, World";

    updateChoiceImage("choice-player",playerSelection);
    updateChoiceImage("choice-cpu",CPUSelection);

    const gameResult = determineWinner(convertChoice(playerSelection), convertChoice(CPUSelection));
    
    document.getElementById("result-p").textContent = 
        gameResult[0].toUpperCase() + gameResult.substring(1) + '!';

    incrementCounterById("round-p");
    if (gameResult === "win")
        incrementCounterById("wins-p");
    else if (gameResult === "loss")
        incrementCounterById("losses-p");
    else
        incrementCounterById("ties-p");
}

function updateChoiceImage(elementId, newChoice) {
    const choiceImg = document.getElementById(elementId);   
    switch (newChoice) {
        case 'r':
            choiceImg.src = "./img/rock-icon.svg";
            break;
        case 'p':
            choiceImg.src = "./img/paper-icon.svg";
            break;
        case 's':
            choiceImg.src = "./img/scissors-icon.svg";
            break;
        default:
            break;
    }
}

function isRadioSelected() {
    if (document.getElementById("rock-radio").checked ||
        document.getElementById("paper-radio").checked ||
        document.getElementById("scissors-radio").checked) {
        
        return true;
    }
    else
        return false;
    
}

function incrementCounterById(elementId) {
    const Incrementee = document.getElementById(elementId);

    Incrementee.textContent = parseInt(Incrementee.textContent) + 1 + "";
}

function determineWinner(player1, player2) {
    /*
       params: 
       returns: winner of round from player1's perspective
    */

    if (player1 === player2) {
        return "tie";
    } else if ((player1 + 1) % 3 === player2) {
        return "loss";
    } else {
        return "win";
    }
}

function convertChoice(rpsChoice) {
    /* 
        params: string of 'r', 'p', or 's'
        returns: number corresponding to string
        for use in rps algorithm from https://stackoverflow.com/a/41458257
    */
    switch (rpsChoice) {
        case "r":
            return 0;
        case "p":
            return 1;
        case "s":
            return 2;
    }
}

function computerPlay() {
    // returns: random play for computer
    const guess = Math.floor(Math.random() * 3) + 1;
    switch (guess) {
        case 1:
            return "r";
        case 2:
            return "p";
        case 3:
            return "s";
    }
}
