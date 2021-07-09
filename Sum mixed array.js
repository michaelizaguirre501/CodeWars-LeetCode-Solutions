//URL-- https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

//Instructions--
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// Solution--

// I need to change all elements in the array we are taking in as a parameter into numbers
//then reduce (=>a+b) and return the sum

const sumMix = (x) => x.map(Number).reduce((a, b) => a + b, 0);

//TEST CASES--
sumMix([9, 3, "7", "3"]);
sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]);
sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]);
