//URL--https://www.codewars.com/kata/59e66e48fc3c499ec5000103/train/javascript

//INSTRUCTIONS--In this Kata, you will be given an array of arrays and your task will be to 
//return the number of unique arrays that can be formed by picking exactly one element from each subarray.
//ignore duplicates in the same subarray

//SOLUTION--
//i am taking in an array of subarrays, those subarrays have numbers and only numbers, or empty?
//i am asked to return a number, the number of unique arrays thaat can be formed by taking one element from each subarray
//the answer is the length of each sub array with duplicates removed ONLY within the sub array itself, then multiply all of the lengths together(reduce)
//i know that map can be used to pass each element of the main array into new set to remove duplicates and create a new array of the lengths of the sub elements without duplicates
//finally i can use reduce to multiply across and get a total amoutn of unique combinations
//i should set the reduce starting number to 1 because i am multiplying, i should also in my map use || 1 when getting the lengths as an empty array will have a length of 0(falsy) and that will multiply my combinations by 0
// i also should wrap this whole thing in an if,if the original array has a length of 0 return 0

function solve(arr) {
    if (arr.length === 0) {
        return 0
    } else {
        let setAndIndices = arr.map(x => [...new Set(x)].length || 1);
        return setAndIndices.reduce((a, c) => a * c, 1)
    }
}

//TESTCASES--

console.log(solve([
    [1, 2],
    [4],
    [5, 6]
]), 4);
console.log(solve([
    [1, 2],
    [4, 4],
    [5, 6, 6]
]), 4);
console.log(solve([
    [1, 2],
    [3, 4],
    [5, 6]
]), 8);
console.log(solve([
    [1, 2, 3],
    [3, 4, 6, 6, 7],
    [8, 9, 10, 12, 5, 6]
]), 72)
console.log(solve([
    [1, 2, 3],
    [3, 4, 6, 6, 7],
    [8, 9, 10, 12, 5, 6],
    []
]), 72)