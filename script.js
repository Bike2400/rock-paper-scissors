const game = () =>{
    let playerScore = 0;
    let computerScore = 0;

    const playGame = () =>{
        const options = document.querySelectorAll('.options');
        const computerOptions = ['rock','paper','scissors']

        options.forEach(option =>{
            option.addEventListener('click',function(){
                const pInput = this.textContent; // So that the player input will be the value of whatever is in the 'options' tag that is clicked

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText,computerChoice);

                if(playerScore == 5|| computerScore ==5){
                    gameOver(options);
                }
            })
        })
    }

    // Function to check who wins
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'Draw'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent= playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
    const gameOver = (options) =>{
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        options.forEach(option =>{
            option.style.display = 'none';
        });

        if(playerScore > computerScore){
            result.style.fontSize = '32px';
            result.innerText = 'Yayy you Won!'
            result.style.color = 'green';
            reloadBtn.style.backgroundColor = 'green';
        }
        else{
            result.style.fontSize = '32px';
            result.innerText = 'Too Bad you lost'
            result.style.color = 'red';
        }
        reloadBtn.innerText = 'Restart Game';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
    playGame();
}
game();