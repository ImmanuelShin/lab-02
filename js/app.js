'use strict';

// User greeting section. Prompts user for name.
let userName = prompt('Hello! What is your name?');
if (userName) {
  alert('Welcome to this webpage, ' + userName + '! I\'m glad to have you here. This website contains information all about me, so feel free to get to know me a bit!');
} else {
  userName = 'anonymous user';
  alert('Welcome to this webpage, anonymous user! I\'m glad to have you here. This website contains information all about me, so feel free to get to know me a bit!');
}



// Quiz section. Called by quizButton.
function startQuiz(){

  // Bank of all Prompts
  let prompt1 = 'I really like chocolate. Of the many chocolates, do I like dark chocolate the best?';
  let prompt2 = 'In spite of the rainbow, do I prefer grayscale?';
  let prompt3 = 'I am always really tired. Do I manage to stay awake with excessive use of coffee?';
  let prompt4 = 'I don\'t drink coffee, sure, but do I instead drink a nice cup of tea?';
  let prompt5 = 'I find pets really cute. Do I own 3 dogs and 2 cats?';

  // Bank of all Answers
  let realAnswer1 = 'Yes';
  let realAnswer2 = 'Yes';
  let realAnswer3 = 'No';
  let realAnswer4 = 'No';
  let realAnswer5 = 'No';

  // First question
  let chocolateQ = prompt(prompt1).toLowerCase();

  // First answer
  if (isYes(chocolateQ)){
    //console.log('Correct! I can\'t handle too sweet of chocolate.');
    alert('Correct! I can\'t handle too sweet of chocolate.');
  } else if (isNo(chocolateQ)){
    //console.log('Incorrect! Dark chocolate is the best.');
    alert('Incorrect! Dark chocolate is the best.');
  } else {
    //console.log('You did not enter yes/no or y/n for this question, buddy.');
    alert('You did not enter yes/no or y/n for this question, buddy.');
  }

  // Second question
  let colorQ = prompt(prompt2).toLowerCase();

  // Second answer
  if (isYes(colorQ)){
    //console.log('Correct! I like how black and white looks.');
    alert('Correct! I like how black and white looks.');
  } else if (isNo(colorQ)){
    //console.log('Incorrect! Color is fine, but I do like my grays.');
    alert('Incorrect! Color is fine, but I do like my grays.');
  } else {
    //console.log('You did not enter yes/no or y/n for this question, pal.');
    alert('You did not enter yes/no or y/n for this question, pal.');
  }

  // Third Question
  let coffeeQ = prompt(prompt3).toLowerCase();

  // Third answer
  if (isYes(coffeeQ)){
    //console.log('Incorrect! Coffee just isn\'t for me.');
    alert('Incorrect! Coffee just isn\'t for me.');
  } else if (isNo(coffeeQ)){
    //console.log('Correct! I find coffee doesn\'t do anything for me.');
    alert('Correct! I find coffee doesn\'t do anything for me.');
  } else {
    //console.log('You did not enter yes/no or y/n for this question, mate.');
    alert('You did not enter yes/no or y/n for this question, mate.');
  }

  // Fourth Question
  let teaQ = prompt(prompt4).toLowerCase();

  // Fourth answer
  if (isYes(teaQ)){
    //console.log('Incorrect! Tea is also not for me!');
    alert('Incorrect! Tea is also not for me!');
  } else if (isNo(teaQ)){
    //console.log('Correct! Instead of caffeine, I ingest pure willpower.');
    alert('Correct! Instead of caffeine, I ingest pure willpower.');
  } else {
    //console.log('You did not enter yes/no or y/n for this question, chum.');
    alert('You did not enter yes/no or y/n for this question, chum.');
  }

  // Fifth Question
  let petQ = prompt(prompt5).toLowerCase();

  // Fifth answer
  if (isYes(petQ)){
    //console.log('Incorrect! That is way too much maintenance.');
    alert('Incorrect! That is way too much maintenance.');
  } else if (isNo(petQ)){
    //console.log('Correct! Instead of owning pets, I am friends with people who do.');
    alert('Correct! Instead of owning pets, I am friends with people who do.');
  } else {
    //console.log('You did not enter yes/no or y/n for this question, chum.');
    alert('You did not enter yes/no or y/n for this question, chum.');
  }


  // Calls printAnswers function to print the answers onto HTML.
  printAnswers(chocolateQ, 1, prompt1, realAnswer1);
  printAnswers(colorQ, 2, prompt2, realAnswer2);
  printAnswers(coffeeQ, 3, prompt3, realAnswer3);
  printAnswers(teaQ, 4, prompt4, realAnswer4);
  printAnswers(petQ, 5, prompt5, realAnswer5);

  // Calls finalPrint to print final message on HTML.
  finalPrint();
}

// function to print answers to HTML. Requires the answer and the corresponding question number
function printAnswers(answer, number, prompt, realAns){
  let pPrint = document.getElementById('quizQ' + number);
  pPrint.textContent = prompt + ' Your answer: ' + answer + '. Correct Answer: ' + realAns;
}

// Function to print final message to user.
function finalPrint(){
  document.getElementById('finalMessageArea').textContent = 'Hey, ' + userName + '! Thanks for visiting my site. I hope you got to know a little bit more about me. This website might be small and simple, but it is mine. It makes me happy that I could share it with you.'
}

// Repetitive 'yes' checking
function isYes(answer){
  return (answer === 'y' || answer === 'yes');
}

// Repetitive 'no' checking
function isNo(answer){
  return (answer === 'n' || answer === 'no');
}
