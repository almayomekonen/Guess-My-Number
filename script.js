"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;

const disPlayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const disPlayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = parseInt(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when is no input
  if (!guess) {
    disPlayMessage("No number!⛔️");

    // when player wins;
  } else if (guess === secretNumber) {
    disPlayMessage("🎉 Corrent Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#32CD32";
    document.querySelector(".number").style.width = "20rem";

    if (score > HighScore) {
      HighScore = score;
      document.querySelector(".highscore").textContent = HighScore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      disPlayMessage(guess > secretNumber ? "📉 Too high!" : "📈 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      disPlayMessage("💥 You lost the game!");
      disPlayScore((textContent = 0));
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  disPlayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector(".number").style.width = "15rem";
});
