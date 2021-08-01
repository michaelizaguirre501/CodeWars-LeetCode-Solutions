//URL--https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

//INSTRUCTIONS--
// An ordered sequence of numbers from 1 to N is given.
// One number might have deleted from it, then the remaining numbers were mixed.
// Find the number that was deleted.

// If no number was deleted from the array and no difference with it, your function should return the int 0.

//SOLUTION--
// I am taking in 2 arrays of numbers
// i am returning the number that is in arr1(arr) and not in arr2(mixArr)
// i am going to filter arr1 where the index of the element ===-1 in arr2(does not exist)
// that returns an array, so i will return the 0 index, because the amount of differing numbers is always 1 or 0
// if there are no deletions my array from filter will be empty so it will have no 0 index (undefined) so i will add an || 0 to the end of th return

function findDeletedNumber(arr, mixArr) {
  return arr.filter((x) => mixArr.indexOf(x) === -1)[0] || 0;
}

//TESTCASES--

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, "Deletion");
console.log(
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]),
  5,
  "Deletion"
);
console.log(
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]),
  0,
  "No deletion"
);
