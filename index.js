var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score=0;
console.log(chalk.black.bgGreen.underline("Welcome to HOW WELL YOU KNOW ME quiz "));
console.log(chalk.redBright("Hey,great to have you onboard"+"\n"+"Lets check How well you know Yogesh !"));

console.log(chalk.keyword("orange")("Enter your Name!"));
var playerName=readlineSync.question(playerName);
console.log(chalk.cyan("Welcome "+ playerName + " Let's Begin!"));

function questionBank(question,answer){
    console.log(chalk.redBright("Please Type answer in this format: Yogesh (Words first letter in Capital)"));
    console.log(chalk.keyword('orange')(question));
    var playerAnswer=readlineSync.question(playerAnswer);
    console.log("Your Answer: "+ playerAnswer);

    if(playerAnswer === answer){
       console.log(chalk.green("Correct Answer!"));
       score=score + 1;
    }else{
        console.log(chalk.red("Wrong Answer!"));
       score=score - 1;
    }

    console.log("-------------"); 
    console.log("Current Score:"+ score);
}



questionBank("1. What is Yogesh's age(in Months)? ","23");
questionBank("2. What was Yogesh's favourite subject in School?","Mathematics");
questionBank("3. What is Yogesh's favourite TV show?","Game Of Thrones");
questionBank("4. what is Yogesh's favourite sport?","Cricket");
questionBank("5. What will Yogesh choose among Sandwich, Bhelpuri, Panipuri?","Panipuri");


if(score===5){
    console.log("Your Final Score:",score);
  console.log(chalk.cyanBright("Congratulations," + playerName +" you are a TRUE friend of mine. "));
}else{
console.log("Your Final Score:",score);
}

