var Word = require("./word.js")
var inquirer = require("inquirer")

//bank of words
var wordBank = ["magnificent", "gallant", "kettle", "edible", "pie", "languini", "computer", "ethereal", "poster", "fantastic"]
//Picks a random number between 0 and 9, and uses it to pick a word from wordBank
var randomWord = wordBank[Math.floor(Math.random() * 10)];
//Store word with Word construct
var word = new Word(randomWord)
//Guesses left
var guesses = 10;
//inquirer prompt
var userGuessLetter = function () {
    if (guesses > 0) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter!\n",

                    name: "guess",

                    suffix: "_ _ _",
                }

            ]).then(function (answers) {

                //remove one from guesses
                guesses--;
                //run userGuessLetter function again
                //userGuessLetter();
            });
    }
}

// calls userGuessLetter to run our code
userGuessLetter();