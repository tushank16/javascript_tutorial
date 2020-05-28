///the input variables, Button and numInput
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input[type = number]");

///The display variables
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameover = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
   if (!gameover) {
    p1Score++;
    if (p1Score === winningScore) {
        p1Display.classList.add("winner");
        p2Display.classList.add("loser");
        gameover = true;
    }
    p1Display.textContent = p1Score;    
   }
});

p2Button.addEventListener("click", function(){
    if (!gameover) {
    p2Score++;
    if (p2Score ===  winningScore) {
        p2Display.classList.add("winner");
        p1Display.classList.add("loser");
        gameover = true;
    }
    p2Display.textContent = p2Score;            
    }

});

resetButton.addEventListener("click",function () {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;    
    p2Display.textContent = p2Score;    
    p1Display.classList.remove("winner");
    p1Display.classList.remove("loser");
    p2Display.classList.remove("winner");
    p2Display.classList.remove("loser");
    gameover = false;
}

numInput.addEventListener("change", function () {
    if(numInput.value<=0)
    {
        alert("Playing to cant be less than 1");
        numInput.value = 1;
    }
    if(numInput.value>=10)
    {
        alert("Playing to cant be more than 10");
        numInput.value = 10;
    }
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});