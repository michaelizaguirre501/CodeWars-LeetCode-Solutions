//URL--https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

//INSTRUCTIONS--
// Given an array of integers, remove the smallest value. Do not mutate the original array/list.
// If there are multiple elements with the same value, remove the one with a lower index.
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

//SOLUTION--
//I can not mutate the given array so i will create a copy of it first using the spread operator.
//next i will find the lowest value using math.min.apply
//i will store the index of that lowest value found above in a variable
//finally i will splice my copied array at that index and only remove that element
function removeSmallest(numbers) {
  let newNumbers = [...numbers]; //copy

  let min = Math.min.apply(Math, numbers); //find min
  let indexMin = numbers.indexOf(min); // index of min in original array
  newNumbers.splice(indexMin, 1); // mutate copied array

  return newNumbers;
}

//TESTCASES--
removeSmallest([1, 2, 3, 4, 5]);
removeSmallest([5, 3, 2, 1, 4]);
removeSmallest([2, 2, 1, 2, 1]);
removeSmallest([]);
