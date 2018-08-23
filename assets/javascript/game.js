//Array of possible computer choices
var cpuChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 
 
//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessLeft = 9;
var userGuess = [];

//random number generator variable
var compGuess = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];

//Initial computer statement
window.onload = function() {
document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;
document.getElementById("guessLeft").textContent = guessLeft;
document.getElementById("userGuess").textContent = userGuess;
    console.log(compGuess);
}

//User imput funcion and if/else statement
document.onkeyup = function(event) {
    var playerGuess = event.key;//local variable
    console.log(playerGuess);
    if (playerGuess === compGuess) {
        wins++;
        compGuess = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
        }
         else if (playerGuess !== compGuess) {
        guessLeft--;
        userGuess.push(playerGuess);
         }
   
    if (guessLeft === 0){
       losses++;
       userGuess = [];
       guessLeft = 9;
       compGuess = cpuChoices[Math.floor(Math.random() * cpuChoices.length)];
    }
document.getElementById("wins").textContent = wins;
document.getElementById("losses").textContent = losses;
document.getElementById("guessLeft").textContent = guessLeft;
document.getElementById("userGuess").textContent = userGuess;
};

