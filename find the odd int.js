//URL--https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

//INSTRUCTIONS--
//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

//SOLUTION--
//I will be given an array of numbers, in the array there will only be one number that appears an odd number of times
//i will return the number that appears the odd amount of times
//i will create an object the keys of the object will be the Unique numbers from the array, and the values will be the amount of times they appear
//i will then check the obj and return the key with an odd value, there will only be one as per the instructions
function findOdd(A) {
  let obj = {};
  for (let number of A) {
    !obj[number] ? (obj[number] = 1) : obj[number]++;
  }

  return +Object.keys(obj).find((key) => obj[key] % 2 != 0);
}

//TESTCASES--
console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
  5
);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), 10);
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), 1);
