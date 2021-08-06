//URL--https://www.codewars.com/kata/5a430359e1ce0e35540000b1/train/javascript

//INSTRUCTIONS--
// Given an array of strings of the same letter type.
// Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

//SOLUTION--
//I am going to reduce over the array each time adding the length of the string to the accumulator and then dividing by length of original array ['aa', 'bbb', 'cccc'] => [2,3,4]
// using math.round i will round to nearest whole number this variable will be the amount of times i will use for repeat in the next section
//i will return a map where each element(string) in the original array has its 0th index repeated the amount of times i determined above.

function averageLength(arr) {
  const averageNumber = Math.round(
    [...arr].reduce((a, b) => a + b.length, 0) / arr.length
  );
  return arr.map((x) => x[0].repeat(averageNumber));
}
//TESTCASES--

console.log(averageLength(["u", "y"]), ["u", "y"]);
console.log(averageLength(["aa", "bbb", "cccc"]), ["aaa", "bbb", "ccc"]);
console.log(averageLength(["aa", "bb", "ddd", "eee"]), [
  "aaa",
  "bbb",
  "ddd",
  "eee",
]);
