/**
 * Sorting Assignment
 * Matteo Fedele
 * ICS-4U0
 * 11/25/2016
 */

var rhesusText;
var word = [];
var slider;
var number = [];

function preload() {
  rhesusText = loadStrings("rhesus.txt");
}

function setup() {
  //sort(number);
  //sort(word);
  createCanvas(500, windowHeight);
  slider = createSlider(0, 77000, 0, 100);
  slider.style("width", "300px");
  arrays();
  wordSort();
  numberSort();
}
/**
 * Sorts the words and numbers in a vertical pattern, scrolls down/up using a slider
 */

function draw() {
  textFont("Georgia");
  background(171, 174, 178);
  var sliderValue = slider.value();
  translate(0, -sliderValue);
  for (var o = 0; o < word.length; o = o + 1) {
    textSize(20);
    text(word[o], width / 2, o * 22);
  }
  for (var i = 0; i < number.length; i = i + 1) {
    text(number[i], width/2 - 50,i * 22);
  }
}









