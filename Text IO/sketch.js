/**
 * Matteo
 * 11/6/2016
 * ICS-4U0
 */

/**
 * Declars the rhesus object
 * @var {array} rhesusShow
 */

var rhesusShow = [];

function setup() {
  background(50);
  createCanvas(800,800);
  //Creates 500 rhesus objects on screen
  for (var i = 0; i < 500; i++) {
    rhesusShow[i] = new RhesusLines();
  }
}

function draw() {
  frameRate(0.5);
  background(50);
  //Displays the objects on screen
  for (var i = 0; i < rhesusShow.length; i++) {
    rhesusShow[i].display();
  }
}