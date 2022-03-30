'use strict';

/*
GAME RULES :
- Game has 2 players,  playing in rounds
-In each turn, a player  rolls a dice as many times as he wishes. Each result get added to his ROUND score.
- BUT, if the player rolls a 1 , all his ROUND score gets lost. After that , it is the next player turn.
- The player can chose "Hold",  which means that hisr ROUND score gets added to his GLOBAL score. After that it is the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/ 
var scores,roundScore, activePlayer, dice;

scores = [0,1];
roundScore = 0;
activePlayer = 1;

dice = (Math.floor(Math.random() * 6)) + 1;

document.querySelector("#current-" + activePlayer).textContent = dice;