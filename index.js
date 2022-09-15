const computerDisplay = document.getElementById("computer")
const userDisplay = document.getElementById("user")
const resultDisplay = document.getElementById("result")

// console.log(computerDisplay);
// console.log(userDisplay);
// console.log(resultDisplay);

const possibleChoice = document.querySelectorAll('button')




possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userDisplay.innerHTML = userChoice;
    createComputerChoice();
    getResult();
}))


function createComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {

        computerChoice = 'scissor'

    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerDisplay.innerHTML = computerChoice

}



function getResult(){
    if(computerChoice === userChoice ){
        result = "its a draw";
        


    }
    if(computerChoice === "rock" && userChoice === "paper"){
        result = "you win !"
        resultDisplay.innerHTML = result ;
        
    }
    if(computerChoice === "rock" && userChoice === "scissor"){
        result = "you lost!"
        
    }
    if(computerChoice === "paper" && userChoice === "scissor"){
        result = "you win! "
        
    }
    if(computerChoice === "paper" && userChoice === "rock"){
        result = "you lose! "
        
    }
    if(computerChoice === "scissor" && userChoice === "rock"){
        result = "you win !"
        
    }
    if(computerChoice === "scissor" && userChoice === "paper"){
        result = "you win !"
    }
        
}
