'use strict';

//Alert user they are about to play a game.
alert('We are going to play a game!')
//Ask user first question, check response, and alert correct/incorrect.
var varQuestion1 = prompt('Does Tim like to eat pizza? Please enter (Y)es or (N)o');
console.log('question1: ' + varQuestion1);
varQuestion1 = varQuestion1.toUpperCase();
console.log('question1: ' + varQuestion1);
if (varQuestion1 === 'YES' || varQuestion1 === 'Y') {
  alert('Correct!');
} else if (varQuestion1 === 'NO' || varQuestion1 === 'N') {
  alert('Incorrect!');
} else {
  alert('Invalid input!');
}

//Ask user second question, check response, and alert correct/incorrect.
var varQuestion2 = prompt('Does Tim like to eat pasta? Please enter (Y)es or (N)o');
console.log('question2: ' + varQuestion2);
varQuestion2 = varQuestion2.toUpperCase();
console.log('question2: ' + varQuestion2);
if (varQuestion2 === 'YES' || varQuestion2 === 'Y') {
  alert('Inorrect!');
} else if (varQuestion2 === 'NO' || varQuestion2 === 'N') {
  alert('Correct!');
} else {
  alert('Invalid input!');
}

//Ask user third question, check response, and alert correct/incorrect.
var varQuestion3 = prompt('Does Tim like to fly kites? Please enter (Y)es or (N)o');
console.log('question3: ' + varQuestion3);
varQuestion3 = varQuestion3.toUpperCase();
console.log('question3: ' + varQuestion3);
if (varQuestion3 === 'YES' || varQuestion3 === 'Y') {
  alert('Incorrect!');
} else if (varQuestion3 === 'NO' || varQuestion3 === 'N') {
  alert('Correct!');
} else {
  alert('Invalid input!');
}

//Ask user fourth question, check response, and alert correct/incorrect.
var varQuestion4 = prompt('Did Tim grow up in Georgia? Please enter (Y)es or (N)o');
console.log('question4: ' + varQuestion4);
varQuestion4 = varQuestion4.toUpperCase();
console.log('question4: ' + varQuestion4);
if (varQuestion4 === 'YES' || varQuestion4 === 'Y') {
  alert('Correct!');
} else if (varQuestion4 === 'NO' || varQuestion4 === 'N') {
  alert('Incorrect!');
} else {
  alert('Invalid input!');
}

//Ask user fifth question, check response, and alert correct/incorrect.
var varQuestion5 = prompt('Did Tim go to University in Texas? Please enter (Y)es or (N)o');
console.log('question5: ' + varQuestion5);
varQuestion5 = varQuestion5.toUpperCase();
console.log('question5: ' + varQuestion5);
if (varQuestion5 === 'YES' || varQuestion5 === 'Y') {
  alert('Correct!');
} else if (varQuestion5 === 'NO' || varQuestion5 === 'N') {
  alert('Incorrect!');
} else {
  alert('Invalid input!');
}

//Alert user the game is over.
alert('Thank you for playing this game!')
