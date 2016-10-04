/** Matteo
 * 10/4/2016
 * ICS-4U0
 */
 

var AdD = false;
var SuB = false;
var MuL = false;
var DiV = false;
var RevClk = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(55, 104, 183);
}

function draw() {
  background(55, 104, 183);
  /**
   * @var {number} Add, Sub, Mul, Div, Max, Min - Floats that hold the the value of the various returned functions
   * @var {array} RevAr - An array that holds the value of an array that is reversed in a function
   */
  var Add = addition(mouseX, mouseY);
  var Sub = subtraction(mouseX, mouseY);
  var Mul = multiply(mouseX, mouseY);
  var Div = divide(mouseX, mouseY);
  var Max = maximum(mouseX, mouseY);
  var Min = minimum(mouseX, mouseY);
  var RevAr = reverseArray([24, 32, 58, 45, 85 ,982]);
  
  textStyle(BOLD);
  textFont("Georgia");
  fill(255);
  textSize(16);
  text("Press the Up Arrow Key to show the sum of the X and Y coordinates of the mouse", 12, 20);
  text("Press the Left Arrow Key to show the difference of the X and Y coordinates of the mouse", 12, 40);
  text("Press the Down Arrow Key to show the quotient of the X and Y coordinates of the mouse", 12, 60);
  text("Press the right Arrow Key to show the product of the X and Y coordinates of the mouse", 12, 80);
  text("Click the mouse to reverse the array", 12, 100);
  text("The boxes colour (and the text above them) will change depending on which mouse coordinate has a higher value", 12, 120);
  fill(255);
  /**
   * All of these if statements display a line of text stating the returned values of the various functions when one of the arrow keys is pressed
   * @var {boolean} AdD, RevClk, SuB, MuL, DiV - Boolean's that "turn" various functions on/off depending on what arrow key is pressed
   */
   if (AdD === true) {
    text("The sum of the mouse coordinates is " + Add + "", mouseX - 125, mouseY - 5);
  }

  if (RevClk === true) {
    fill(226, 11, 11);
    text("The reversed array is " + RevAr + "", 12, 140);
  }

  if (RevClk === false) {
    textSize(16);
    fill(226, 11, 11);
    text("The normal array is " + RevAr + "", 12, 140);
  }

  if (SuB === true) {
    text("The difference of the mouse coordinates is " + Sub + "", mouseX - 125, mouseY - 5);
  }

  if (MuL === true) {
    text("The product of the mouse coordinates is " + Mul + "", mouseX - 125, mouseY - 5);
  }

  if (DiV === true) {
    text("The quotient of the mouse coordinates is " + round(Div * 1000) / 1000 + "", mouseX - 125, mouseY - 5);
  }
}
/**
 * A function that adds the two mouse coordinates together, and allows it to be displayed as text folowing the pointer
 * @param {number} AddMouseX - The X coordinate of the mouse
 * @param {number} AddMouseY - The Y coordinate of the mouse
 * @return {number} Returns the value of the two mouse coordinates added together
 */
function addition(AddMouseX, AddMouseY) {
  return AddMouseX + AddMouseY;
}
/**
 * A function that subtracts the Y coordinate from the X coordinate, and allows it to be displayed as text folowing the pointer
 * @param {number} SubMouseX - The X coordinate of the mouse
 * @param {number} SubMouseY - The Y coordinate of the mouse
 * @return {number} Returns the value of the Y coordinate of the mouse taken off of the X coordinate of the mouse 
 */
function subtraction(SubMouseX, SubMouseY) {
  return SubMouseX - SubMouseY;
}
/**
 * A function that multiplies the X and Y coordinate of the pointer, and allows it to be displayed as text folowing the mouse movements
 * @param {number} MulMouseX - The X coordinate of the mouse
 * @param {number} MulMouseY - The Y coordinate of the mouse
 * @return {number} Returns the value of the Y an X coordinates multiplied together
 */
