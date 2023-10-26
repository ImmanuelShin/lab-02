'use strict';

// User greeting section. Prompts user for name.
let userName = prompt('Hello! What is your name?');
if (userName) {
  alert('Welcome to this webpage, ' + userName + '! I\'m glad to have you here. This website contains information all about me, so feel free to get to know me a bit!');
} else {
  userName = 'anonymous user';
  alert('Welcome to this webpage, anonymous user! I\'m glad to have you here. This website contains information all about me, so feel free to get to know me a bit!');
}
finalPrint();


// Quiz section. Called by quizButton.
function startQuiz(){

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

  // Bank f all prompts
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

  let correctTally = 0;

  // First question
  prompts[0] = prompt(questions[0]).toLowerCase();

  // First answer
  if (isYes(prompts[0])){
    //console.log('Correct! I can\'t handle too sweet of chocolate.');
    alert('Correct! I can\'t handle too sweet of chocolate.');
    correctTally += 1;
  } else if (isNo(prompts[0])){
    //console.log('Incorrect! Dark chocolate is the best.');
    alert('Incorrect! Dark chocolate is the best.');
  } else {
    //console.log('You did not enter yes/no or y/n for this question, buddy.');
    alert('You did not enter yes/no or y/n for this question, buddy.');
  }

  // Second question
  prompts[1] = prompt(questions[1]).toLowerCase();

  // Second answer
  if (isYes(prompts[1])){
    //console.log('Correct! I like how black and white looks.');
    alert('Correct! I like how black and white looks.');
    correctTally += 1;
  } else if (isNo(prompts[1])){
    //console.log('Incorrect! Color is fine, but I do like my grays.');
    alert('Incorrect! Color is fine, but I do like my grays.');
  } else {
    //console.log('You did not enter yes/no or y/n for this question, pal.');
    alert('You did not enter yes/no or y/n for this question, pal.');
  }

  // Third Question
  prompts[2] = prompt(questions[2]).toLowerCase();

  // Third answer
  if (isYes(prompts[2])){
    //console.log('Incorrect! Coffee just isn\'t for me.');
    alert('Incorrect! Coffee just isn\'t for me.');
  } else if (isNo(prompts[2])){
    //console.log('Correct! I find coffee doesn\'t do anything for me.');
    alert('Correct! I find coffee doesn\'t do anything for me.');
    correctTally += 1;
  } else {
    //console.log('You did not enter yes/no or y/n for this question, mate.');
    alert('You did not enter yes/no or y/n for this question, mate.');
  }

  // Fourth Question
  prompts[3] = prompt(questions[3]).toLowerCase();

  // Fourth answer
  if (isYes(prompts[3])){
    //console.log('Incorrect! Tea is also not for me!');
    alert('Incorrect! Tea is also not for me!');
  } else if (isNo(prompts[3])){
    //console.log('Correct! Instead of caffeine, I ingest pure willpower.');
    alert('Correct! Instead of caffeine, I ingest pure willpower.');
    correctTally += 1;
  } else {
    //console.log('You did not enter yes/no or y/n for this question, chum.');
    alert('You did not enter yes/no or y/n for this question, chum.');
  }

  // Fifth Question
  prompts[4] = prompt(questions[4]).toLowerCase();

  // Fifth answer
  if (isYes(prompts[4])){
    //console.log('Incorrect! That is way too much maintenance.');
    alert('Incorrect! That is way too much maintenance.');
  } else if (isNo(prompts[4])){
    //console.log('Correct! Instead of owning pets, I am friends with people who do.');
    alert('Correct! Instead of owning pets, I am friends with people who do.');
    correctTally += 1;
  } else {
    //console.log('You did not enter yes/no or y/n for this question, chum.');
    alert('You did not enter yes/no or y/n for this question, chum.');
  }

  // Sixth Question
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

  let guess7Counter = 1;
  const number7Guesses = [];
  let correctness = false;
  console.log(answers[6].length);
  while ((guess7Counter <= 6) && (correctness === false)) {
    prompts[6] = prompt(questions[6] + ' You have ' + (7 - guess7Counter) + ' guesses left.');
    number7Guesses[guess7Counter - 1] = prompts[6];
    for (let index in answers[6]) {
      if (Number(prompts[6]) === Number(answers[6][index])) {
        console.log(answers[6][index]);
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


  document.getElementById('quizAnswerSection').style.visibility = 'visible';

  // Calls printAnswers function to print the answers onto HTML.
  let section = document.getElementById('quizAnswerSection');
  let tallyPrint = document.createElement('p');
  tallyPrint.textContent = 'You scored ' + correctTally + ' out of 7!';
  while(section.firstChild) {
    section.removeChild(section.lastChild);
  }
  questions.forEach(function (item, index) {
    printAnswers(questions[index], prompts[index], answers[index]);
  });
  section.append(tallyPrint);

}

// function to print answers to HTML. Requires the answer and the corresponding question number
function printAnswers(prompt, answer, realAns){
  let section = document.getElementById('quizAnswerSection');
  let pPrint = document.createElement('p');
  pPrint.setAttribute('class', 'quizP');
  let br = document.createElement('br');
  let node1 = document.createTextNode(prompt);
  let node2 = document.createTextNode('Your answer: ' + answer + '. Correct Answer: ' + realAns);
  pPrint.appendChild(node1);
  pPrint.appendChild(br);
  pPrint.appendChild(node2);
  section.append(pPrint);
}

// Function to print final message to user.
function finalPrint(){
  document.getElementById('finalMessageArea').textContent = 'Hey, ' + userName + '! Thanks for visiting my site. I hope you got to know a little bit more about me. This website might be small and simple, but it is mine. It makes me happy that I could share it with you.';
}

// Repetitive 'yes' checking
function isYes(answer){
  return (answer === 'y' || answer === 'yes');
}

// Repetitive 'no' checking
function isNo(answer){
  return (answer === 'n' || answer === 'no');
}
