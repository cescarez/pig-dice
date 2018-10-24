function Player() {
  this.currentRoll = 0;
  this.tempTurnSum = 0;
  this.totalHeldSum = 0;
}

Player.prototype.checkRoll = function(currentRoll, turnSum) {
  if (currentRoll === 1) {
    this.tempTurnSum = 0;
    $("#sentence-output").text("You lose your turn points! " + currentRoll + " :(");
  } else {
    this.tempTurnSum = turnSum;
    console.log(this.tempTurnSum);
  }
}

Player.prototype.addTurntoHeld = function(turnSum) {
  this.totalHeldSum += turnSum;
  if (this.totalHeldSum >= 100) {
    $("sentence-output").addClass("green").text("You're the winner!")
  }

}

Array.prototype.randomRoll = function () {
  return this[Math.floor(Math.random() * this.length)]
};

var dice = [1, 2, 3, 4, 5, 6];
var currentPlayer = 1;
var turnSum = 0;

//user logic
$(document).ready(function() {
  var playerOne = new Player();
  var playerTwo = new Player()
  $("#roll").click(function(event) {
    event.preventDefault();
    $("#sentence-output").removeClass().text("")
    var currentRoll = dice.randomRoll();
//entire section to be refactored
    if (currentRoll === 1) {
      turnSum = 0;
      $("#sentence-output").addClass("red-bg").text("You lose your turn points! :( Next player's turn!");
    } else {
      turnSum += currentRoll;
    }
    if (currentPlayer % 2 !== 0) {
      console.log("playerone");
      playerOne.currentRoll = currentRoll;
      playerOne.checkRoll(playerOne.currentRoll, turnSum);
      $("#output1").text(playerOne.currentRoll);
      $("#turn-sum1").text("Player One Current Turn Sum: " + playerOne.tempTurnSum);
      $("#turn-sum2").text("");
    } else if (currentPlayer % 2 === 0) {
      console.log("playerTwo");
      playerTwo.currentRoll = currentRoll;
      playerTwo.checkRoll(playerTwo.currentRoll, turnSum);
      $("#output2").text(playerTwo.currentRoll);
      $("#turn-sum2").text("Player Two Current Turn Sum: " + playerTwo.tempTurnSum);
      $("#turn-sum1").text("");
   }
  });
  $("#hold").click(function(event) {
    event.preventDefault();
    $("#turn-sum1").text("");
    $("#turn-sum2").text("");
    $("#output1").text("");
    $("#output2").text("");

    currentPlayer += 1;

    console.log("Current player count: " + currentPlayer);
    console.log("Current player mod 2: " + currentPlayer%2);

    if (currentPlayer % 2 === 0) {
      playerOne.addTurntoHeld(turnSum);
      $("#player-two-title").addClass("blue");
      $("#player-one-title").removeClass();
      console.log("Add turn sum to player 1");
      $("#total-sum1").text("Player One Total Held Sum: " + playerOne.totalHeldSum);
    } else if (currentPlayer % 2 !== 0) {
      playerTwo.addTurntoHeld(turnSum);
      $("#player-one-title").addClass("blue");
      $("#player-two-title").removeClass();
      console.log("Add turn sum to player 2");
      $("#total-sum2").text("Player Two Total Held Sum: " + playerTwo.totalHeldSum);
    }

    turnSum = 0;
 });
});
