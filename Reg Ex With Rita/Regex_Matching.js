var rhesusText;

function preload() {
  rhesusText = loadstrings("rhesus.txt");
}

function setup() {
  createCanvas(800, 600);
  background(200, 128, 160);
  findNumberOfTwoDigitNumbers();
}

function findNumberOfTwoDigitNumbers() {
  var twoDigitNumber;
  var numberOfTwoDigitNumbers = 0;
  var twoDigitRegex = /\b\d{2}\b/g;
  for (var i = 0; i < rhesusText.length; i = i + 1) {
    twoDigitNumber = twoDigitRegex.exec(rhesusText[i]);
    while (twoDigitNumber) {
      numberOfTwoDigitNumbers = numberOfTwoDigitNumbers + 1;
      twoDigitNumber = twoDigitRegex.exec(rhesusText[i]);
    }
  }
  text("Number of two digit numbers: " + numberOfTwoDigitNumbers, 30, 50);
}