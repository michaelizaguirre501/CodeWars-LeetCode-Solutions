//URL-- https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

//INSTRUCTIONS--
//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0

//SOLUTION--
//i have to set up a condtional if the given array length is 0 to return 0 as stated in the instructions,
//next i will reduce over the array to get a total of all values in the array added together
//then divide that total by original array length
function find_average(array) {
  if (array.length === 0) {
    return 0;
  } else {
    const added = array.reduce((a, b) => a + b, 0);
    return added / array.length;
  }
}

//TESTCASES--

find_average([1, 2, 3, 4]);
find_average([72, 19, 65, 94, 2, 58, 56, 45, 36, 81, 9]);
find_average([73, 38, 44, 10]);
