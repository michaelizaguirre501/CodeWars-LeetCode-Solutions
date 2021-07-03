//URL--https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

//INSTRUCTIONS--
//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//SOLUTION--
//params- i will take in an array, it will contain numbers, the numbers can be negative, decimals or positive,
//return a number that is the sum of all elements after they have been squared
//psuedo- i plan to square all numbers using map and creating a new array, then returning those elements reduced.

function squareSum(numbers) {
  let squared = numbers.map((x) => x ** 2);
  return squared.reduce((a, b) => a + b, 0);
}

//TESTCASES--
squareSum([1, 2]);
squareSum([0, 3, 4, 5]);
