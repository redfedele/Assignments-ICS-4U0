
var PerlinOne;
var PerlinTwo;
var PerlinThree;

function setup() {
  createCanvas(500, 500);
  PerlinOne = 300;
  PerlinTwo = 150;
  PerlinThree = 3;
}


function draw() {
  background(40);
  updatePerlin();
  erupt(20);
}


function updatePerlin() {
  PerlinOne = PerlinOne + 0.01;
  PerlinTwo = PerlinTwo + 0.01;
  PerlinThree = PerlinThree + 0.01;
}

function erupt(lava) {

  var lavaPerlinFirst = ((noise(PerlinOne + (20 * lava)) - 0.5) * 1000) + 200;
  var lavaPerlinSecond = ((noise(PerlinTwo + (20 * lava)) - 0.5) * 1000) + 200;
  strokeWeight(5);
  stroke(232, 92, 23);
  line(200, 400, lavaPerlinFirst, lavaPerlinSecond -500);
  stroke(232, 23, 23)
  strokeWeight(2);
  line(200, 400, lavaPerlinFirst, lavaPerlinSecond -500);

  if (lava > 0) {
    lava = lava - 1;
    erupt(lava);
  }
}