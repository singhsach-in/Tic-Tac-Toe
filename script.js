console.log("Welcome to Tic Tac Toe");

let turn = "X";
let gameOver = false;
let boxes = document.querySelectorAll(".box");

//  reset game button
function reset() {
  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.innerHTML = "";
    box.style.backgroundColor = "";
    box.classList.remove("green");
    box.classList.remove("click-event");
  });
  let parent = document.querySelector(".game-info");
  parent.firstElementChild.nextElementSibling.innerHTML = turn + " turn";
  gameOver = false;
  checkWin();
}

//  change turn
function changeTurn() {
  if (turn === "X") {
    return "O";
  } else {
    return "X";
  }
}

//  changing turn on click and marking boxes
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML === "") {
      box.innerHTML = turn;
      let parent = document.querySelector(".game-info");
      checkWin();
      turn = changeTurn();
      if (!gameOver) {
        parent.firstElementChild.nextElementSibling.innerHTML = turn + " turn";
      }
    }
  });
});
function checkWin() {
  let boxes = document.getElementsByClassName("box");
  let win = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -10, 15, 90],
    [1, 4, 7, 0, 15, 90],
    [2, 5, 8, 10, 25, 90],
    [0, 4, 8, 0, 15, 45],
    [2, 4, 6, 0, 15, 135],
  ];
  win.forEach((e) => {
    if (
      boxes[e[0]].innerText === boxes[e[1]].innerText &&
      boxes[e[1]].innerText === boxes[e[2]].innerText &&
      boxes[e[0]].innerText !== ""
    ) {
      let parent = document.querySelector(".game-info");
      parent.firstElementChild.nextElementSibling.innerHTML = turn + " won";
      gameOver = true;
      boxes[e[0]].classList.add("green");
      boxes[e[1]].classList.add("green");
      boxes[e[2]].classList.add("green");
      isGameOver();
    }
  });
}

//  disable buttons on game over
function isGameOver() {
  if (gameOver) {
    boxes.forEach((box) => {
      box.classList.add("click-event");
    });
  }
}
