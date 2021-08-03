//URL--https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

//INSTRUCTIONS--
//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
//All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//SOLUTION--
//this problem can be solved by using sort and sorting by the parameter lengths

function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}
//TESTCASES--

console.log(sortByLength(["Beg", "Life", "I", "To"]), [
  "I",
  "To",
  "Beg",
  "Life",
]);

console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]), [
  "",
  "Pizza",
  "Brains",
  "Moderately",
]);

console.log(sortByLength(["Longer", "Longest", "Short"]), [
  "Short",
  "Longer",
  "Longest",
]);
