const C = console;
const D = document;

const lucky = Math.floor(Math.random() * 20); //* PURE MATHS
let score = 10;
C.log(lucky);

// # ELEMENTS
const userInputFiled = D.getElementById('guessing');
const checkButton = D.getElementById('check');
const messageBox = D.getElementById('message');
const main = D.getElementById('main');
const scoreSection = D.getElementById('score');

//* Messages
const WIN_MESSAGE = 'Wow! You guessed right! 🤯, Congrats!!! 🎉🎉';
const LOW_MESSAGE = 'Your guess is too low! ⬇️⬇️';
const HIGH_MESSAGE = 'Your guess is too high! ⬆️⬆️';
const OUT_OF_GUESSES_MESSAGE = 'You have run out of guesses! 😭';
const OUT_OF_RANGE = 'Please enter a number between 0 and 20';

const checkFunction = () => {
  const userGuess = Number(userInputFiled.value);

  if (userGuess >= 20 || userGuess < 0) {
    messageBox.textContent = OUT_OF_RANGE;
    main.style.backgroundColor = '#333';
  } else {
    if (userGuess == lucky) {
      messageBox.textContent = WIN_MESSAGE;
      main.style.backgroundColor = '#367E18';
    } else if (userGuess > lucky) {
      messageBox.textContent = HIGH_MESSAGE;
      main.style.backgroundColor = '#ff1100';
      score = score - 1;
    } else if (userGuess < lucky) {
      messageBox.textContent = LOW_MESSAGE;
      main.style.backgroundColor = '#ff1100';
      score = score - 1;
    }
  }

  scoreSection.textContent = score;
};

checkButton.addEventListener('click', checkFunction);