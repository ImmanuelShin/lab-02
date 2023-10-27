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

  correctTally = 0;

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


  //Loop for yesNo function. Loops five times for all five yes/no questions.
  for (let x = 0; x < 5; x++){
    prompts[x] = yesNo(questions[x], prompts[x], responses[x], corrects[x]);
  }

  // Sixth Question
  // Generates random number 1-10 into randomDigit
  // Keeps track of # of guesses with guess6Counter
  // Keeps track of all user inputs with number6Guesses array
  let randomDigit = Math.floor((Math.random() * 10) + 1);
  answers[5] = randomDigit;
  let guess6Counter = 1;
  const number6Guesses = [];

  while (guess6Counter <= 4) {
    prompts[5] = prompt(questions[5] + ' You have ' + (5 - guess6Counter) + ' guesses left.');
    number6Guesses[guess6Counter-1] = prompts[5];
    if (Number(prompts[5]) === randomDigit) {
      alert('You got it! It only took you ' + guess6Counter + ' tries!');
      prompts[5] = number6Guesses;
      correctTally += 1;
      break;
    } else if (guess6Counter <= 3) {
      if (prompts[5] < randomDigit) {
        alert('Nope! Too bad, your guess was too low. Try again!');
      } else {
        alert('Nope! Too bad, your guess was too high. Try again!');
      }
    } else {
      alert('Nope! You\'re out of guesses. The correct answer was: ' + randomDigit + '. Thanks for playing!');
      prompts[5] = number6Guesses;
      break;
    }
    guess6Counter += 1;
  }

  // Seventh Question
  // Keeps track of # of guesses with guess7Counter
  // Keeps track of all user inputs with number7Guesses array
  // correctness breaks loop when set to true.
  let guess7Counter = 1;
  const number7Guesses = [];
  let correctness = false;

  while ((guess7Counter <= 6) && (correctness === false)) {
    prompts[6] = prompt(questions[6] + ' You have ' + (7 - guess7Counter) + ' guesses left.');
    number7Guesses[guess7Counter - 1] = prompts[6];
    for (let index in answers[6]) {
      if (Number(prompts[6]) === Number(answers[6][index])) {
        alert('You got it! It only took you ' + guess7Counter + ' tries!');
        prompts[6] = number7Guesses;
        correctness = true;
        correctTally += 1;
        break;
      }
    }
    guess7Counter += 1;
    if (guess7Counter <=6 && (correctness === false)) {
      alert('Nope! Try again!');
    } else if (correctness === false) {
      alert('Aww, game over! Try again next time!');
      prompts[6] = number7Guesses;
    }
  }


  // Makes the hidden answer section visible
  getID('quizAnswerSection').style.visibility = 'visible';

  // Creates new p element to contain final score
  // Calls printAnswers function to print the answers onto HTML.
  // Adds new p element to the end of the answer section
  let section = getID('quizAnswerSection');
  let tallyPrint = cEl('p');
  tallyPrint.textContent = 'You scored ' + correctTally + ' out of 7!';
  while(section.firstChild) {
    section.removeChild(section.lastChild);
  }
  questions.forEach(function (item, index) {
    printAnswers(questions[index], prompts[index], answers[index]);
  });
  section.append(tallyPrint);

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

// function to print answers to HTML. Takes question, prompt, and answer arguments.
function printAnswers(prompt, answer, realAns){
  let section = getID('quizAnswerSection');
  let pPrint = cEl('p');
  pPrint.setAttribute('class', 'quizP');
  let br = cEl('br');
  let node1 = document.createTextNode(prompt);
  let node2 = document.createTextNode('Your answer: ' + answer + '. Correct Answer: ' + realAns);
  pPrint.appendChild(node1);
  pPrint.appendChild(br);
  pPrint.appendChild(node2);
  section.append(pPrint);
}

// Function to print final message to user.
// Was the final area until lab-03 told us to put another thing at the bottom. Just saying.
function finalPrint(user){
  getID('finalMessageArea').textContent = 'Hey, ' + user + '! Thanks for visiting my site. I hope you got to know a little bit more about me. This website might be small and simple, but it is mine. It makes me happy that I could share it with you.';
}

// Repetitive 'yes' checking
function isYes(answer){
  return (answer === 'y' || answer === 'yes');
}

// Repetitive 'no' checking
function isNo(answer){
  return (answer === 'n' || answer === 'no');
}

// Get element by ID
function getID(element){
  return document.getElementById(element);
}

// Create element
function cEl(element){
  return document.createElement(element);
}
