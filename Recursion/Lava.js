//File where the lava object is stored in, it makes 2 lines(lava) 'shoot' out of a volcano

/**
 *@var {number} Lava - This is the recursion variable for the lava
 *@var {perlinNoise} lavaPerlinFirst/Second - This is the variable that makes the lava (lines) move as perlin noise
 */
 
function erupt(lava) {
  
  this.pointOneY = height - 195;
  this.pointOneX = width / 2;
  var lavaPerlinFirst = ((noise(PerlinOne + (20 * lava)) - 0.5) * 500) + height / 3;
  var lavaPerlinSecond = ((noise(PerlinTwo + (20 * lava)) - 0.5) * 500) + height / 3;

  strokeWeight(5);
  stroke(196, 103, 21);
  line(this.pointOneX, this.pointOneY, lavaPerlinFirst + 250, lavaPerlinSecond - 200);
  stroke(196, 21, 21);
  strokeWeight(2);
  line(this.pointOneX, this.pointOneY, lavaPerlinFirst + 250, lavaPerlinSecond - 200);

  if (lava > 0) {
    lava = lava - 1;
    erupt(lava);
  }
}