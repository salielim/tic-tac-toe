let playerArr = [];
let compArr = [];
let playerXO = "no selection";
let status = "";

let boxes = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
var winArr = [
  ["a1", "a2", "a3"], 
  ["b1", "b2", "b3"],
  ["c1", "c2", "c3"], 
  ["a1", "b1", "c1"], 
  ["a2", "b2", "c2"], 
  ["a3", "b3", "c3"],
  ["a1", "b2", "c3"],
  ["a3", "b2", "c1"]
];

// Status box when starting game
function startGame() {
  document.getElementById("statusbox").innerHTML = "Game begins.. pick a box.";
}

// Status box to pick X or O
function pickXO() {
  document.getElementById("statusbox").innerHTML = "Please pick X or O.";
}

// Select X
document.getElementById("xplayer").onclick = startXPlayer;
function startXPlayer() {
  playerXO = "X";
  compXO = "O";
  startGame();
}

// Select O
document.getElementById("oplayer").onclick = startOPlayer;
function startOPlayer() {
  playerXO = "O";
  compXO = "X";
  startGame();
}

// Select Reset
document.getElementById("reset").onclick = reset;

// Player pick box
function pickPlayerBox() {
  document.getElementById(boxNo).innerHTML = playerXO;
  playerArr.push(boxNo);
  checkPlayerWin();
}

// Computer pick box
function pickCompBox() {
  randomBox = boxes[Math.floor(Math.random() * boxes.length)];
  setTimeout(function(){
    if (playerArr.includes(randomBox) || compArr.includes(randomBox)) {
      pickCompBox();
    } else {
      compArr.push(randomBox);
      document.getElementById(randomBox).innerHTML = compXO;
      checkCompWin();
      document.getElementById("statusbox").innerHTML = "Player, please pick your move.";
    }
  }, 200); 
}

// Player win criteria
function playerWin() {
  for (var i=0; i<winArr.length; i++) {
    var filteredPlayerArr = playerArr.filter(x => winArr[i].includes(x));
    if (filteredPlayerArr.length === 3) {
      status = "player win";
    }
  }
}

// Check if it's a player win 
function checkPlayerWin() {
  draw();
  playerWin();
  if (status === "player win") {
    reset();
  } else {
    pickCompBox();
  }
}

// Comp win criteria
function compWin() {
  for (var i=0; i<winArr.length; i++) {
    var filteredCompArr = compArr.filter(y => winArr[i].includes(y));
    if (filteredCompArr.length === 3) {
      status = "comp win";
    }
  }
}

// Check if it's a comp win 
function checkCompWin() {
  draw();
  compWin();
  if (status === "comp win") {
    reset();
  } /*else {
    return;
  }*/
}

// Check if it's a draw
function draw() {
  if ((compArr.length + playerArr.length) === 9) {
    reset();
    setTimeout(function(){
      document.getElementById("statusbox").innerHTML = "It's a draw. Pick X or O to play.";
    }, 600);
  }
}

// Reset game after win
function reset() {
  // reset variables
  playerArr = [];
  compArr = [];
  playerXO = "no selection";
  
  // clear boxes
  setTimeout(function(){
    for (i=0; i<boxes.length; i++) {
      document.getElementById(boxes[i]).innerHTML = "";
    }
  }, 600);
  
  // announce win & start again
  if (status === "player win" || status === "comp win") {
    status = "";
    document.getElementById("statusbox").innerHTML = "It's a win! Select X or O to play again.";
  }
}

// Player's turn
document.getElementById("a1").onclick = playerPickA1;
function playerPickA1() {
  if (playerXO === "no selection") {
    pickXO();
  } else {
    boxNo = "a1";
    pickPlayerBox();
  }
}

document.getElementById("a2").onclick = playerPickA2;
function playerPickA2() {
  if (playerXO === "no selection") {
    pickXO();
  } else {
    boxNo = "a2";
    pickPlayerBox();
  }
}

document.getElementById("a3").onclick = playerPickA3;
function playerPickA3() {
  if (playerXO === "no selection") {
    pickXO();
  } else {
    boxNo = "a3";
    pickPlayerBox();
  }
}

document.getElementById("b1").onclick = playerPickB1;
function playerPickB1() {
  if (playerXO === "no selection") {
    pickXO();
  } else {
    boxNo = "b1";
    pickPlayerBox();
  }
}

document.getElementById("b2").onclick = playerPickB2;
function playerPickB2() {
  if (playerXO === "no selection") {
    pickXO();
  } else {
    boxNo = "b2";
    pickPlayerBox();
  }
}

document.getElementById("b3").onclick = playerPickB3;
function playerPickB3() {
  if (playerXO === "no selection") {
    pickXO();
  } else {
    boxNo = "b3";
    pickPlayerBox();
  }
}

document.getElementById("c1").onclick = playerPickC1;
function playerPickC1() {
  if (playerXO === "no selection") {
    pickXO();
  } else {
    boxNo = "c1";
    pickPlayerBox();
  }
}

document.getElementById("c2").onclick = playerPickC2;
function playerPickC2() {
  if (playerXO === "no selection") {
    pickXO();
  } else {
    boxNo = "c2";
    pickPlayerBox();
  }
}

document.getElementById("c3").onclick = playerPickC3;
function playerPickC3() {
  if (playerXO === "no selection") {
    pickXO();
  } else {
    boxNo = "c3";
    pickPlayerBox();
  }
}