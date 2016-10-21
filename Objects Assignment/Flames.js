/**
 * Matteo
 * 10/6/2016
 * ICS-4U0
 */
 
 //File for keeping the Flames object in


function Flames() {
  this.xpos = random(width);
  this.ypos = height - 300;
  this.flameHeight = random(200, 300);
  this.flameHeightIncrease = 3;

  this.flameIntensityIncrease = function() {
    this.flameHeight += random(-this.flameHeightIncrease, this.flameHeightIncrease);
  }

  this.display = function() {
    fill(237, 135, 38);
    rect(this.xpos, this.ypos + this.flameHeight, 5, 1000);
  }
}