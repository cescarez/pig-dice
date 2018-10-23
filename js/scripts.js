function Player() {
  this.currentRoll = 0;
  this.tempTurnSum = 0;
  this.totalHeldSum = 0;
}

// var playerOne = {
//   totalHeldSum: 0,
// }
//
// var playerTwo = {
//   totalHeldSum: 0,
// }
//
// var game = {
//   tempTurnSum: 0,
// }

Player.prototype.checkRoll = function(currentRoll) {
  if (currentRoll === 1) {
    this.tempTurnSum = 0;
    $("#sentence-output").text("You lose your turn points! " + currentRoll + " :(");
  } else {
    this.tempTurnSum += currentRoll;
    console.log(this.tempTurnSum);
  }
}

Player.prototype.addTurntoHeld = function () {
  this.totalHeldSum += this.tempTurnSum;
  if (this.totalHeldSum >= 100) {
    $("output-sentence").addClass("green").text("You're the winner!")
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
  $("#roll").click(function(event) {
    event.preventDefault();
    $("output-sentence").text="clear"
    var currentRoll = dice.randomRoll();

    if (currentPlayer === 1) {
      console.log("playerone");
      var playerOne = new Player();
      playerOne.currentRoll = currentRoll;
      playerOne.checkRoll(playerOne.currentRoll);
      $("#output1").text(playerOne.currentRoll);
      $("#turn-sum1").text("Player One Current Turn Sum: " + this.tempTurnSum);
      $("#turn-sum2").text("");
    } else if (currentPlayer === 2) {
      console.log("playerTwo");
      var playerTwo = new Player(playerTwo.currentRoll);
      playerTwo.currentRoll = currentRoll;
      playerTwo.checkRoll(playerTwo.currentRoll);
      $("#output2").text(playerTwo.currentRoll);
      $("#turn-sum2").text("Player Two Current Turn Sum: " + this.tempTurnSum);
      $("#turn-sum1").text("");
    } else if (currentPlayer % 2 !== 0) {
      console.log("playerone");
      playerOne.currentRoll = currentRoll;
      playerOne.checkRoll(playerOne.currentRoll);
      $("#output1").text(playerOne.currentRoll);
      $("#turn-sum1").text("Player One Current Turn Sum: " + this.tempTurnSum);
      $("#turn-sum2").text("");
    } else if (currentPlayer % 2 === 0) {
      console.log("playerTwo");
      playerTwo.currentRoll = currentRoll;
      playerTwo.checkRoll(playerTwo.currentRoll);
      $("#output2").text(playerTwo.currentRoll);
      $("#turn-sum2").text("Player Two Current Turn Sum: " + this.tempTurnSum);
      $("#turn-sum1").text("");
   }

  });
  $("#hold").click(function(event) {
    event.preventDefault();
    currentPlayer += 1;
    if (currentPlayer % 2 === 0) {
      playerOne.addTurntoHeld();
      $("#player-two-title").addClass("blue");
      $("#player-one-title").removeClass();
      console.log("Add turn sum to player 1");
      $("#total-sum1").text("Total Held Sum: " + playerOne.totalHeldSum);
    } else if (currentPlayer % 2 !== 0) {
      playerTwo.addTurntoHeld();
      $("#player-one-title").addClass("blue");
      $("#player-two-title").removeClass();
      console.log("Add turn sum to player 2");
      $("#total-sum2").text("Player Two Total Held Sum: " + playerTwo.totalHeldSum);
    }
 });
});
