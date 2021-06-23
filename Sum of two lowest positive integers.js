//URL--https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

//INSTRUCTIONS--
//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
//No floats or non-positive integers will be passed.

//SOLUTION--
//I will sort the given array from lowest number to highest
//and then return the sum of the first two elements

const sumTwoSmallestNumbers=(numbers)=>{
  let sorted = numbers.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
}
//TESTCASES--
sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
sumTwoSmallestNumbers([15, 28, 4, 2, 43]);
sumTwoSmallestNumbers([3, 87, 45, 12, 7]);
