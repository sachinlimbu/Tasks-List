/*
Game Function:
- Player must gues a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

//Game values
let min  = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;


// UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown',function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

//Listen for guess

guessBtn.addEventListener('click',function(){
 let guess = parseInt(guessInput.value);
 //Validate
  if(isNaN(guess)||guess < min||guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }

  //check if won
  if(guess === winningNum){
    gameOver(true,`${winningNum} is correct, You Win!`);

  }else{
    //Wrong Number
    guessesLeft -= 1; 

    if(guessesLeft === 0 ){
      gameOver(false,`${winningNum} is correct, You Lose!`);
    }else{
      //Games continues  - answer wrong

      //Change border color

      guessInput.style.bordercolor = 'red';
      //Clear Input
      guessInput.value = '';

      setMessage(`${guess} is not correct, ${guessesLeft}`,'blue');
    }
  }
});

function gameOver(won, msg){

  let color;

  won === true ? color = 'green' : color = 'red';
    //Game over
      //Disable input
      guessInput.disabled = true;
      //Change border color
      guessInput.style.bordercolor = color;
      //Set Text color
      message.style.color = color;
      //set message
      setMessage(msg);


      //Play Again?
      guessBtn.value = 'Play Again';
      guessBtn.className += 'play-again';
}

//Get Winning Number
function getRandomNum(min, max){
  return Math.floor(Math.random()* (max-min + 1) + min);
}
//Set message

function setMessage(msg,color){
  message.textContent = msg;
  message.style.color = color;
}

