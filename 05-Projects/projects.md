# Projects Related to DOM

## Project Preview
[Click Here](https://githubbox.com/Adityarj1910/JavaScript/tree/main/05-Projects)

# Script Codes

## Project 1 - Color Changer

```javascript

const buttons = document.querySelectorAll('.button'); //select all the buttons so that we can loop each button
// console.log((buttons));

const body = document.querySelector("body")
// console.log(body);

buttons.forEach((eachButton) => {
    // console.log(eachButton);

    eachButton.addEventListener('click', (e) => { //this will listen to 'click' event
        // and will perform the following function 
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'reset'){
        body.style.backgroundColor = 'white';
        }
        
    })
} )

```


## Project 2 - BMI Calculator

```javascript

const form = document.querySelector('form')
//this usecase will give you empty values as 
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', (e)=>{
    
    e.preventDefault(); // to prevent default action i.e., send value (get/post)
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give a valid number"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give a valid number"
    }
    else{
        const BMI = (weight/((height*height)/10000)).toFixed(2)
        if(BMI<18.6){
            results.innerHTML = `<span>your BMI is ${BMI}</span><br>You are Under Weight`;
        }
        else if(BMI >=18.6 && BMI<24.9){
            results.innerHTML = `<span>your BMI is ${BMI}</span><br>You are Normal`
        }
        else{
            results.innerHTML = `<span>your BMI is ${BMI}</span><br>You are Over Weight`
        }
    }
    })
```



## Project 3 - Digital Clock

```javascript

const clock = document.getElementById('clock')

setInterval(()=>{
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000) // to set interval of time refresh


```



## Project 4 = Guess the Number

```javascript

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


```

## Project 5 - Unlimited Colors

```javascript

const randomColor = ()=>{
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
  }
  return color;
};

let colour
const setColor = ()=>{
  document.body.style.backgroundColor = randomColor();
}
const startChangingColor = ()=>{
  colour = setInterval(setColor, 1000);
  
}

const stopChangingColor = ()=>{
  clearInterval(colour);
}

document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);



```



## Project 6 - Keyboard Check

```javascript

const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="color">
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    <div>
  `;
});



```