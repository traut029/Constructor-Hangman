function Letter(character){
    this.character=character;
    this.guessedBoolean=false;
    this.toString=function(){
        if(this.guessedBoolean==true){
            return this.character;
        }
        else{
            return "_";
        }
    }
    this.letterCheck=function(guessedLetter){
        if(guessedLetter==this.character){
            this.guessedBoolean=true;
        }
        
    }
}



module.exports=Letter