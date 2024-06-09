let randNum = (parseInt(Math.random()*100 + 1));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const currGuess = parseInt(userInput.value);
        validateGuess (currGuess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please add a valid Number');
    }
    else if(guess < 1){
        alert('Please add a Number more than 1');
    }
    else if(guess > 100){
        alert('Please add a Number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randNum}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randNum){
        displayMessage(`You Guessed it Right`);
        endGame();
    }
    else if(guess < randNum){
        displayMessage(`Number is too Low`)
    }
    else if(guess > randNum){
        displayMessage(`Number is too High`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}   `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}   

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', ''); //so that user cant input more values
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) =>{
        randNum = (parseInt(Math.random()*100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame = true;
    })
}

