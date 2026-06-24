const resultText = document.querySelector("#result");
const scoreText = document.querySelector("#score");
const container = document.querySelector("#container");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("(rock, paper, scissors) Enter your choice:");
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultText.textContent = "Tie!";
        return 0;
    }

    switch(humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "paper":
                    resultText.textContent = "You Lose the round!";
                    return -1;
                case "scissors":
                    resultText.textContent = "You Win the round!";
                    return 1;
            }
        case "paper":
            switch(computerChoice) {
                case "rock":
                    resultText.textContent = "You Win the round!";
                    return 1;
                case "scissors":
                    resultText.textContent = "You Lose the round!";
                    return -1;
            }
        case "scissors":
            switch(computerChoice) {
                case "rock":
                    resultText.textContent = "You Lose the round!";
                    computerScore++;
                    return -1;
                case "paper":
                    resultText.textContent = "You Win the round!";
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

// playGame();

let score = 0;
const btnRock = document.querySelector("#rock")
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => {
    score += playRound("rock", getComputerChoice());
    updateScore();
})

btnPaper.addEventListener("click", () => {
    score += playRound("rock", getComputerChoice());
    updateScore();
})

btnScissors.addEventListener("click", () => {
    score += playRound("rock", getComputerChoice());
    updateScore();
})

function updateScore() {
    scoreText.textContent = score;

    if (score >= 5 || score <= -5) {
        const newResult = document.createElement("p");

        if (score >= 5) {
            newResult.textContent = "Congratulations! You Won the Game!";
        }
    
        if (score <= -5) {
            newResult.textContent = "Oh Sorry, You Lost the Game!";
        }

        container.replaceChildren(newResult);
    }
}