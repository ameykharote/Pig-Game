/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- A player looses his entire score when he rolls two 6 in a row. After that,it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
- Add an input field to the HTML where players can set the winnning score, so that they can change the predefined score to 100. (Hint: you can read that value witht the .value property in Javascript. This is a
    good opportunity to use google to figure this out)
- Add anothe dice to the game, so that there are two dices now. The player looses his current score when on of them is a 1.

*/

var scores, roundScore, activePlayer,gameplaying;
var lastDice;
init();

//document.querySelector('#current-' + activePlayer).textContent = dice;
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

document.querySelector('.btn-roll').addEventListener('click', function() {

    if(gameplaying){
    
        //1. Random Number after roll of dice
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result of dice
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        

        //3. Update the round score IF the rolled number is not a 1
        if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            //roundScore = roundScore + dice;
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
        } else {       
            nextPlayer();
        
        }
        /*if (lastDice === 6 && dice === 6 ) {
            
            //Player looses all his score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            nextPlayer();

        } else if (dice !== 1) {
            
            //Add score
            //roundScore = roundScore + dice;
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
    
        } else {       
            
            nextPlayer();
        }
         
        lastDice = dice;*/
    }
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gameplaying){

        //Score should be holded to Global Score
        scores[activePlayer] += roundScore;
    
        //upadte the ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Because empty string "" is coerced to false. falsy value
        if (input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        //check if the player won the game
        if (scores[activePlayer] >= winningScore) {

            document.querySelector('#name-' + activePlayer).textContent = "Winner";
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameplaying = false;

        } else {

            //game should move to next player
            nextPlayer();
        }
    }
    
});

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameplaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
