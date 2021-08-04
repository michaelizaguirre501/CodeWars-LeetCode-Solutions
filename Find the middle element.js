//URL--https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

//INSTRUCTIONS--
// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers

//SOLUTION--
//input-- array of 3 numbers
//output-- number (the index of the middle value)
//i will spread the array(create copy) sort it and stre that in a variable
//i will then find the middle element of the sorted array. using that number i will search the original array and find the index of that value

var gimme = (inputArray) => {
  let sortedArray = [...inputArray].sort((a, b) => a - b);
  return inputArray.indexOf(sortedArray[Math.trunc(sortedArray.length / 2)]);
};

//TESTCASES--
console.log(gimme([2, 3, 1]), 0, "Finds the index of middle element");
console.log(gimme([5, 10, 14]), 1, "Finds the index of middle element");
