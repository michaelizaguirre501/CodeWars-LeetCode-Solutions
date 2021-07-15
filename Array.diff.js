//URL--https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

//INSTRUCTIONS--
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

//SOLUTION--
//I am taking in 2 arrays
//I am returning an array where the values from array 2 are removed from array 1
//I will use filter to filter thru the first array(a) and only return values that are not present in the second array(!b.includes)
const arrayDiff = (a, b) => a.filter((ele) => !b.includes(ele));

//TESTCASES--
arrayDiff([], [4, 5]); //[], "a was [], b was [4,5]")
arrayDiff([3, 4], [3]); // [4], "a was [3,4], b was [3]"
console.log(arrayDiff([1, 2, 3], [1, 2])); //  [3], "a was [1,2,3], b was [1,2]
