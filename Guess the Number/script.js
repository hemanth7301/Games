'use strict';

let secretNumber = 15; //Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  if (document.querySelector('.number').textContent !== '?') {
    document.querySelector('.header').textContent =
      'Click Again! on the top left for continue playing';
  } else {
    document.querySelector('.header').textContent = 'Guess My Number!';
    let guessedNumber = document.querySelector('.guess').value;
    console.log(guessedNumber, typeof guessedNumber);
    if (guessedNumber === '') {
      displayMessage('No Number!');
    } else {
      guessedNumber = Number(guessedNumber);
      if (guessedNumber < 1 || guessedNumber > 20) {
        displayMessage('Hey! 1 to 20 only');
        console.log('No number is entered');
      } else if (guessedNumber === secretNumber) {
        document.querySelector('.header').textContent = 'Hurrah!!! You Won';
        displayMessage('Correct Guess');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = score;
        }
      } else {
        if (score > 1) {
          score--;
          document.querySelector('.score').textContent = score;
          displayMessage(guessedNumber > secretNumber ? 'Too High' : 'Too Low');
        } else {
          document.querySelector('.header').textContent = 'Oops!!! You Lost';
          displayMessage('Hard Luck');
          document.querySelector('.score').textContent = 0;
          document.querySelector('.number').textContent = secretNumber;
          document.querySelector('body').style.backgroundColor = '#d43535';
          document.querySelector('.number').style.width = '30rem';
        }
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.header').textContent = 'Guess My Number!';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
