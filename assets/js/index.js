//Array with words for game
var words = [
    "building",
    "soccer",
    "football",
    "coffee",
    "aligator",
    "fishing",
    "message",
    "elephant",
    "camera",
    "battery",
    "motorcycle",
    "baseball",
    "television",
    "frustration",
    "understanding",
    "javascript",
    "tutoring"
];

//Array to hold user guesses
var userGuess = [];

//Array to hold wrong guesses
var wrongGuess = [];

// variable for outputSetup function call.
var passing = outputSetup();

//global scope variable
var uGuess = "";

//global scope variable.
var numberOfGuesses = 15;

console.log("Random Word", passing);

// for loop to push underscores into the array to display list of correct guesses
for (var i = 0; i < passing.length; i++) {
    userGuess.push("_ ");
}
//variable blanks and id output for HTML
var blanks = document.querySelector("#output");
blanks.innerHTML = userGuess.join("");

// console.log(blanks);
// console.log(userGuess);
// console.log("JS", userGuess);

// function to setup output to the screen.
function outputSetup() {

    var totalWords;
    var randomWord;
    var response;

    totalWords = words.length;
    randomWord = Math.floor((Math.random() * totalWords) + 1) % totalWords;
    response = words[randomWord];

    return response;
}

// function called from index.html line 40 on click button.
//variable "passing" holds the game word from the words array.
//variable "uGeuss" appears to hold nothing.
//variable "ug" holds the users guess.

function testingWord(passing, uGuess) {

    var ug = document.getElementById("guess").value;
    var n = passing.length;
    
    console.log("uGuess", uGuess);
    console.log("ug", ug);

    // gets the users guess from HTML id guess and stores it in variable ug.
    document.getElementById("guess").innerHTML = ug;

    //for loop gets the length of the "passing" variable game word to control the players number of guesses
    //passing[i] holds the players most current letter guessed.
    //array userGuess holds correct guesses
    //variable ug appears to hold incorrect guesses. Not sure yet
    //numberofGuesses is a global variable to control count the number of guesses the player has made. 
    //should end the game after 15 guesses. Does not work.
    //should count the number of times that the user has won the game. Does not work.

    for (var i = 0; i < passing.length; i++) {
        if (passing[i] == ug) {
            console.log("passing[i]", passing[i]);
            userGuess[i] = ug;
            console.log("userGuess[i]", userGuess[i]);
            blanks.innerHTML = userGuess.join("");
            numberOfGuesses--;
            var wins = 0;
            wins++;
            wins = document.querySelector("#wins");
            // wins.innerHTML = userGuess.join("");
            console.log("wins", wins);
        }
    }

    if (userGuess.indexOf(ug) < 0){
        if(wrongGuess.indexOf(ug) < 0) {
        numberOfGuesses--;
        var nGuesses = document.querySelector('#number');
        console.log(nGuesses);
        nGuesses.innerHTML = numberOfGuesses;
        wrongGuess.push(ug);
        var wrong = document.querySelector("#wrong");
        wrong.innerHTML = wrongGuess.join("");
        // console.log("wrongGuess", wrongGuess);
        // console.log("wrong", wrong);
        }
    }

        if (userGuess == passing) {
                var wins = wins + 1;
                wins = document.querySelector("#wins");
                wins.innerHTML = userGuess.join("");
                console.log("wins", wins);
        } 
    // var compare = passing.charAt(i);
    // console.log("compare in for", compare);
    // console.log("passing ", passing);

    // console.log("After Compare", compare);
    // console.log("After Compare UGuess", uGuess);

}