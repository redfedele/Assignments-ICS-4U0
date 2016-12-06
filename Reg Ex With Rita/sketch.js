var rhesusText;

function preload() {
  rhesusText = loadStrings("rhesus.txt", makeRitaString);
}

function setup() {
  createCanvas(800, 600);
  background(115, 117, 122);
  textSize(16);
  twoDigitNumbers();
  threeDigitNumbers();
  fourDigitNumbers();
  italicWords();
  sentenceEnders();
  nounsPronounsAndVerbs();
}




