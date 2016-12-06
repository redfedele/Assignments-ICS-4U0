function sentenceEnders() {
  var periodHolder;
  var questionMarkHolder;
  var exclamationHolder;
  var periodRegex = /\./g;
  var questionMarkRegex = /\?/g
  var exclamationRegex = /\!/g;
  var periods = 0;
  var questionMarks = 0;
  var exclamations = 0;

  for (var n = 0; n < rhesusText.length; n = n + 1) {
    periodHolder = periodRegex.exec(rhesusText[n]);
    while (periodHolder) {
      periods = periods + 1;
      periodHolder = periodRegex.exec(rhesusText[n]);
    }
    exclamationHolder = exclamationRegex.exec(rhesusText[n]);
    while (exclamationHolder) {
      exclamations = exclamations + 1;
      exclamationHolder = exclamationRegex.exec(rhesusText[n]);
      questionMarkHolder = questionMarkRegex.exec(rhesusText[n]);
    }
    while (questionMarkHolder) {
      questionMarks = questionMarks + 1;
      questionMarkHolder = questionMarkRegex.exec(rhesusText[n]);
    }
  }

  text("The amount of exclamation marks are: " + exclamations, width/2 -75, height/4 + 60);
  text("The amount of periods are:" + periods, width/2 -75, height/4 + 80);
  text("The amount of question marks are : " + questionMarks, width/2 -75, height/4 + 100);
}