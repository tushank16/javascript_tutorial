var secretno =4;
var stringguess = prompt("Enter a no!!");
var guess = Number(stringguess);

if(guess === secretno){
    alert("You guessed the no correctly");
}

else if(guess > secretno){
    alert("too High !! guess a lower no.");
}

else{
    alert("too low !! guess a higher no.");
}