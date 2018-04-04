var Word = require("./word.js")
var inquirer = require("inquirer")

//bank of words
var wordBank = ["magnificent", "gallant", "kettle", "edible", "pie", "languini", "computer", "ethereal", "poster", "fantastic"]
var startUp = function () {
    //Picks a random number between 0 and 9, and uses it to pick a word from wordBank
    var randomWord = wordBank[Math.floor(Math.random() * 10)];
    //Store word with Word construct
    var word = new Word(randomWord)
    //populate character array in word construction
    word.fill();
    //Display the initial string
    word.string()
    //Guesses left
    var guesses = 10;
    //print inital hidden word
    console.log(word.displayString)


//inquirer prompt
var userGuessLetter = function () {
    if (!word.displayString.includes("_")) {
        console.log("YOU WIN! NEXT WORD!")
        //initiate restart up function
        startUp();
    }
    else if (guesses > 0) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter!",

                    name: "guess",
                }

            ]).then(function (answers) {
                //check if the guessed letter is correct
                word.wordCheck(answers.guess)
                //last display to compare to new display
                var oldDisplay = word.displayString;
                //recheck the display
                word.string()
                //remove one from guesses IF the guess was incorrect
                if (oldDisplay == word.displayString) {
                    //subtract from guesses
                    guesses--;
                    //console log incorrect
                    console.log("INCORRECT!")
                    //console log the number of guesses left
                    console.log(guesses + " guesses left!")
                }

                console.log(word.displayString)

                //run userGuessLetter function again
                userGuessLetter();
            });
    }
    else {

        console.log("You lose! The correct answer was " + word.word + "! NEXT WORD!")
        //initiate retart function
        startUp();
    }
}
// iniate with userGuessLetter function
userGuessLetter();
}

// calls userGuessLetter to run our code
startUp();
