let randomNumber=parseInt(Math.random() * 100 + 1);
const user_input=document.querySelector('#userInput');
const low_or_high=document.querySelector('.lowOrHigh');
const submit=document.querySelector('#submi');
const Output_div=document.querySelector('.inner');
const previous_guesses=document.querySelector('.prevValue');
const guesses_remaining=document.querySelector('.guessRemain');

const p=document.createElement('p');
let prevGuessArr=[];
let remaining_guesses_counting=1;
let playGame=true;
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        
        
        const guess=parseInt(user_input.value);
        validateGuess(guess);
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid Number');
    }
    else if(guess<1){
        alert('Please enter a number more than 0');
    }
    else if(guess>100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuessArr.push(guess)
        if(remaining_guesses_counting===10){
            displayGuess(guess);
            displayMassage(`Game Over.  Random number was ${randomNumber}`);
            endGame()
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess===randomNumber){
        displayMassage('You guessed it right');
        endGame();
    }
    else if(guess<randomNumber){
        displayMassage('Number is Too low');
    }
    else if(guess>randomNumber){
        displayMassage('Number is Too high');
    }
}


function displayGuess(guess){
    user_input.value= '';
    previous_guesses.innerHTML +=`${guess}, `
    remaining_guesses_counting++
    guesses_remaining.innerHTML=`${11-remaining_guesses_counting}`
}

function displayMassage(massage){
    low_or_high.innerHTML=`<h2>${massage}</h2>`
}
function endGame(){
    user_input.value='';
    user_input.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML='<h2 id="newP" style="color:red">Start new Game</h2>'
    Output_div.appendChild(p);
    playGame=false;

    newGame();
}
function newGame(){
    const new_Game=document.querySelector('#newP');
    new_Game.addEventListener('click', function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuessArr=[];
        remaining_guesses_counting=1;
        previous_guesses.innerHTML='';
        user_input.removeAttribute('disabled');
        guesses_remaining.innerHTML=`${11-remaining_guesses_counting}`;
        Output_div.removeChild(p);
        low_or_high.innerHTML='';
        playGame=true;

    })
}