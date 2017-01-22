/** 
 * Joins the two arrays together and searches for the words/numbers using regex
 */

function arrays() {
  var wordArray;
  var numberArray;
  var regexWord = /[a-zA-Z]+/g;
  var regexNumber = /\b\d+\b/g;
  for (var i = 0; i < rhesusText.length; i = i + 1) {
    wordArray = regexWord.exec(rhesusText[i]);
    numberArray = regexNumber.exec(rhesusText[i]);
    while (wordArray !== null) {
      word.push(wordArray[0].toLowerCase());
      wordArray = regexWord.exec(rhesusText[i]);
    }
    while (numberArray !== null) {
      number.push(int(numberArray[0]));
      numberArray = regexNumber.exec(rhesusText[i]);
    }
  }

}