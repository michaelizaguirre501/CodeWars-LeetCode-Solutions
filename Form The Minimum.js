//URL--https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

//INSTRUCTIONS--
//Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
//Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

//SOLUTION--
//params- taking in an array of numbers not sorted can contain duplicates, it will only contain postive integers no negative numbers or zeros
//return- one number, duplicates removed, the number returned needs to be the lowest possible (sounds like sort to me)
//psuedo- create a new vaiable where i remove duplicates from the given array with new Set,
//if i then sort it lowest to highest i will have an array in the proper order.
//finally using join on that array wrapped with number i will have my return value

function minValue(values) {
  const removeDupesAndSort = [...new Set(values.sort((a, b) => a - b))];
  return Number(removeDupesAndSort.join(""));
}

//TESTCASES--
minValue([1, 3, 1]);
minValue([4, 7, 5, 7]);
minValue([4, 8, 1, 4]);
minValue([5, 7, 9, 5, 7]);
