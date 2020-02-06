# Pig-Game

Basic Pig Dice Game.
1. Main.js is primary JS file, Rule 1 to 8 applied with exception of 7.
2. App.js secondary JS file with basic game functionality but not the later additions, Rule 1 to 5 applied as Rule 6 to 8 where applied in main.js.

GAME RULES:

1. The game has 2 players, playing in rounds
2. In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
3. BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
4. The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
5. The first player to reach 100 points on GLOBAL score wins the game
6. (Removed for the mainjs)A player looses his entire score when he rolls two 6 in a row. After that,it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
7. Add an input field to the HTML where players can set the winnning score, so that they can change the predefined score to 100. (Hint: you can read that value witht the .value property in Javascript. This is a
   good opportunity to use google to figure this out)
8. Add another dice to the game, so that there are two dices now. The player looses his current score when on of them is a 1.

Part of Jonas's The Complete Javascript Course 2020 from Udemy.