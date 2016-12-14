// Tweakables

var maxSneezesPerDay = 7;
var errorMargin = 5;
var dayStartsAt = 6;
var dayEndsAt = 24;

function pseudoRandom(seedValue) {
    var x = Math.sin(seedValue * 1000);
    return Math.abs(x);
}

function refreshTimesSneezed() {
  var currentDate = new Date();
  var currentHours = currentDate.getHours();
  var currentDay = currentDate.getDate();
  var currentMonth = currentDate.getMonth();
  var normalizedTime = (Math.max(currentHours, dayStartsAt) - dayStartsAt) / (dayEndsAt - dayStartsAt);
  var sneezes = normalizedTime * maxSneezesPerDay;
  sneezes += pseudoRandom(currentDay + currentMonth) * (((errorMargin / 2)-errorMargin) * normalizedTime);
  sneezes = Math.floor(sneezes);
  $("#asumiSneezeCount").text(sneezes);
  $("#times").text((sneezes == 1) ? "time" : "times");
  $("#published").text(currentDate.toString());
  $("#published").attr("title", currentDate.getFullYear()+"-"+currentDate.getMonth()+"-"+currentDate.getDate()+"-T"+currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()+"-0900");
}

$(document).ready(function() {
  refreshTimesSneezed();
  var tid = setInterval(refreshTimesSneezed, 1000 * 60);
});
