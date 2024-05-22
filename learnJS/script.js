let enterName = prompt("Enter your name");
loadDIV ();


function loadDIV (){
document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName + "</H1><H2>Guess a number between 1&2</H2>";
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + "</H1><H2>Guess a number between 1&2</H2>";
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + playerFeedback;
}

function enterNumber () {
    PlayerGuess = prompt("Enter a number")
}