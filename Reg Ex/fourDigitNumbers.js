function fourDigitNumbers() {
  var quadrupleRepeatingDigits;
  var quadrupleDigitsText = 0;
  var fourDigitRegex = /\b\d{4}\b/g;
  for (var f = 0; f < rhesusText.length; f = f + 1) {
    quadrupleRepeatingDigits = fourDigitRegex.exec(rhesusText[f]);
    while (quadrupleRepeatingDigits) {
      quadrupleRepeatingDigits = fourDigitRegex.exec(rhesusText[f]);
      quadrupleDigitsText = quadrupleDigitsText + 1;
    }
  }
  text("The amount of 4 digit numbers is: " + quadrupleDigitsText, width/2 -75, height/4 +40);
}