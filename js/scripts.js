function Player() {
  this.currentRoll = 0;
  this.tempTurnSum = 0;
  this.totalHeldSum = 0;
}

Player.prototype.checkRoll = function(currentRoll, turnSum) {
  if (currentRoll === 1) {
    this.tempTurnSum = 0;
  } else {
    this.tempTurnSum = turnSum;
    console.log(this.tempTurnSum);
  }
}

Player.prototype.addTurntoHeld = function(turnSum) {
  this.totalHeldSum += turnSum;
  if (this.totalHeldSum >= 100) {
    $("#sentence-output").addClass("green").text("You're the winner!")
    $("#play-again").show();
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
  $("#human-opponent").click (function(){
    $("#game-hidden").show();
    $("#opponent-select").hide();
    $("#player-one-title").text("Player One");
    $("#player-two-title").text("Player Two");
    var playerOne = new Player();
    var playerTwo = new Player();

    //*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
    //PLAYER OPPONENT.. hecka redundant but let's get it working first
    //*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
    $("#roll").click(function() {
      $("#sentence-output").removeClass().text("")
      var currentRoll = dice.randomRoll();
      //after user chooses to roll...entire section to be refactored
      if (currentRoll === 1) {
        turnSum = 0;
        $("#sentence-output").addClass("red-bg").text("You lose your turn points! :( Next player's turn! Please click 'Hold'");
      } else {
        turnSum += currentRoll;
      }
      if (currentPlayer % 2 !== 0) {
        console.log("playerone");
        playerOne.currentRoll = currentRoll;
        playerOne.checkRoll(playerOne.currentRoll, turnSum);
        $("#output1").text(playerOne.currentRoll);
        $("#turn-sum1").text("Player One Current Turn Sum: " + playerOne.tempTurnSum);
        $("#turn-sum2").text("Player Two Current Turn Sum: 0");
      } else if (currentPlayer % 2 === 0) {
        console.log("playerTwo");
        playerTwo.currentRoll = currentRoll;
        playerTwo.checkRoll(playerTwo.currentRoll, turnSum);
        $("#output2").text(playerTwo.currentRoll);
        $("#turn-sum2").text("Player Two Current Turn Sum: " + playerTwo.tempTurnSum);
        $("#turn-sum1").text("Player One Current Turn Sum: 0");
      }
    });
    //after user chooses to hold
    $("#hold").click(function() {
      $("#sentence-output").removeClass().text("")
      $("#turn-sum1").text("Player One Current Turn Sum: 0");
      $("#turn-sum2").text("Player Two Current Turn Sum: 0");
      $("#output1").text("");
      $("#output2").text("");

      currentPlayer += 1;

      console.log("Current player count: " + currentPlayer);
      console.log("Current player mod 2: " + currentPlayer % 2);

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

//*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
//COMPUTER OPPONENT.. heck redundant but let's get it working first
//*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
 $("#computer-opponent").click (function(){
   $("#opponent-select").hide();
   $("#difficulty-select").show();
 });
//after user chooses EASY difficulty
$("#easy-difficulty").click (function(){
  $("#difficulty-select").hide();
   $("#game-hidden").show();
   $("#player-one-title").text("Human Player");
   $("#player-two-title").text("Computer Player");

   var playerOne = new Player();
   var playerComp = new Player();
   var rollCount = 0;

   $("#roll").click(function() {
     $("#sentence-output").removeClass().text("")
     var currentRoll = dice.randomRoll();

     //after uesr chooses to roll...entire section to be refactored
     if (currentRoll === 1) {
       turnSum = 0;
       $("#sentence-output").addClass("red-bg").text("You lose your turn points! :( Next player's turn! Please click 'Hold'");
     } else {
       turnSum += currentRoll;
     }

     if (currentPlayer % 2 !== 0) {
       console.log("human turn");
       playerOne.currentRoll = currentRoll;
       playerOne.checkRoll(playerOne.currentRoll, turnSum);
       $("#output1").text(playerOne.currentRoll);
       $("#turn-sum1").text("Player One Current Turn Sum: " + playerOne.tempTurnSum);
       $("#turn-sum2").text("Player Two Current Turn Sum: 0");
     } else if (currentPlayer % 2 === 0) {
       //doesn't currently work
        while (rollCount < 2) {
          rollCount++;
          console.log("computer turn");
          playerComp.currentRoll = currentRoll;
          playerComp.checkRoll(playerComp.currentRoll, turnSum);
          $("#output2").text(playerComp.currentRoll);
          $("#turn-sum2").text("Computer Current Turn Sum: " + playerComp.tempTurnSum);
          $("#turn-sum1").text("Player One Current Turn Sum: 0");
        }
        rollCount = 0;
        playerComp.addTurntoHeld(turnSum);
        console.log("Add turn sum to player 2");
        $("#player-one-title").addClass("blue");
        $("#player-two-title").removeClass();
        $("#total-sum2").text("Player Two Total Held Sum: " + playerComp.totalHeldSum);
        currentPlayer += 1;
     }
   });
   //after user chooses to hold
   $("#hold").click(function() {
     $("#turn-sum1").text("Player One Current Turn Sum: 0");
     $("#turn-sum2").text("Player Two Current Turn Sum: 0");
     $("#sentence-output").removeClass().text("")
     $("#turn-sum1").text("");
     $("#turn-sum2").text("");
     $("#output1").text("");
     $("#output2").text("");

     currentPlayer += 1;


     console.log("Current player count: " + currentPlayer);
     console.log("Current player mod 2: " + currentPlayer % 2);

     if (currentPlayer % 2 === 0) {
       playerOne.addTurntoHeld(turnSum);
       console.log("Add turn sum to player 1");
       $("#player-two-title").addClass("blue");
       $("#player-one-title").removeClass();
       $("#total-sum1").text("Player One Total Held Sum: " + playerOne.totalHeldSum);
       $("#sentence-output").text("Please click 'Roll' for the Computer. It doesn't have hands to roll on its own :(")
     } else {
       $("#sentence-output").text("Settle down, it's not your turn!");
     }

     turnSum = 0;
   });
 });
 $("#play-again").click(function(){
   $("#opponent-select").show();
   $("#game-hidden").hide();
   $("#sentence-output").removeClass().text("")
   $("#player-one-title").addClass("blue");
   $("#player-two-title").removeClass();
   $("#turn-sum1").text("");
   $("#turn-sum2").text("");
   $("#output1").text("");
   $("#output2").text("");
   $("#play-again").hide();
 })
});
