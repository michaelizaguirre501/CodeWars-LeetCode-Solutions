//URL--https://www.codewars.com/kata/57ef016a7b45ef647a00002d/train/javascript

//INSTRUCTIONS--
// Given a two-dimensional array, return a new array which carries over only those arrays from the original,
// which were not empty and whose items are all of the same type (i.e. homogenous).
// For simplicity, the arrays inside the array will only contain characters and integers.
// Please keep in mind that for this kata, we assume that empty arrays are not homogenous.
// The resultant arrays should be in the order they were originally in and should not have its values changed.
// No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.

//SOLUTION--
// i will filter thru the given array looking for elements of the given array that have a length > 0 and all elements inside the given array have the same typeof
let filterHomogenous = (a) =>
  a.filter((b) => b.length > 0 && b.every((e) => typeof e == typeof b[0]));

//TESTCASES--
filterHomogenous([[1, 5, 4], ["a", 3, 5], ["b"], [], ["1", 2, 3]]),
  [[1, 5, 4], ["b"]];
filterHomogenous([[123, 234, 432], ["", "abc"], [""], ["", 1], ["", "1"], []]),
  [[123, 234, 432], ["", "abc"], [""], ["", "1"]];
