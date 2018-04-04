var Letter = require("./letter.js")

function Word(wordGiven) {
    //store word given as a string
    this.word = wordGiven;
    //an array to put letters in
    this.characterArray = [];

    //The word has not been found yet
    this.wordFoundBoolean = false;

    //Populate characterArray with letters from word
    this.fill=function(){
        for(var i=0;i<this.word.length;i++){
            var letter = new Letter(this.word[i])
            this.characterArray.push(letter)
        }
    }
    //render the word with actual letters and underscores as needed
    this.string = function () {
         this.displayArray=[]
        for (var i = 0; i < this.characterArray.length; i++) {
            var value=this.characterArray[i].toString()
            this.displayArray.push(value);
        this.displayString=this.displayArray.join(" ")
        }
    }
    //checks if the guessed letter matches any of letters in the word
    this.wordCheck = function (guessedLetter) {
        for (var i = 0; i < this.characterArray.length; i++) {
            var value = this.characterArray[i].letterCheck(guessedLetter)
           
        }
    }
}
//dummy data
// var hello=new Word("hello")
// hello.fill();
// console.log(hello.characterArray)
// hello.string()
// console.log(hello.displayArray)
// console.log(hello.displayString)
// hello.wordCheck("o");
// hello.string()
// console.log(hello.characterArray)
// console.log(hello.displayArray)
// console.log(hello.displayString)
//end dummy data

module.exports = Word;
