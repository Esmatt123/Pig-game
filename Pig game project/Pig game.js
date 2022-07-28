'use strict';
//variables
const rollDice = document.querySelector('.rolldice');
let box0 = document.querySelector(`.box0`);
let box1 = document.querySelector(`.box1`);
let playing, currentScore, activePlayer, scores;
// Initialization function
const init = function () {
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
};
init();
//Player switch function
function switchPlayer() {
  document.querySelector(`#currentplayer${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  document.querySelector(`.box0`).classList.toggle('active');
  document.querySelector(`.box1`).classList.toggle('active');
}
//Dice roll button
rollDice.addEventListener('click', function () {
  if (playing) {
    let diceRoller = Math.trunc(Math.random() * 6) + 1;
    document.querySelector('#dice1').classList.remove('hidden');
    if (diceRoller !== 1) {
      currentScore += diceRoller;
      console.log(diceRoller);
      document.querySelector(`#currentplayer${activePlayer}`).textContent =
        currentScore;
      if (activePlayer === 0) {
      }
    } else {
      switchPlayer();
    }

    console.log(currentScore);
    document.querySelector(
      '#dice1'
    ).src = `https://raw.githubusercontent.com/jonasschmedtmann/complete-javascript-course/master/07-Pig-Game/starter/dice-${diceRoller}.png`;
  }
});
//Hold button
document.querySelector('.hold').addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    currentScore = 0;
    document.querySelector(
      `.bigpink${activePlayer}`
    ).textContent = `${scores[activePlayer]}`;
    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.box${activePlayer}`).classList.remove('active');
      document
        .querySelector(`.box${activePlayer}`)
        .classList.add('playerwinner');
      document.querySelector('#dice1').classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});
//New game button
document.querySelector('.newgame').addEventListener('click', function () {
  currentScore = 0;
  document.querySelector('#dice1').classList.add('hidden');
  playing = true;
  box0.classList.add('active');
  box1.classList.remove('active');
  box0.classList.remove('playerwinner');
  box1.classList.remove('playerwinner');
  scores[(0, 0)] = 0;
  document.querySelector(`.bigpink0`).textContent = `0`;
  console.log(currentScore);
  document.querySelector(`.bigpink1`).textContent = `0`;
  document.querySelector(`.zero1`).textContent = `0`;
  document.querySelector(`.zero2`).textContent = `0`;
  init();
});
