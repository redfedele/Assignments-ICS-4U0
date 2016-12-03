var rhesusText;

function preload() {
  rhesusText = loadStrings("rhesus.txt");
}

function setup() {
  createCanvas(800, 600);
  background(115, 117, 122);
  twoDigitNumbers();
  threeDigitNumbers();
  fourDigitNumbers();
  italicWords();
  sentenceEnders();
}


