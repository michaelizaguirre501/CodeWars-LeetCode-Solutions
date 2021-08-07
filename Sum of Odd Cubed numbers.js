//URL--https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript

//INSTRUCTIONS--
//Find the sum of the odd numbers within an array, after cubing the initial integers.
// The function should return undefined/None/nil/NULL if any of the values aren't numbers.

//SOLUTION--
// I will store the evaluation of every for an isNAN check this will be a boolean
//next i will using a ternary check if i have true of false, if true(all elements where numbers) then filter out any even values, and reduce cubing the number and adding it to the returned sum
// if false(there was an element that wasnt a number) return undefined

let cubeOdd = (a) => {
  var isNumeric = a.every((x) => !isNaN(x));
  return isNumeric
    ? a.filter((n) => n % 2).reduce((s, n) => s + n ** 3, 0)
    : undefined;
};

//TESTCASES--

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(["a", 12, 9, "z", 42]), undefined);
