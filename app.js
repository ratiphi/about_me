'use strict';

var kids = prompt('how many kids does tim have?');
console.log('number of kids:', kids);

var hats = prompt('how many hats does tim have?');
console.log('number of hats:', hats);

if (kids === '3' || kids === '4') {
  //do stuff here
}

if (kids === '3' && hats === '2') {
  //do more stuff here
}

//Alert user they are about to cross the bridge of death.
alert('Stop! Who would cross the Bridge of Death must answer me these questions three, \'ere the other side he see.')
//Ask user for their name, log response to console, and then respond to them.
var varName = prompt('What is your name?');
console.log('name:' + varName);
alert('Nice to meet you, ' + varName + '.');
//Ask user what their quest is, log response to console, and then respond to them.
var varQuest = prompt('What is your quest?');
console.log('quest:' + varQuest);
alert('So, ' + varName + ', you are questing for ' + varQuest + '.');
//Ask user for their favorite color, log response to console, and then respond to them.
var varFavoriteColor = prompt('What is your favorite color?');
console.log('color:' + varFavoriteColor);
alert(varName + ', don\'t forget your favorite color ' + varFavoriteColor + ' while you quest for ' + varQuest + '!');
//Ask user the capital of Assyria, log response to console, and then respond to them.
var varAssyria = prompt('What is the capital of Assyria?');
console.log('assyria:' + varAssyria);
alert('Right. Off you go, ' + varName + '.' + ' Have fun in ' + varAssyria + ' while you think of ' + varFavoriteColor + ' objects and quest for ' + varQuest + '!');
