function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("(rock, paper, scissors) Enter your choice:");
}

let computerScore = 0;
let humanScore = 0;