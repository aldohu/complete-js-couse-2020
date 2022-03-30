'use strict';

/*
GAME RULES :
- Game has 2 players,  playing in rounds
-In each turn, a player  rolls a dice as many times as he wishes. Each result get added to his ROUND score.
- BUT, if the player rolls a 1 , all his ROUND score gets lost. After that , it is the next player turn.
- The player can chose "Hold",  which means that hisr ROUND score gets added to his GLOBAL score. After that it is the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 
var scores,roundScore, activePlayer;

scores = [0,1];
roundScore = 0;
activePlayer = 0;

//document.querySelector("#current-" + activePlayer).textContent = dice;

//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>"

//var x = document.querySelector("#score-0").textContent;

document.querySelector(".dice").style.display = "none";

document.getElementById("score--0").textContent = "0";
document.getElementById("score--1").textContent = "0";
document.getElementById("current--0").textContent = "0";
document.getElementById("current--1").textContent = "0";

document.querySelector(".btn--roll").addEventListener("click",function(){
    //1. Random number
    var dice = (Math.floor(Math.random() * 6)) + 1;

    //2. Display the result
    var diceDOM =document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png"

    //3. Update the round if the rolled number was not a 1

    if(dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector("#current--" + activePlayer).textContent = roundScore;
    }else {
        //Next player
        nextPlayer();
    }
})

document.querySelector(".btn--hold").addEventListener("click", function(){
    //1. add current score to global score
    scores[activePlayer] +=  roundScore;
    //2. update the UI 
    document.querySelector("#score--" + activePlayer).textContent = scores[activePlayer]
    //3. CHekc if player won the game
    if(scores[activePlayer] >= 20){
        //change ui to player won
        document.querySelector("#name--" + activePlayer).textContent ="Winner"
        document.querySelector(".player--" + activePlayer).classList.add("player--winner");
        document.querySelector(".player--" + activePlayer).classList.remove("player--active")
    }else {
        nextPlayer();
    }
})

function nextPlayer(){
    activePlayer === 0? activePlayer =1: activePlayer = 0;
        document.getElementById("current--0").textContent = "0";
        document.getElementById("current--1").textContent = "0";
        document.querySelector(".player--0").classList.toggle("player--active");
        document.querySelector(".player--1").classList.toggle("player--active");

        document.querySelector(".dice").style.display = "none";
        roundScore = 0;
}