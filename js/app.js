'use strict';

// User greeting section. Prompts user for name.
let userName = prompt('Hello! What is your name?');
alert('Welcome to this webpage, ' + userName + '! I\'m glad to have you here. This website contains information all about me, so feel free to get to know me a bit!');

// Quiz section. Called by quizButton.
function startQuiz(){

  // First question
  let chocolateQ = prompt('I really like chocolate. Between milk and dark chocolate, which type do I like best?').toLowerCase();

  // First answer
  if (isYes(chocolateQ)){
    alert('');
  } else if (isNo(chocolateQ)){
    alert('');
  } else {
    alert('You did not enter yes/no or y/n for this question, buddy.');
  }

  // Second question
  let colorQ = prompt('In spite of the rainbow, do I prefer grayscale?').toLowerCase();

  // Second answer
  if (isYes(colorQ)){
    alert('');
  } else if (isNo(colorQ)){
    alert('');
  } else {
    alert('You did not enter yes/no or y/n for this question, pal.');
  }

  // Third Question
  let coffeeQ = prompt('I am always really tired. Do I manage to stay awake with excessive use of coffee?').toLowerCase();

  // Third answer
  if (isYes(coffeeQ)){
    alert('');
  } else if (isNo(coffeeQ)){
    alert('');
  } else {
    alert('You did not enter yes/no or y/n for this question, mate.');
  }

  // Fourth Question
  let teaQ = prompt('I don\'t drink coffee, sure, but do I instead drink a nice cup of tea?').toLowerCase();

  // Fourth answer
  if (isYes(teaQ)){
    alert('');
  } else if (isNo(teaQ)){
    alert('');
  } else {
    alert('You did not enter yes/no or y/n for this question, chum.');
  }

  // Fifth Question
  let petQ = prompt('I find pets really cute. Do I own 3 dogs and 2 cats?').toLowerCase();

  // Fifth answer
  if (isYes(petQ)){
    alert('');
  } else if (isNo(petQ)){
    alert('');
  } else {
    alert('You did not enter yes/no or y/n for this question, chum.');
  }
}


// Repetitive 'yes' checking
function isYes(answer){
  return (answer === 'y' || answer === 'yes');
}

// Repetitive 'no' checking
function isNo(answer){
  return (answer === 'n' || answer === 'no');
}
