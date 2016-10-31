//File where the perlin noise for the lava is updated

var PerlinOne;
var PerlinTwo;
var PerlinThree;

function updatePerlin() {
  PerlinOne = PerlinOne + 0.01;
  PerlinTwo = PerlinTwo + 0.01;
  PerlinThree = PerlinThree + 0.01;
}