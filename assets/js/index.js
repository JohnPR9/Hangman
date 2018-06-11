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

var userGuess = [];

var wrongGuess = [];

var passing = outputSetup();

var uGuess = "";

var numberOfGuesses = 15;

console.log("Random Word", passing);

for (var i = 0; i < passing.length; i++) {
    userGuess.push("_ ");
}
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

function testingWord(passing, uGuess) {

    var ug = document.getElementById("guess").value;
    var n = passing.length;

    document.getElementById("guess").innerHTML = ug;

    for (var i = 0; i < passing.length; i++) {
        if (passing[i] == ug) {
            userGuess[i] = ug;
            blanks.innerHTML = userGuess.join("");
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
        var nGuesses = document.querySelector("#number");
        nGuesses.innerHTML = numberOfGuesses;
        wrongGuess.push(ug);
        var wrong = document.querySelector("#wrong");
        wrong.innerHTML = wrongGuess.join("");
        // console.log("wrongGuess", wrongGuess);
        // console.log("wrong", wrong);
        }
    }

        // if (userGuess == passing) {
        //         var wins = wins + 1;
        //         wins = document.querySelector("#wins");
        //         wins.innerHTML = userGuess.join("");
        //         console.log("wins", wins);
        // } 
    // var compare = passing.charAt(i);
    // console.log("compare in for", compare);
    // console.log("passing ", passing);

    // console.log("After Compare", compare);
    // console.log("After Compare UGuess", uGuess);

}