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

Array.prototype.randomRoll = function () {
  return this[Math.floor(Math.random() * this.length)]
};

var dice = [1, 2, 3, 4, 5, 6];
var currentPlayer = 0;

//user logic
$(document).ready(function() {
  $("#roll").click(function(event) {
    event.preventDefault();

    var currentRoll = dice.randomRoll()
    heldSum += currentRoll;
    console.log(heldSum);

    $("#output").text(currentRoll);
    // var playerOne = new Player()


  });
  $("#hold").click(function(event) {
    event.preventDefault();
  currentPlayer += 1;
  console.log(currentPlayer)
 });
});