function multiply(MulMouseX, MulMouseY) {
  return MulMouseX * MulMouseY;
}
/**
 * A function that divides the Y coordinate from the X coordinate, and allows it to be displayed as text folowing the pointer
 * @param {number} DivMouseX - The X coordinate of the mouse
 * @param {number} DivMouseY - The Y coordinate of the mouse
 * @return {number} Returns the value of the X coordinate divided by the Y coordinate
 */
function divide(DivMouseX, DivMouseY) {
  return DivMouseX / DivMouseY;
}
/**
 * A function that finds the lower value of the X and Y coordinates of the mouse, then displays it in text and changes the colour of the box on the right
 * @param {number} MinMouseX - The X coordinate of the mouse
 * @param {number} MinMouseY - The Y coordinate of the mouse
 * @return {number} MinMouseX - Returns the X coordinate of the mouse 
 * @return {number} MinmMouseY - Returns the Y coordinate of the mouse
 */
function minimum(MinMouseX, MinMouseY) {
  if (MinMouseX < MinMouseY) {
    fill(226, 11, 11);
    rect(windowWidth / 2 + 200, windowHeight / 2 - 50, 100, 100);
    text("The lower Coordinate is X", windowWidth / 2 + 140, windowHeight / 2 - 70);
    return MinMouseX;
  }

  if (MinMouseY < MinMouseX) {
    fill(28, 226, 2);
    rect(windowWidth / 2 + 200, windowHeight / 2 - 50, 100, 100);
    text("The lower Coordinate is Y", windowWidth / 2 + 140, windowHeight / 2 - 70);
    return MinMouseY;
  }
}
/**
 * A function that finds the higher value of the X and Y coordinates of the mouse, then displays it in text and changes the colour of the left box
 * @param {number} MaxMouseX - The X coordinate of the mouse
 * @param {number} MaxMouseY - The Y coordinate of the mouse
 * @return {number} MaxMouseX - Returns the X coordinate of the mouse 
 * @return {number} MaxmMouseY - Returns the Y coordinate of the mouse
 */
function maximum(MaxMouseX, MaxMouseY) {
  if (MaxMouseX > MaxMouseY) {
    fill(0);
    rect(windowWidth / 2 - 200, windowHeight / 2 - 50, 100, 100);
    text("The higher Coordinate is X", windowWidth / 2 - 260, windowHeight / 2 - 70);
    return MaxMouseX;
  }

  if (MaxMouseY > MaxMouseX) {
    fill(163, 187, 226);
    rect(windowWidth / 2 - 200, windowHeight / 2 - 50, 100, 100);
    text("The higher Coordinate is Y", windowWidth / 2 - 260, windowHeight / 2 - 70);
    return MaxMouseY;
  }
}
/**
 * A function that allows the array "RevAr", to be reversed and set back to normal upon the click of the mouse
 * @param {array} reverse1 - RevAr (Normal Array) will be reversed when returned throught the for statement
 * @return {array} reverse1 - (line 28) The array is returned reversed. (line 32) Returns the array as it was (not reversed)
 */
function reverseArray(reverse1) {
  if (RevClk === true) {
    for (var i = 0; i < reverse1.length / 2; i++) {
      temp = reverse1[i];
      reverse1[i] = reverse1[reverse1.length - 1 - i];
      reverse1[reverse1.length - 1 - i] = temp;
    }
    return reverse1;
  }

  if (RevClk === false) {
    return reverse1;
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    AdD = true;
    SuB = false;
    MuL = false;
    DiV = false;
    MaX = false;
    MiN = false;

  }
  if (keyCode === LEFT_ARROW) {
    SuB = true;
    AdD = false;
    MuL = false;
    DiV = false;
    MaX = false;
    MiN = false;
  }

  if (keyCode === RIGHT_ARROW) {
    MuL = true;
    SuB = false;
    AdD = false;
    DiV = false;
    MaX = false;
    MiN = false;
  }

  if (keyCode === DOWN_ARROW) {
    DiV = true;
    SuB = false;
    AdD = false;
    MuL = false;
    MaX = false;
    MiN = false;
  }
}

function mousePressed() {
  if (RevClk === false) {
    RevClk = true;
  } else {
    RevClk = false;
  }
}