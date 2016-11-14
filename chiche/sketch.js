var result;
function preload() {
  result = loadStrings('test.txt');
}

function setup() {
  createCanvas(500,500);
  background(200);
  var ind = floor(random(result.length));
  text(result[ind], 10, 10, 80, 80);
}