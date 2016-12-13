// Tweakables

var maxSneezesPerDay = 7;
var errorMargin = 5;
var dayStartsAt = 6;
var dayEndsAt = 24;

function pseudoRandom(seedValue) {
    var x = Math.sin(seedValue * 1000);
    return Math.abs(x);
}

$(document).ready(function() {
  var currentDate = new Date();
  var currentHours = currentDate.getHours();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth();
  var normalizedTime = (Math.max(currentHours, dayStartsAt) - dayStartsAt) / (dayEndsAt - dayStartsAt);
  var sneezes = normalizedTime * maxSneezesPerDay;
  sneezes += pseudoRandom(currentDay + currentMonth) * (((errorMargin / 2)-errorMargin) * normalizedTime);
  $("#asumiSneezeCount").text(Math.floor(sneezes));
});
