function threeDigitNumbers() {
  var tripleRepeatingDigits;
  var tripleDigitsText = 0;
  var threeDigitRegex = /\b\d{3}\b/g;
  for (var t = 0; t < rhesusText.length; t = t + 1) {
    tripleRepeatingDigits = threeDigitRegex.exec(rhesusText[t]);
    while (tripleRepeatingDigits) {
      tripleRepeatingDigits = threeDigitRegex.exec(rhesusText[t]);
      tripleDigitsText = tripleDigitsText + 1;
    }
  }
  text("The amount of 3 digit numbers is: " + tripleDigitsText, width/2 -75, height/4+20);
}