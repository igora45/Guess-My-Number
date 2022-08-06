'use strict';

// this "querySelector" is a method that is available on the "document" object
// this part first select the element, and then ON THE element we can read the textContent property

// this (.message) has a value in HTML and you use this to change the text
// console.log(document.querySelector(`.message`).textContent);

// //this (.guess) has no value in HTML and you use this to put a value
// document.querySelector(`.guess`).value = 3;

// //Remember, with console you will just put the value in the chrome
// console.log(document.querySelector(`.guess`).value);

// an even happen when: a mouse click, a mouse moving or a keep press or amny other events
// using the event-listener we can wait for a certain event to happen, and then react to it.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);
  // document.querySelector(`.message`).textContent = `Your Number is ${guess}`;
  if (!guess) {
    // document.querySelector(`.message`).textContent = `❌ Has no Number Here`;
    displayMessage(`❌ Has no Number Here`);

    //when the player wins
  } else if (guess === secretNumber) {
    highscore++;
    // document.querySelector(`.message`).textContent = `You won 🏆🏆🏆`;
    displayMessage(`You won 🏆🏆🏆`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`.highscore`).textContent = highscore;
    // the most important thing to remember is to use the style property and then on there is where we specify the css property (and we need put in camel case notation), and then, the value always needs to be a string
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    //when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent = guess > secretNumber ? `😒 Too high!` : `😒 Too Low!`;
      displayMessage(guess > secretNumber ? `😒 Too high!` : `😒 Too Low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `You lost the Game ☹`;
      document.querySelector(`.message`).style.color = `red`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
  ////////////////////////////////////////////////////////////////////////
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `😒 it's Too High`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `You lost the game ☹`;
  //     document.querySelector(`.message`).style.color = `red`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }

  //   //when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `😒 it's Too Low`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.message`).textContent = `You lost the Game ☹`;
  //     document.querySelector(`.message`).style.color = `red`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  // }
  ////////////////////////////////////////////////////////////////////////
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.score`).textContent = score;
  // document.querySelector(`.message`).textContent = `Start Guessing...`;
  displayMessage(`Start Guessing...`);
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.guess`).value = ``;
});
