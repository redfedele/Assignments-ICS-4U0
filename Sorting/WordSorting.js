/**
 * Sorts the words using insertion Sort
 */

function wordSort() {
  var insertionSort;
  for (var i = 0; i < word.length; i = i + 1) {
    insertionSort = word[i];
    for (var o = i; o > 0 && word[o - 1] > insertionSort; o = o - 1) {
      word[o] = word[o - 1];
    }
    word[o] = insertionSort;
  }
}