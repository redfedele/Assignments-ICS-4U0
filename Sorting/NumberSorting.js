/**
 * Sorts the numbers using bubbleSort
 */

function numberSort() {
  var bubbleSort;
  for (var i = 0; i < number.length - 1; i = i + 1) {
    for (var o = 0; o < number.length - 1 - i; o = o + 1) {
      if (number[o] > number[o + 1]) {
        bubbleSort = number[o];
        number[o] = number[o + 1];
        number[o + 1] = bubbleSort;
      }
    }
  }
}