var letsPlay = document.querySelector(".lets-play");
var game = document.querySelector(".game");
var button = document.querySelector(".lets-play-button");

var playerInt = 0;
var randomInt = 0;

var rock = document.querySelector(".choose-image-rock");
var paper = document.querySelector(".choose-image-paper");
var scissors = document.querySelector(".choose-image-scissors");
var playerChoose = document.querySelector(".change-image-1");

var computerChoose = document.querySelector(".change-image-2");

var playerStartScore = document.querySelector(".player-start-score");
var playerScore = 0;
var computerStartScore = document.querySelector(".computer-start-score");
var computerScore = 0;

var seconds = 10;
var currentTime = document.querySelector("#timer");
var shaking = false;

var gameResult = document.querySelector(".game-end");
var result = document.querySelector(".result");
var playerEndPoint = document.querySelector(".player-end-point");
var computerEndPoint = document.querySelector(".computer-end-point");
var endPoint = document.querySelector(".end-point");

var playAgainButton = document.querySelector(".play-again");

function gameStart() {
  letsPlay.style.display = "none";
  game.style.display = "block";
  currentTime.style.display = "block";
  gameMove();
}

function computerChoice() {
  randomInt = Math.floor(Math.random() * 3);
  if (randomInt == 0) {
    computerChoose.src = `../images/rock.png`;
  }
  if (randomInt == 1) {
    computerChoose.src = `../images/paper.png`;
  }
  if (randomInt == 2) {
    computerChoose.src = `../images/scissors.png`;
  }
}

function gameMove() {
  var timer = window.setInterval(() => {
    seconds = seconds - 1;
    currentTime.innerHTML = "ჯარიმა: " + seconds;
    if (seconds === 0) {
      computerScore = computerScore + 1;
      computerStartScore.innerHTML = computerScore;
      gameEnd(timer);
      seconds = 10;
      currentTime.innerHTML = "ჯარიმა: " + 10;
    }
  }, 1000);

  rock.addEventListener("click", () => {
    if (!shaking) {
      window.clearInterval(timer);
      startShaking();
      shaking = true;
      setTimeout(() => {
        playerChoose.src = `../images/rock.png`;
        playerInt = 0;
        computerChoice();
        scoreCounter(playerInt, randomInt);
        gameEnd(timer);
        removeStyles();
        seconds = 10;
        currentTime.innerHTML = "ჯარიმა: " + seconds;
        shaking = false;
        timer = window.setInterval(() => {
          seconds = seconds - 1;
          currentTime.innerHTML = "ჯარიმა: " + seconds;
          if (seconds === 0) {
            computerScore = computerScore + 1;
            computerStartScore.innerHTML = computerScore;
            gameEnd(timer);
            seconds = 10;
            currentTime.innerHTML = "ჯარიმა: " + 10;
          }
        }, 1000);
      }, 2000);
    }
  });
  paper.addEventListener("click", () => {
    if (!shaking) {
      window.clearInterval(timer);
      startShaking();
      shaking = true;
      setTimeout(() => {
        playerChoose.src = `../images/paper.png`;
        playerInt = 1;
        computerChoice();
        scoreCounter(playerInt, randomInt);
        gameEnd(timer);
        removeStyles();
        seconds = 10;
        currentTime.innerHTML = "ჯარიმა: " + seconds;
        shaking = false;
        timer = window.setInterval(() => {
          seconds = seconds - 1;
          currentTime.innerHTML = "ჯარიმა: " + seconds;
          if (seconds === 0) {
            computerScore = computerScore + 1;
            computerStartScore.innerHTML = computerScore;
            gameEnd(timer);
            seconds = 10;
            currentTime.innerHTML = "ჯარიმა: " + 10;
          }
        }, 1000);
      }, 2000);
    }
  });
  scissors.addEventListener("click", () => {
    if (!shaking) {
      window.clearInterval(timer);
      startShaking();
      shaking = true;
      setTimeout(() => {
        playerChoose.src = `../images/scissors.png`;
        playerInt = 2;
        computerChoice();
        scoreCounter(playerInt, randomInt);
        gameEnd(timer);
        removeStyles();
        seconds = 10;
        currentTime.innerHTML = "ჯარიმა: " + seconds;
        shaking = false;
        timer = window.setInterval(() => {
          seconds = seconds - 1;
          currentTime.innerHTML = "ჯარიმა: " + seconds;
          if (seconds === 0) {
            computerScore = computerScore + 1;
            computerStartScore.innerHTML = computerScore;
            gameEnd(timer);
            seconds = 10;
            currentTime.innerHTML = "ჯარიმა: " + 10;
          }
        }, 1000);
      }, 2000);
    }
  });
}

function scoreCounter(playerInt, randomInt) {
  if (playerInt == 0 && randomInt == 1) {
    computerScore = computerScore + 1;
    computerStartScore.innerHTML = computerScore;
  }
  if (playerInt == 0 && randomInt == 2) {
    playerScore = playerScore + 1;
    playerStartScore.innerHTML = playerScore;
  }
  if (playerInt == 1 && randomInt == 0) {
    playerScore = playerScore + 1;
    playerStartScore.innerHTML = playerScore;
  }
  if (playerInt == 1 && randomInt == 2) {
    computerScore = computerScore + 1;
    computerStartScore.innerHTML = computerScore;
  }
  if (playerInt == 2 && randomInt == 0) {
    computerScore = computerScore + 1;
    computerStartScore.innerHTML = computerScore;
  }
  if (playerInt == 2 && randomInt == 1) {
    playerScore = playerScore + 1;
    playerStartScore.innerHTML = playerScore;
  }
}

function startShaking() {
  playerChoose.src = `../images/rock.png`;
  computerChoose.src = `../images/rock.png`;
  playerChoose.style.animation = "shake-player";
  playerChoose.style.animationDuration = "2s";
  computerChoose.style.animation = "shake-computer";
  computerChoose.style.animationDuration = "2s";
}

function removeStyles() {
  playerChoose.style.animation = "";
  playerChoose.style.animationDuration = "";
  computerChoose.style.animation = "";
  computerChoose.style.animationDuration = "";
}

function gameEnd(timer) {
  if (playerScore == 3) {
    game.style.display = "none";
    currentTime.style.display = "none";
    gameResult.style.display = "block";
    result.style.color = "green";
    result.innerHTML = "გილოცავ, თქვენ მოიგეთ თამაში";
    endPoint.style.color = "green";
    playerEndPoint.innerHTML = playerScore;
    computerEndPoint.innerHTML = computerScore;
    window.clearInterval(timer);
    computerScore = 0;
    computerStartScore.innerHTML = computerScore;
    playerScore = 0;
    playerStartScore.innerHTML = playerScore;
  }
  if (computerScore == 3) {
    game.style.display = "none";
    currentTime.style.display = "none";
    gameResult.style.display = "block";
    result.style.color = "red";
    result.innerHTML = "სამწუხაროდ თქვენ დამარცხდით";
    endPoint.style.color = "red";
    playerEndPoint.innerHTML = playerScore;
    computerEndPoint.innerHTML = computerScore;
    window.clearInterval(timer);
    computerScore = 0;
    computerStartScore.innerHTML = computerScore;
    playerScore = 0;
    playerStartScore.innerHTML = playerScore;
  }
}

function playAgain() {
  gameResult.style.display = "none";
  game.style.display = "block";
  currentTime.style.display = "block";
  seconds = 10;
}

playAgainButton.addEventListener("click", playAgain);
button.addEventListener("click", gameStart);
