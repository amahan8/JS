# Projects of DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#Solutioncode

##Project1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (b) {
  console.log(b);
  b.addEventListener('click', function (e) {
    if(e.target.id ==='grey'){
      body.style.backgroundColor =e.target.id;
    }
      if(e.target.id ==='white'){
        body.style.backgroundColor =e.target.id;}
        if(e.target.id ==='blue'){
          body.style.backgroundColor =e.target.id;}
          if(e.target.id ==='yellow'){
            body.style.backgroundColor =e.target.id;}
   
   });
});


```
## Project2 Solution 
```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      results.innerHTML = `Under Weight ${bmi}`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Normal Range ${bmi}`;
    } else {
      results.innerHTML = `Overweight ${bmi}`;
    }
  }
});
```

## Project3 Solution

``` Javscript
const clock = document.querySelector('#clock');
setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
## Project4 Solution

```Javascript
const randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('.guessField');

const submit = document.querySelector('#subt');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const LowOrHi = document.querySelector('.lowOrHi');

const Startover = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    // prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over , Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed right!`);
  } else if (guess < randomNumber) {
    displayMessage('You guessed lower than random number');
  } else if (guess > randomNumber) {
    displayMessage('You guessed greater than random number');
  }
}

function displayMessage(message) {
  LowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  userInput.value = '';
  numGuess++;
  guessSlot.innerHTML += `${guess}  `;
  remaining.innerHTML = `${11 - numGuess}`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start a new Game</h2>';
  Startover.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    const randomNumber = parseInt(Math.random() * 100 + 1);
    guessSlot.innerHTML = '';
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    Startover.removeChild(p);
    playGame = true;
  });
}

```