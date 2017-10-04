

var scores, roundScore, activePlayer,gamePlaying;

init();



///document.querySelector('#current-' + activePlayer).textContent = dice; //to set the value
//document.querySelector('#current-' + activePlayer).innerHTML='<em>'+dice+'</em>';

//var x=document.querySelector("#score-0").textContent; to read the content of id score-0


function btn(){
}

//document.querySelector('.btn-roll').addEventListener('click',btn); btn is a callback function here

document.querySelector('.btn-roll').addEventListener('click',function() {
    if (gamePlaying){
    //1. A random Number
    var dice = Math.floor(Math.random()*6)+1;
    //2.Display the Result
    var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    
    //3.Update the round score IF the rolled  number was not a 1
    
    if(dice !== 1)
     {//Add score
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
     }
    else
     {//Next Player
         nextPlayer();
         
     }
    
    }
}); //This is a anonymous function



document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
   // add current score to global score 
    scores[activePlayer] += roundScore;
    
    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //To check if player won the game
    if(scores[activePlayer] >= 100)
        {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' +activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' +activePlayer +'-panel').classList.remove('active');
            gamePlaying = false;
        }
    else
        {
          nextPlayer();  
        }
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
         roundScore = 0;
         document.getElementById('current-0').textContent = '0';
         document.getElementById('current-1').textContent = '0';
         
         //changeing the class
         //document.querySelector('.player-0-panel').classList.remove('active');
         //document.querySelector('.player-1-panel').classList.add('active');
         document.querySelector('.player-0-panel').classList.toggle('active');
         document.querySelector('.player-1-panel').classList.toggle('active');
         document.querySelector('.dice').style.display = 'none';
}

function init()
{
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying=true;    
document.querySelector('.dice').style.display = 'none'; //to set the css value of display of class dice to none

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click',init);









//Subham Sharma















