// function Player(currentRoll, holdSum) {
//   this.currentRoll = currentRoll;
//   this.heldSum = heldSum;
// }

var playerOne = {
  currentRoll: 0,
  heldSum: 0,
}

var playerTwo = {
  currentRoll: 0,
  heldSum: 0,
}

// var game = {
//   playerOne:
// }

Array.prototype.randomRoll = function () {
  return this[Math.floor(Math.random() * this.length)]
};

var dice = [1, 2, 3, 4, 5, 6];
var currentPlayer = 1;
var heldSum = 0;

//user logic
$(document).ready(function() {
  $("#roll1,roll2").click(function(event) {
    event.preventDefault();
    var currentRoll = dice.randomRoll()
    heldSum += currentRoll;
    console.log(heldSum);


    // var playerOne = new Player()
    if ( currentPlayer %2 === 0) {
      $("#output2").text(currentRoll);

      console.log("playerTwo")
    } else if (currentPlayer %2 !== 0) {
      console.log("playerone")
      $("#output1").text(currentRoll);


    }

  });
  $("#hold").click(function(event) {
    event.preventDefault();
    currentPlayer += 1;



 });
});
