function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("(rock, paper, scissors) Enter your choice:");
}

function declareWinner(finalScore) {
    if (finalScore > 0) {
        console.log("Result: Player Won the Game!");
    } else {
        console.log("Result: Computer Won the Game!");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
        return 0;
    }

    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "paper":
                    console.log("You Lose!");
                    return -1;
                case "scissors":
                    console.log("You Win!");
                    return 1;
            }
        case "paper":
            switch(computerChoice) {
                case "rock":
                    console.log("You Win!");
                    return 1;
                case "scissors":
                    console.log("You Lose!");
                    return -1;
            }
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    console.log("You Lose!");
                    computerScore++;
                    return -1;
                case "paper":
                    console.log("You Win!");
                    return 1;
            }
    }
}

function playGame() {
    let score = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice()?.toLowerCase();
        let computerSelection = getComputerChoice();
        
        score += playRound(humanSelection, computerSelection);
    }

    declareWinner(score);
}

playGame();