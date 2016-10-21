  /**
 * Matteo
 * 10/6/2016
 * ICS-4U0
 */

/**
 * File for keeping the Rain object in
 */
  
  function Rain() {
  this.locationX = random(0, width);
  this.velocity = random(3, 5);
  this.locationY = random(-500, 0);

  this.fall = function() {
    this.locationY = this.locationY + this.velocity;
    if (this.locationY > height) {
      this.locationY = random(-100, 0);
    }
  }
  
  this.display = function() {
    strokeWeight(1);
    stroke(116, 152, 211);
    line(this.locationX, this.locationY, this.locationX, this.locationY + 10);

  }
}