const playerOneScoreDisplay = document.querySelector('#p1Score');
const playerTwoScoreDisplay = document.querySelector('#p2Score');
const wScoreDisplay = document.querySelector('#playingTo');
const inputScore = document.querySelector('#inputScore');
const playerOneBtn = document.querySelector('#p1Btn');
const playerTwoBtn = document.querySelector('#p2Btn');
const resetBtn = document.querySelector('#resetBtn');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;

function winner(oldScore , winningScore){
    if(oldScore === winningScore){
        if(p1Score === winningScore){
            playerOneScoreDisplay.classList.add('winner');
        }else {
            playerTwoScoreDisplay.classList.add('winner');
        }

        gameOver = true;
        playerOneBtn.setAttribute('disabled' , 'disabled');
        playerTwoBtn.setAttribute('disabled' , 'disabled');
    }
}

function reset(){
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    playerOneScoreDisplay.textContent = 0;
    playerTwoScoreDisplay.textContent = 0;
    playerOneScoreDisplay.classList.remove('winner');
    playerTwoScoreDisplay.classList.remove('winner');
    playerOneBtn.removeAttribute('disabled');
    playerTwoBtn.removeAttribute('disabled');
    
}

playerOneBtn.addEventListener('click' , () => {
    if(!gameOver){
    p1Score++;
    winner(p1Score , winningScore)
    playerOneScoreDisplay.textContent = p1Score;
    }
});

playerTwoBtn.addEventListener('click' , () => {
    if(!gameOver){
        p2Score++;
        winner(p2Score , winningScore)
        playerTwoScoreDisplay.textContent = p2Score; 
    }
    
});

inputScore.addEventListener('change' , () => {
    winningScore = Number(inputScore.value);
    wScoreDisplay.textContent = inputScore.value;
    inputScore.value = '';
    reset()
})

resetBtn.addEventListener('click' , reset);




