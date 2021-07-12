//URL--https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

//INSTRUCTIONS--
//In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
//For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

//SOLUTION--
//i am taking in an array of numbers, there will be 2 elements in the array that do not repeat, the rest will repeat. All elements of the given array will be numbers
//i am returning the sum(reduce) as a number of the 2 elements that do not repeat (filter -> indexOf===lastIndexOf)
//I am going to filter thru the given array, and check each element to see if the index of it is === the last index of it, because index of returns the first time it appears
// and last index of returns the last index that it appears at

function repeats(arr) {
  const filtered = arr.filter(
    (ele) => arr.indexOf(ele) === arr.lastIndexOf(ele)
  );
  return filtered.reduce((a, b) => a + b, 0);
}

//TESTCASES--
repeats([4, 5, 7, 5, 4, 8]);
repeats([9, 10, 19, 13, 19, 13]);
repeats([16, 0, 11, 4, 8, 16, 0, 11]);
repeats([5, 17, 18, 11, 13, 18, 11, 13]);
