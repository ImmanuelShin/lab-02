'use strict';

// User greeting section. Prompts user for name.
let userName = prompt('Hello! What is your name?');

// Calling
intro(userName);


// Logic section for intro prompt. Takes prompt input as argument.
// If not null/undefined, will alert with given input, else will switch input to "anonymous user"
function intro(input) {
  if (input) {
    alert('Welcome to this webpage, ' + input + '! I\'m glad to have you here. This website contains information all about me, so feel free to get to know me a bit!');
    finalPrint(input);
  } else {
    input = 'anonymous user';
    alert('Welcome to this webpage, anonymous user! I\'m glad to have you here. This website contains information all about me, so feel free to get to know me a bit!');
    finalPrint(input);
  }
}

// Tally keeps track of # correct guesses. Global for ease of access.
let correctTally = 0;

// Quiz section. Called by quizButton.
function startQuiz(){

  // Tally reset
  correctTally = 0;

  // Retrieves all arrays.
  const everything = getEverything();
  const questions  = everything[0];
  const prompts  = everything[1];
  const answers  = everything[2];
  const responses  = everything[3];
  const corrects  = everything[4];

  // Loop for yesNo function. Loops five times for all five yes/no questions.
  for (let x = 0; x < 5; x++){
    prompts[x] = yesNo(questions[x], prompts[x], responses[x], corrects[x]);
  }

  // Calls question 6
  // Adds returning prompts and answers to respective arrays
  let return6 = numberGuesser(questions[5]);
  prompts[5] = return6[0];
  answers[5] = return6[1];

  // Calls question 7
  // Adds user prompts into prompts
  prompts[6] = multiGuess(questions[6], answers[6]);

  // Makes the hidden answer section visible
  getID('quizAnswerSection').style.visibility = 'visible';

  printAnswers(questions, prompts, answers);

}

// Function area for all
function getEverything() {

  const everything = [];

  // Bank of all questions
  const questions = [
    'I really like chocolate. Of the many chocolates, do I like dark chocolate the best?',
    'In spite of the rainbow, do I prefer grayscale?',
    'I am always really tired. Do I manage to stay awake with excessive use of coffee?',
    'I don\'t drink coffee, sure, but do I instead drink a nice cup of tea?',
    'I find pets really cute. Do I own 3 dogs and 2 cats?',
    'Let\'s change it up a bit and play a guessing game. I am thinking of a number between 1 and 10. What number is it?',
    'What about a bit of math? If 4 = x\u00B2, what can x equal?'
  ];

  // Bank of all prompts
  const prompts = [];

  // Bank of all Answers
  const answers = [
    'Yes',
    'Yes',
    'No',
    'No',
    'No',
    '',
    [2, -2]
  ];

  //Bank of all yes or no answers.
  const responses = [
    ['Correct! I can\'t handle too sweet of chocolate.','Incorrect! Dark chocolate is the best.'],
    ['Correct! I like how black and white looks.','Incorrect! Color is fine, but I do like my grays.'],
    ['Incorrect! Coffee just isn\'t for me.','Correct! I find coffee doesn\'t do anything for me.'],
    ['Incorrect! Tea is also not for me!','Correct! Instead of caffeine, I ingest pure willpower.'],
    ['Incorrect! That is way too much maintenance.','Correct! Instead of owning pets, I am friends with people who do.']
  ];

  // Bank of all correct answer values.
  const corrects = [
    [1],
    [1],
    [0],
    [0],
    [0],
  ];
  everything.push(questions, prompts, answers, responses, corrects);
  return everything;
}

// Generic yes or no function. Accepts questions, prompts, responses, corrects as arguments.
// Arguments should not be in array format except for responses.
function yesNo(questions, prompts, responses, corrects){
  prompts = prompt(questions).toLowerCase();
  if (isYes(prompts)){
    alert(responses[0]);
    if (Number(corrects) === 1){
      correctTally += 1;
    }
  } else if (isNo(prompts)){
    alert(responses[1]);
    if (Number(corrects) === 0){
      correctTally += 1;
    }
  } else {
    alert('You did not enter yes/no or y/n for this question, buddy.');
  }
  return prompts;
}

