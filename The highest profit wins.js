//URL--https://www.codewars.com/kata/559590633066759614000063/train/javascript

//INSTRUCTIONS--
//Write a function that returns both the minimum and maximum number of the given list/array.
//All arrays or lists will always have at least one element, so you don't need to check the length.
//Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

//SOLUTION--
//i will use Math.min Math.max, spread the given array inside those methods. and return an array where the first index is min and last is max

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

//TESTCASES--
minMax([1, 2, 3, 4, 5]);
minMax([2334454, 5]);
minMax([1]);
