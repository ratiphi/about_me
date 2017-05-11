'use strict';

//Initialize the score variable.
var varScore = 0;
var varUserName = prompt('Hello! What is your name?')

//Alert user they are about to play a game.
alert('Would you like to play a game? It\'s pretty simple. I will ask you a few questions about myself, you just follow along!');

//Ask user first question, check response, and alert correct/incorrect.
function question1() {
var varQuestion1 = prompt('Does Tim like to eat pizza? Please enter (Y)es or (N)o');
console.log('question1: ' + varQuestion1);
varQuestion1 = varQuestion1.toUpperCase();
console.log('question1: ' + varQuestion1);
if (varQuestion1 === 'YES' || varQuestion1 === 'Y') {
  varScore = varScore + 1;
  alert('Correct!');
} else if (varQuestion1 === 'NO' || varQuestion1 === 'N') {
  alert('Incorrect!');
} else {
  alert('Invalid input!');
}
}

//Ask user second question, check response, and alert correct/incorrect.
function question2() {
var varQuestion2 = prompt('Does Tim like to eat pasta? Please enter (Y)es or (N)o');
console.log('question2: ' + varQuestion2);
varQuestion2 = varQuestion2.toUpperCase();
console.log('question2: ' + varQuestion2);
if (varQuestion2 === 'YES' || varQuestion2 === 'Y') {
  alert('Inorrect!');
} else if (varQuestion2 === 'NO' || varQuestion2 === 'N') {
  varScore = varScore + 1;
  alert('Correct!');
} else {
  alert('Invalid input!');
}
}

//Ask user third question, check response, and alert correct/incorrect.
function question3() {
var varQuestion3 = prompt('Does Tim like to fly kites? Please enter (Y)es or (N)o');
console.log('question3: ' + varQuestion3);
varQuestion3 = varQuestion3.toUpperCase();
console.log('question3: ' + varQuestion3);
if (varQuestion3 === 'YES' || varQuestion3 === 'Y') {
  alert('Incorrect!');
} else if (varQuestion3 === 'NO' || varQuestion3 === 'N') {
  varScore = varScore + 1;
  alert('Correct!');
} else {
  alert('Invalid input!');
}
}

//Ask user fourth question, check response, and alert correct/incorrect.
function question4() {
var varQuestion4 = prompt('Did Tim grow up in Georgia? Please enter (Y)es or (N)o');
console.log('question4: ' + varQuestion4);
varQuestion4 = varQuestion4.toUpperCase();
console.log('question4: ' + varQuestion4);
if (varQuestion4 === 'YES' || varQuestion4 === 'Y') {
  varScore = varScore + 1;
  alert('Correct!');
} else if (varQuestion4 === 'NO' || varQuestion4 === 'N') {
  alert('Incorrect!');
} else {
  alert('Invalid input!');
}
}

//Ask user fifth question, check response, and alert correct/incorrect.
function question5() {
var varQuestion5 = prompt('Did Tim go to University in Texas? Please enter (Y)es or (N)o');
console.log('question5: ' + varQuestion5);
varQuestion5 = varQuestion5.toUpperCase();
console.log('question5: ' + varQuestion5);
if (varQuestion5 === 'YES' || varQuestion5 === 'Y') {
  varScore = varScore + 1;
  alert('Correct!');
} else if (varQuestion5 === 'NO' || varQuestion5 === 'N') {
  alert('Incorrect!');
} else {
  alert('Invalid input!');
}
}

//******************************************************************************

//Generate a random number between 1 and 10.  Set counter variable to 1.
function question6() {
var varNumber = Math.floor((Math.random() * 10)+1);
console.log(varNumber);
var varCounter = 0;
var varResponse;

//While the counter is less than 4, ask the user for a number between 1 and 10.
while (varCounter < 4) {
  varResponse = parseInt(prompt('Guess a number between 1 and 10!'));
  //check to see if the number is higher or lower than the randomly generated number and respond to user
  if (varNumber > varResponse) {
    alert('You guessed too low.');
    varCounter++;
    console.log('counter:', varCounter);
  } else if (varNumber < varResponse) {
    alert('You guessed too high.');
    varCounter++;
    console.log('counter:', varCounter);
  } else if (varNumber === NaN || varNumber === null) {
    alert('Your answer must be a number between 1 and 10.');
  } else {
    alert('Correct!');
    varScore = varScore + 1;
    break;
  }
}
}

//******************************************************************************

//Declare required variables
function question7() {
var varStates = ['Georgia', 'North Carolina', 'Florida', 'Mississippi', 'New Mexico', 'Texas', 'Colorado', 'South Carolina'];
var varPrintStates = varStates.toString();
var varFlag = false;
var varCounter2 = 0;

//If the counter has not hit 6 and if the flag for a match has not been set to true yet, keep running the loop
while (varCounter2 < 6 && varFlag === false) {
  //Ask user a question
  var varAnswer = prompt('Can you guess a State I have lived in besides Washington? This is try number ' + (varCounter2 + 1) + ' out of 6.');
  varCounter2++;
  console.log('counter: ', varCounter2);
  console.log('User answer: ', varAnswer);
  console.log('Initial flag: ', varFlag);
  //For each item in the array, check to see if it matches the answer the user gave to the question
  for (var i=0; i < varStates.length; i++) {
    if (varAnswer === varStates[i]) {
      varFlag = true;
      console.log('current state:', varStates[i]);
      console.log('flag: ', varFlag);
    } else {
      console.log('current state:', varStates[i]);
      console.log('flag: ', varFlag);
    }
  }
}
console.log('Final flag: ', varFlag);

//If the flag was set to true, print the congrats message.  Otherwise, tell them they didnt guess it.
if (varFlag === true) {
  alert('Nice job!  You guessed a State I have lived in! The correct answers were ' + varPrintStates);
  varScore = varScore + 1;
} else {
  alert('Sorry, you didn\'t guess a State I have lived in! The correct answers were ' + varPrintStates);
}
}
question1();
question2();
question3();
question4();
question5();
question6();
question7();

//Alert user the game is over and print their score.
alert('Good job ' + varUserName + '! You scored ' + varScore + ' out of 7. Thank you for playing this game!');
