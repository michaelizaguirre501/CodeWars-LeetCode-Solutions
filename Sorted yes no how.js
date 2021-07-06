//URL--https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

//INSTRUCTIONS--
// Complete the method which accepts an array of integers, and returns one of the following:
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

//SOLUTION--
// i am going to take in an array, the array wil always be numbers, sometimes the numbers may be negative or decimals
// i will return a string depending on the order the given array is sorted in, all elements must be sorted the same way other wise i will return the string no(else case)
// i had trouble with this, so i used a more brute forced method,
// i am going to define a variable which is an empty array
// i will loop thru the given array and everytime the element at index i is less than index i + 1 i will push 1 to the answer array for greater than i will push 2.
// this way when i remove all duplicates, if the array passed to a set length is greater than 1 i know it is not sorted at all, and based on the value of the array i can tell ascending or descending

function isSortedAndHow(array) {
  let answer = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      answer.push(1);
    } else if (array[i] > array[i + 1]) {
      answer.push(2);
    }
  }
  answer = [...new Set(answer)];
  if (answer.length === 1 && answer[0] === 1) {
    return "yes, ascending";
  } else if (answer.length === 1 && answer[0] === 2) {
    return "yes, descending";
  } else {
    return "no";
  }
}

//TESTCASES--
isSortedAndHow([1, 2]);
isSortedAndHow([15, 7, 3, -8]);
isSortedAndHow([4, 2, 30]);
