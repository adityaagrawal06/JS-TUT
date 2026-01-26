# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```
## project 2

```javascript
const form =document.querySelector('form');
// this ue case will give u empty value
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  if(height ==='' || height <0 || isNaN(height)){
    result.innerHTML = "enter a valid height"
  }
  else if(weight ==='' || weight <0 || isNaN(weight)){
    result.innerHTML = "enter a valid weight"
  }
  else{
    const BMI = (weight/((height*height)/10000)).toFixed(2);
    if(BMI<18.6){
      result.innerHTML = `<span>${BMI}</span>; <p> you are underweight</p>`;
    }
    else if(BMI>24.9){
      result.innerHTML = `<span>${BMI}</span>; <p> you are overweight</p>`;
    }
    else{
      result.innerHTML = `<span>${BMI}</span>; <p> you are fit</p>`;
    }
  }
  
  
})




```

## project 3

```javascript 

const clock = document.getElementById('clock')

// let date = new Date()
// console.log(date.toLocaleTimeString())  // for once only

setInterval(function(){
  let date = new Date()
  clock.innerHTML= date.toLocaleTimeString()
},1000)

```

## project 4

```javascript

let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const strtOver = document.querySelector('.resultParas')


const p = document.createElement('p');
let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('please entter a valid number')
  }
  else if(guess<1 || guess>100){
    alert('please entter a valid number')
  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMsg(`Game Over. random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMsg(`YOU GUESSED IT RIGHT`)
    endGame()
  }
  else if(guess<randomNumber){
    displayMsg(`number is too low`)
  }
  else if(guess>randomNumber){
    displayMsg(`number is too high`)
  }
}
function displayGuess(guess){
  userInput.value = ''
  guessSlot.innerHTML += `${guess} ,`
  numGuess++;
  remaining.innerHTML= `${11-numGuess}`
}

function displayMsg(msg){
  lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML= `<h2 id="newgame">Start new Game</h2>`
  strtOver.appendChild(p)
  playGame=false
  newGame();
}

function newGame(){
  const newGameButton = document.querySelector('#newgame')
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random()*100+1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML =''
    remaining.innerHTML= `${11-numGuess}`
    userInput.removeAttribute('disabled')
    strtOver.removeChild(p)
    lowOrHi.innerHTML= ''
     playGame=true;
  })
}

```
## Project 5

```javascript

const insert  = document.getElementById('insert')

window.addEventListener('keydown',(e)=> { 
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>key</th>
      <th>keyCode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' '? 'space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
   
  </table>
    </div>
  `;
})

```

## Project 6

```javascript


// generate a random colour

const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i =0 ; i<6; i++){
      color+= hex[Math.floor(Math.random()*16)]
  }
  return color;
}

let set
document.querySelector("#start").addEventListener('click',function(){
  if(!set){
    set=setInterval(function(){
    document.body.style.backgroundColor = randomColor();
    
  },1000)};
  
})

document.querySelector("#stop").addEventListener('click',function(){
   clearInterval(set);
   set = null; // to add professsionalism
})

```