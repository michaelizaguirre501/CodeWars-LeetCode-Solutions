//URL--https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript

//INSTRUCTIONS--
// Write a function that combines two arrays by alternatingly taking elements from each array in turn.
// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

//SOLUTION--
// i will define an empty array to push to and return
// also i will define the variable shortest for the array with the smallest length using math min
// i will iterate over both arrays for the shortest length pushing each to result
// when that loop is over i will slice both arrays at the index of [shortest] and push that to answer incase the arrays ar of different lengths
function mergeArrays(a, b) {
  let result = [],
    i,
    shortest = Math.min(a.length, b.length);

  for (i = 0; i < shortest; i++) {
    result.push(a[i], b[i]);
  }
  result.push(...a.slice(shortest), ...b.slice(shortest));

  return result;
}

//TESTCASES--
mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"]);
mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]);
mergeArrays([2, 5, 8, 23, 67, 6], ["b", "r", "a", "u", "r", "s"]);
