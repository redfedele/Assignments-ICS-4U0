function italicWords() {
  var italicWordsHolder;
  var italicWordsSplit;
  var amountOfItalics = 0;
  var italicRegex = /_.*?_/g;
  for (var y = 0; y < rhesusText.length; y = y + 1) {
    italicWordsHolder = italicRegex.exec(rhesusText[y]);
    while (italicWordsHolder) {
      italicWordsSplit = italicWordsHolder[0].split(/\W+/);
      amountOfitalics = amountOfItalics + italicWordsSplit.length;
      italicWordsHolder = italicRegex.exec(rhesusText[y]);
    }
  }
  text("The number of italicized words are: " + amountOfItalics, width/2 -75, height/4 + 60);

}