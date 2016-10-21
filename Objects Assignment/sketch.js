/**
 * Matteo
 * 10/6/2016
 * ICS-4U0
 */


var flames = []; // Declare object
var rain = [];

function setup() {
  createCanvas(800, 600);
  // Create object
     for (var v = 0; v < 400; v++) {
    rain[v] = new Rain();
  }
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
  background(50, 89, 100, 40);
  for (var i = 0; i < flames.length; i++) {
    flames[i].display();
    flames[i].flameIntensityIncrease();
  }
  for (var v = 0; v < rain.length; v++) {
    rain[v].display();
    rain[v].fall();
  }
}

