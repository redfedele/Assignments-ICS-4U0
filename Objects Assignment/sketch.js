/**
 * Matteo
 * 10/6/2016
 * ICS-4U0
 */


var flames = []; // Declare object
var rain = [];
var slider;
var rainAmount;

function setup() {
  createCanvas(800, 600);
  /**
   * @param {slider} createSlider - Creates a slider with values 1-1000 and increments of 0.1
   */
 
  slider = createSlider(1,1000,1000, 0.1);

  // Create object

    for (var i = 0; i < 40; i++) {
    flames[i] = new Flames();
  }

}

function mousePressed() {
  for (var i = 0; i < 40; i++) {
    flames[i] = new Flames();
  }
}

function draw() {
  /**
   * @var {number} rainAmount - Determines the amount of rain that will be produced
   */
  
  rainAmount = slider.value();
  
      for (var v = 0; v < rainAmount; v++) {
    rain[v] = new Rain();
  }
  background(50, 89, 100, 40);
  for (var i = 0; i < flames.length; i++) {
    flames[i].display();
    flames[i].flameIntensityIncrease();
  }
  
  for (var p = 0; p < rain.length; p++) {
    rain[p].display();
    rain[p].fall();
  }
}

