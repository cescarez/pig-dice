// function Player(currentRoll, holdSum) {
//   this.currentRoll = currentRoll;
//   this.heldSum = heldSum;
// }

var playerOne = {
  totalHeldSum: 0,
}

var playerTwo = {
  totalHeldSum: 0,
}

var game = {
  tempTurnSum: 0,
}

Array.prototype.randomRoll = function () {
  return this[Math.floor(Math.random() * this.length)]
};

var dice = [1, 2, 3, 4, 5, 6];
var currentPlayer = 1;
var turnSum = 0;

//user logic
$(document).ready(function() {
  $("#roll1").click(function(event) {
    event.preventDefault();
    var currentRoll = dice.randomRoll()

    if (currentRoll === 1) {
      turnSum = 0;
      alert("You lose your turn points!")
      game.tempTurnSum = turnSum;
    } else {
      turnSum += currentRoll;
      console.log(turnSum);
      game.tempTurnSum = turnSum;
    }
    if (currentPlayer % 2 !== 0) {
      console.log("playerone")
      $("#output1").text(currentRoll);
      $("#turn-sum1").text("Current Turn Sum: " + turnSum);
      $("#turn-sum2").text("");
      $("#player-one-title").addClass("blue");
      $("#player-two-title").removeClass();
    }
  });
  $("#hold1").click(function(event) {
    event.preventDefault();
    currentPlayer += 1;

    if (currentPlayer % 2 === 0) {
      console.log("Add turn sum to player 1");
      playerOne.totalHeldSum += game.tempTurnSum;
      $("#total-sum1").text("Total Held Sum: " + playerOne.totalHeldSum);
      if (playerOne.totalHeldSum >= 100) {
        $("#total-sum1").text("Total Held Sum: " + playerOne.totalHeldSum + ". You're the winner!");
      }
    } else if (currentPlayer % 2 !== 0) {
      console.log("Add turn sum to player 2");
      playerTwo.totalHeldSum += game.tempTurnSum;
      $("#total-sum2").text("Total Held Sum: " + playerTwo.totalHeldSum);
      if (playerTwo.totalHeldSum >= 100) {
        $("#total-sum2").text("Total Held Sum: " + playerTwo.totalHeldSum + ". You're the winner!");
      }
    }
 });
 $("#roll2").click(function(event) {
   event.preventDefault();
   var currentRoll = dice.randomRoll()

   if (currentRoll === 1) {
     turnSum = 0;
     game.tempTurnSum = turnSum;
     alert("You lose your turn points!")
   } else {
     turnSum += currentRoll;
     console.log(turnSum);
     game.tempTurnSum = turnSum;
   }

   if (currentPlayer % 2 === 0) {
     $("#output2").text(currentRoll);
     $("#turn-sum2").text("Current Turn Sum: " + turnSum);
     $("#turn-sum1").text("");
     $("#player-two-title").addClass("blue");
     $("#player-one-title").removeClass();
     console.log("playerTwo");
   }

 });
 $("#hold2").click(function(event) {
   event.preventDefault();
   currentPlayer += 1;

   if (currentPlayer % 2 === 0) {
     console.log("Add turn sum to player 1");
     playerOne.totalHeldSum += game.tempTurnSum;
     $("#total-sum1").text("Total Held Sum: " + playerOne.totalHeldSum);
     if (playerOne.totalHeldSum >= 100) {
       $("#total-sum1").text("Total Held Sum: " + playerOne.totalHeldSum + ". You're the winner!");
     }
   } else if (currentPlayer % 2 !== 0) {
     console.log("Add turn sum to player 2");
     playerTwo.totalHeldSum += game.tempTurnSum;
     $("#total-sum2").text("Total Held Sum: " + playerTwo.totalHeldSum);
     if (playerTwo.totalHeldSum >= 100) {
       $("#total-sum2").text("Total Held Sum: " + playerTwo.totalHeldSum + ". You're the winner!");
     }
   }
});
});
