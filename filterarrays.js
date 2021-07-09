/*  Given two arrays of strings, return the number of times each string of the second array appears in the first array. */

function solve(arr1, arr2) {
  let result = arr2.map((e) => arr1.filter((el) => el === e).length);
  console.log(result);
}

solve(["abc", "abc", "xyz", "abcd", "cde"], ["abc", "cde", "uap"]); //[2, 1, 0];
solve(["abc", "xyz", "abc", "xyz", "cde"], ["abc", "cde", "xyz"]); //[2, 1, 2];
solve(["quick", "brown", "fox", "is", "quick"], ["quick", "abc", "fox"]); // [2, 0, 1];
