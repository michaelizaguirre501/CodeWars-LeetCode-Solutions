//URL--https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript/60f9a1f5fb4262000d84eadf

//INSTRUCTIONS--
//In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum,
//followed by second max value then second min value, etc.

//SOLUTION--
//I am taking in an un sorted array of numbers
//i am returning an array where the first value is the highest from the original array, then the lowest and so on
//i will sort the array
//then map a new array in the return where if the index of the map call back is odd(modulous) then shift the sorted array or odd will pop the sorted array
function solve(arr) {
  return [...Array(arr.sort((a, b) => a - b).length)].map((x, i) =>
    i % 2 ? arr.shift() : arr.pop()
  );
}

//TESTCASES--

console.log(solve([15, 11, 10, 7, 12]), [15, 7, 12, 10, 11]);
console.log(solve([1, 5, 2, 4, 3]), [5, 1, 4, 2, 3]);
console.log(
  solve([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]),
  [50, 5, 45, 10, 40, 15, 35, 20, 30, 25]
);
