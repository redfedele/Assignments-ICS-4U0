/**
 * Matteo
 * 10/6/2016
 * ICS-4U0
 */

var boxXoff = 0.0;
var boxYoff = 0.0;
var circleYoff = 0.0;
var circleXoff = 0.0;
var boxX = 0.01;
var boxY = 0.01;
var circleX = 0.01;
var circleY = 0.01;
var backgroundColor = random(0, 255);
var backgroundColor1 = random(0, 255);
var backgroundColor2 = random(0, 255);

function setup() {
  createCanvas(1000, 500);
  background(backgroundColor, backgroundColor1, backgroundColor);
  noStroke();
}
/**
 * @var {number} x, y, z, m, n, v - The Perlin Noise variable for the y coordinate of the boxes and circles
 * @var {number} a, b, c, d, e - The Perlin Noise variable for the x coordinate of the boxes and circles
 * @var {number} boxXoff/boxYoff/circleXoff/circleYoff - The x coordinates in noise space
 * @var {number} boxX/boxY/circleX/circleY - The semi randon value increment in noise space
 * @var {param} backgroundColor, 1 & 2 - The background color variable that changes to a random colour everytime you click
 */
function draw() {
  fill(backgroundColor, backgroundColor1, backgroundColor2, 40);
  rect(0, 0, width, height);
  /**
   * Gets a noise value based off boxXoff and scale in accordance to height
   */
  var x = noise(boxXoff) * height - 10;
  var y = noise(boxXoff) * height - 20;
  var z = noise(boxXoff) * height - 30;
  /**
   * Gets a noise value based off boxXoff/boxYoff and scale in accordance to width
   */
  var a = noise(boxYoff) * 500;
  var b = noise(boxYoff) * 625;
  var c = noise(boxYoff) * 750;
  var d = noise(boxYoff) * 875;
  var e = noise(boxYoff) * 1000;
  /**
   * Each cycle boxXoff/boxYoff will be incremented
   */
  boxXoff += boxX;
  boxYoff += boxY;

  fill(0);
  rect(a, z, 64, 64);
  rect(b, x, 64, 64);
  rect(c, y, 64, 64);
  rect(d, x, 64, 64);
  rect(e, z, 64, 64);
  /**
   * Gets a noise value based off boxXoff and scale in accordance to height
   */
  var m = noise(circleXoff) * height + 100;
  var n = noise(circleXoff) * height + 120;
  var v = noise(circleXoff) * height + 130;
  /**
   * Each cycle circleXoff/circleYoff will be incremented
   */
  circleXoff += circleX;
  circleYoff += circleY;

  fill(255);
  ellipse(a, v, 64, 64);
  ellipse(b, m, 64, 64);
  ellipse(c, n, 64, 64);
  ellipse(d, m, 64, 64);
  ellipse(e, v, 64, 64);

}
/**
 * Background colour changes everytime the mouse is pressed
 */
function mousePressed() {
  backgroundColor = random(0, 255);
  backgroundColor1 = random(0, 255);
  backgroundColor2 = random(0, 255);
}