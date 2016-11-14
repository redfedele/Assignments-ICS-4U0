/**
 * The variable that the rhesus strings will be stored in
 * @var {array} rhesus
 */

var rhesus;
//Preloads the rhesus text file in
function preload() {
  rhesus = loadStrings('rhesus.txt');
}
/**
 * Represents the rhesus text lines
 * @class
 */

function RhesusLines() {
  //Displays the objects on screen
  this.display = function() {
    rotate(random(0.1, 0.2));
    fill(random(1, 255), random(1, 255), random(1, 255));
    textSize(random(5, 25));
    /**
     * Makes a random line from rhesus to be added to the array
     * @var {array} ind
     */
    var ind = floor(random(rhesus.length));
    text(rhesus[ind], random(width - 400), random(height - 350), 500, 500);
    console.log(rhesus.length);
  }
}