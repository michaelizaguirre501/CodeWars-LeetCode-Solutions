//URL--https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

//INSTRUCTIONS--
// The two oldest ages function/method needs to be completed.
// It should take an array of numbers as its argument and return the two highest numbers within the array.
// The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order.
// The array will always include at least 2 items.
// If there are two or more oldest age, then return both of them in array format.

//SOLUTION--
//i am taking in an array of un sorted numbers
//i am returning an array of numbers of the two highest numbers
//pretty simple i want to sort the array from lowest to highest (a-b)
//then return the last 2 elements (slice) because they only want the highest 2 numbers(last 2) and they want it in order from lowest to highest
//you can slice from the right with negative numbers

function twoOldestAges(ages) {
  return ages.sort((a, b) => a - b).slice(-2);
}

//TESTCASES--

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]));
