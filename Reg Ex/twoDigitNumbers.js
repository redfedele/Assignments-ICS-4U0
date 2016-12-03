function twoDigitNumbers() {
  var doubleRepeatingDigits;
  var doubleDigitsText = 0;
  var twoDigitRegex = /\b\d{2}\b/g;
  for (var i = 0; i < rhesusText.length; i = i + 1) {
    doubleRepeatingDigits = twoDigitRegex.exec(rhesusText[i]);
    while (doubleRepeatingDigits) {
      doubleRepeatingDigits = twoDigitRegex.exec(rhesusText[i]);
      doubleDigitsText = doubleDigitsText + 1;
    }
  }
  text("The amount of 2 digit numbers is: " + doubleDigitsText, width/2 -75, height/4);
}