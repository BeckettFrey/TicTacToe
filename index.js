const btns = document.querySelectorAll("button");

let count = 1;

let gameOvr = false;

let winLine = 0;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => choice(i));
}

function choice(rad) {
  if (gameOvr === false) {
    if (btns[rad].innerText === "-") {
      count++;
      console.log(count);
      if (count % 2 == 0) {
        btns[rad].innerHTML = "X";
        checkWin();
      } else {
        btns[rad].innerHTML = "O";
        checkWin();
      }
    }
  }
}

function checkWin() {
  if (btns[0].innerText === btns[1].innerText) {
    if (btns[2].innerText === btns[1].innerText) {
      if (btns[0].innerText !== "-") {
        for (let j = 0; j < 3; j++) {
          btns[j].style.backgroundColor = "#00FF00";
        }
        addWinScreen(btns[0].innerText);
      }
    }
  }
  if (btns[6].innerText === btns[7].innerText) {
    if (btns[7].innerText === btns[8].innerText) {
      if (btns[6].innerText !== "-") {
        for (let j = 6; j < 9; j++) {
          btns[j].style.backgroundColor = "#00FF00";
        }
        addWinScreen(btns[6].innerText);
      }
    }
  }
  if (btns[6].innerText === btns[3].innerText) {
    if (btns[3].innerText === btns[0].innerText) {
      if (btns[6].innerText !== "-") {
        for (let j = 0; j < 7; j += 3) {
          btns[j].style.backgroundColor = "#00FF00";
        }
        addWinScreen(btns[6].innerText);
      }
    }
  }

  if (btns[8].innerText === btns[2].innerText) {
    if (btns[2].innerText === btns[5].innerText) {
      if (btns[8].innerText !== "-") {
        for (let j = 2; j < 9; j += 3) {
          btns[j].style.backgroundColor = "#00FF00";
        }
        addWinScreen(btns[8].innerText);
      }
    }
  }
  if (btns[1].innerText === btns[4].innerText) {
    if (btns[4].innerText === btns[7].innerText) {
      if (btns[1].innerText !== "-") {
        for (let j = 1; j < 8; j += 3) {
          btns[j].style.backgroundColor = "#00FF00";
        }
        addWinScreen(btns[1].innerText);
      }
    }
  }
  if (btns[3].innerText === btns[4].innerText) {
    if (btns[4].innerText === btns[5].innerText) {
      if (btns[3].innerText !== "-") {
        for (let j = 3; j < 6; j++) {
          btns[j].style.backgroundColor = "#00FF00";
        }
        addWinScreen(btns[3].innerText);
      }
    }
  }
  if (btns[0].innerText === btns[4].innerText) {
    if (btns[4].innerText === btns[8].innerText) {
      if (btns[0].innerText !== "-") {
        for (let j = 0; j < 9; j += 4) {
          btns[j].style.backgroundColor = "#00FF00";
        }
        addWinScreen(btns[0].innerText);
      }
    }
  }
  if (btns[2].innerText === btns[4].innerText) {
    if (btns[4].innerText === btns[6].innerText) {
      if (btns[2].innerText !== "-") {
        for (let j = 2; j < 7; j += 2) {
          btns[j].style.backgroundColor = "#00FF00";
        }
        addWinScreen(btns[2].innerText);
      }
    }
  }
  if (count > 9) {
    tieEndScreen();
  }
}

function addWinScreen(player) {
  gameOvr = true;
  const body = document.querySelector("body");
  const winMess = document.createElement("p");
  const endMess = document.createElement("button");
  winMess.innerText = `player ${player} wins`;
  body.appendChild(winMess);
  endMess.innerText = "Again";
  endMess.addEventListener("click", () => location.reload());
  body.append(endMess);
}
function tieEndScreen() {
  gameOvr = true;
  const body = document.querySelector("body");
  const tieMess = document.createElement("p");
  const endMess = document.createElement("button");
  tieMess.innerText = "It's a draw.";
  body.appendChild(tieMess);
  endMess.innerText = "Again";
  endMess.addEventListener("click", () => location.reload());
  body.append(endMess);
}
