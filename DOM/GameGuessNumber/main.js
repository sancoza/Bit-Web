'use strict';

var displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

var sicretNumber = Math.trunc(Math.random() * 20) + 1;

var score = 5;
var highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('You must enter a number!');
  } else if (guess === sicretNumber) {
    displayMessage('👏 You won, congratulation! ');
    document.querySelector('body').style.background = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = sicretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== sicretNumber) {
    if (score > 1) {
      displayMessage(
        guess > sicretNumber
          ? '📢 Choose a smaller numbe!'
          : '📢 Choose a higher number!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😥 Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  sicretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = ' Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = '#222222';
  document.querySelector('.number').style.width = '15rem';
});
