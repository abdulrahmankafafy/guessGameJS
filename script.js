/*'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'a7a';

document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 150;

document.querySelector('.guess').value = 10;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('Incorrect');
    score--;
  } else if (guess === secretNumber) {
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.highscore').textContent = highScore;
    displayMessage('Correct!');
    document.querySelector('.number').textContent = guess;
  } else if (guess > secretNumber) {
    if (score > 0) {
      displayMessage('Go lowerrr!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage("You've lost :( ");
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      displayMessage('Go Higherrr!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage("You've lost :( ");
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
