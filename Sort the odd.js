//URL--https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

//INSTRUCTIONS--
//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//SOLUTION--
//I am taking in an array of numbers, they are a combination of odds and even numbers and the numbers can be negative but are always whole numbers
//i am returning an array where the odd numbers are sorted from highest to lowest and the even numbers are in the same order in the same indices as the original array
//i am going to create a new variable an array, where i filter thru the given array, and keep values where that value % 2 !==0(odd numbers) also i will sort that array from lowest to highest values
//i will return an array where i map over the original array if the current value in the iteration is odd i am going to replace it by using shift on my odds value array

function sortArray(array) {
  let odds = array.filter((x) => x % 2 !== 0).sort((a, b) => a - b);
  return array.map((x) => (x % 2 !== 0 ? odds.shift() : x));
}

//TESTCASES--

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);
