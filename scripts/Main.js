function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("(rock, paper, scissors) Enter your choice:");
}

let computerScore = 0;
let humanScore = 0;

let humanSelection = getHumanChoice()?.toLowerCase();
let computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
        return true;
    }
    
    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "paper":
                    console.log("You Lose!");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You Win!");
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "rock":
                    console.log("You Win!");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("You Lose!");
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    console.log("You Lose!");
                    computerScore++;
                    break;
                case "paper":
                    console.log("You Win!");
                    humanScore++;
                    break;
            }
            break;
    }
}