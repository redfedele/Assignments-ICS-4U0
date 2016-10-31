/**
 * Mattep
 * 10/30/2016
 * ICS-4U0
 */

/**
 *@var {object} Volcano - This variable is to call the volcano object
 *@var {number} p - Changes the color of the original volcano
 *@var {boolean} volcanoBoolean - This is a boolean variable to "turn on" the volcano and the Lava
 */
var Volcano;
var p = 255;
var volcanoBoolean = false;

function setup() {
  createCanvas(800, 600);
  Volcano = new volcano();
  PerlinOne = 300;
  PerlinTwo = 150; 
  PerlinThree = 3;
}

function draw() {
  background(255,255,255);
  noStroke();
  if (volcanoBoolean === false) {
    fill(165, 141, 119, p);
    triangle(width/2-100, height, width/2, height-200, width/2+100, height);
  }
  if (volcanoBoolean === true) {
    Volcano.display();
    erupt(20);
    updatePerlin();
  }
}

function mousePressed() {
  p = 0;
  volcanoBoolean = true;
  Volcano = new volcano();
}

function keyPressed() {
  if (keyCode === ENTER) {
    volcanoBoolean = false;
    p = 255;
  }
}