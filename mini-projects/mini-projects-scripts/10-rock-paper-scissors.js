let result = "";
let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  lost: 0,
  tie: 0,
};
document.querySelector(
  ".score"
).innerHTML = `Wins: ${score.win}, Losses: ${score.lost}, Ties: ${score.tie}`;
function playerCompCheck(playerMove) {
  let computerMove = pickComputerMove();
  if (playerMove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "You lost";
    } else if (computerMove === "Scissors") {
      result = "You won";
    }
  } else if (playerMove === "Paper") {
    if (computerMove === "Rock") {
      result = "You won";
    } else if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "You lost";
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === "Rock") {
      result = "You lost";
    } else if (computerMove === "Paper") {
      result = "You won";
    } else if (computerMove === "Scissors") {
      result = "Tie";
    }
  }
  if (result === "You won") {
    score.win += 1;
  } else if (result === "You lost") {
    score.lost += 1;
  } else if (result === "Tie") {
    score.tie += 1;
  }
  localStorage.setItem("score", JSON.stringify(score));
  document.querySelector(".result").innerHTML = `${result}!`;
  document.querySelector(".playerCompMove").innerHTML = ` You
<img src="images/${playerMove}-emoji.png" alt="" class="result-move" />
<img src="images/${computerMove}-emoji.png" alt="" class="result-move" />
Computer`;
  document.querySelector(
    ".score"
  ).innerHTML = `Wins: ${score.win},   Losses: ${score.lost},   Ties: ${score.tie}`;
}
function pickComputerMove() {
  let randomValue = Math.random();
  if (randomValue > 0 && randomValue < 1 / 3) {
    computerMove = "Rock";
  } else if (randomValue >= 1 / 3 && randomValue < 2 / 3) {
    computerMove = "Paper";
  } else if (randomValue >= 2 / 3 && randomValue < 1) {
    computerMove = "Scissors";
  }
  return computerMove;
}