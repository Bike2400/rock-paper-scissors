let arr = ['Rock','Paper','Scissors'];
let playerSelection = '';
let computerSelection = '';
let playerScore = 0;
let computerScore = 0;
function computerPlay(){
return (arr[Math.floor(Math.random() * arr.length)]);
}
console.log(computerPlay());

function playRound(playerSelection,computerSelection){
computerSelection = computerPlay().toLowerCase();
playerSelection = playerSelection.toLowerCase();

if(playerSelection === computerSelection){
  return 'It is a draw';
}
else if(
    (playerSelection == 'scissors' && computerSelection == 'paper')|| 
    (playerSelection == 'rock' && computerSelection == 'scissors')|| 
    (playerSelection == 'paper' && computerSelection == 'rock') 
    ){
    playerScore++;
    return 'You win';
}

else{
    computerScore++;
    return 'You lose';
}

}

function game(){
    for(let i = 0;i<5;i++){
        if(playerScore > computerScore){
        return 'You have won';
    }
    else if(playerScore == computerScore){
        return 'It is a draw';
    }
    else{
        return 'You lose';  
    }
}
         playRound(playerSelection,computerSelection);
             
    
    

}
playerSelection = prompt('What do you choose');
console.log(playRound('rock'));
console.log(playRound('scissors'));
console.log(playRound('paper'));
console.log(playRound('rock'));
console.log(playRound('paper'));
console.log(playerScore,computerScore);
console.log(game());