// Function for question 6.
// Generates random number 1-10 into randomDigit
// Keeps track of # of guesses with guessCounter
// Keeps track of all user inputs with number6Guesses array
// Returns all user input and generated random number.
function numberGuesser(questions) {

  let randomDigit = Math.floor((Math.random() * 10) + 1);
  let guessCounter = 0;
  const prompts = [];
  const returnValue = [];

  while (guessCounter <= 3) {
    prompts[guessCounter] = prompt(questions + ' You have ' + (4 - guessCounter) + ' guesses left.');
    if (Number(prompts[guessCounter]) === randomDigit) {
      alert('You got it! It only took you ' + (guessCounter + 1) + ' tries!');
      correctTally += 1;
      returnValue.push(prompts, randomDigit);
      return returnValue;
    } else if (guessCounter <= 2) {
      if (prompts[guessCounter] < randomDigit) {
        alert('Nope! Too bad, your guess was too low. Try again!');
      } else {
        alert('Nope! Too bad, your guess was too high. Try again!');
      }
    } else {
      alert('Nope! You\'re out of guesses. The correct answer was: ' + randomDigit + '. Thanks for playing!');
      returnValue.push(prompts, randomDigit);
      return returnValue;
    }
    guessCounter += 1;
  }
}

// Function for question 7
// Keeps track of # of guesses with guessCounter
// Keeps track of all user inputs with numberGuesses array
// correctness breaks loop when set to true.
function multiGuess(questions, answers) {

  let guessCounter = 0;
  const prompts = [];
  let correctness = false;

  while ((guessCounter <= 5) && (correctness === false)) {
    prompts[guessCounter] = prompt(questions + ' You have ' + (6 - guessCounter) + ' guesses left.');
    for (let index in answers) {
      if (Number(prompts[guessCounter]) === Number(answers[index])) {
        alert('You got it! It only took you ' + (guessCounter + 1) + ' tries!');
        correctness = true;
        correctTally += 1;
        return prompts;
      }
    }
    guessCounter += 1;
    if (guessCounter <=5 && (correctness === false)) {
      alert('Nope! Try again!');
    } else if (correctness === false) {
      alert('Aww, game over! Try again next time!');
      return prompts;
    }
  }
}

// function to print answers to HTML. Takes question, prompt, and answer arguments.
// Creates new p elements to contain each question, user input, and answer
// Creates new p element to contain final score
// Appends p elements to #quizAnswerSection
function printAnswers(questions, prompts, answers) {

  let section = getID('quizAnswerSection');
  let tallyPrint = cEl('p');

  tallyPrint.textContent = 'You scored ' + correctTally + ' out of 7!';

  while(section.firstChild) {
    section.removeChild(section.lastChild);
  }
  questions.forEach(function (item, index) {
    let pPrint = cEl('p');
    pPrint.setAttribute('class', 'quizP');
    let br = cEl('br');
    let node1 = document.createTextNode(questions[index]);
    let node2 = document.createTextNode('Your answer: ' + prompts[index] + '. Correct Answer: ' + answers[index]);
    pPrint.appendChild(node1);
    pPrint.appendChild(br);
    pPrint.appendChild(node2);
    section.append(pPrint);
  });
  section.append(tallyPrint);
}

// Function to print final message to user.
// Was the final area until lab-03 told us to put another thing at the bottom. Just saying.
function finalPrint(user) {
  getID('finalMessageArea').textContent = 'Hey, ' + user + '! Thanks for visiting my site. I hope you got to know a little bit more about me. This website might be small and simple, but it is mine. It makes me happy that I could share it with you.';
}

// Repetitive 'yes' checking
function isYes(answer) {
  return (answer === 'y' || answer === 'yes');
}

// Repetitive 'no' checking
function isNo(answer) {
  return (answer === 'n' || answer === 'no');
}

// Get element by ID
function getID(element) {
  return document.getElementById(element);
}

// Create element
function cEl(element){
  return document.createElement(element);
}
