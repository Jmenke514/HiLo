var computerAnswer = Math.floor((Math.random()*99)+1);
var winner = 0;

function guessAnswer(){
  var userGuess = parseInt(prompt("I'm thinking of a number from 1-100"));
  if(userGuess === computerAnswer){
    alert("You Win!");
    winner = 1;
  }
  if(userGuess > computerAnswer){
    alert("Go Lower");
  }
  if(userGuess < computerAnswer){
    alert("Go Higher");
  }
}

function guessLoop(){
  while(winner === 0){
    guessAnswer();
  }
}
