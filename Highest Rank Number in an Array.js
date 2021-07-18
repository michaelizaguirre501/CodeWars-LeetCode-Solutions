//URL--https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

//INSTRUCTIONS--
//Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.
//Note: no empty arrays will be given.

//SOLUTION--
// i am taking in an array of numbers there will be repeating numbers
// i am to return a single number, the number that repeats the most times, if there is a tie on which number repeats the most give the largest of those numbers
// i am going to create an object where the keys are the numbers from the array and the values are the times they appear in the array
// next i will create a variable keys, which will be the keys of my object
// and a variable values which will be a the values (amount of times the keys appear)
// the last index of the highest value (math max) of the values array i just created will be the the same index i will return from the keys array( that was rough to explain )

function highestRank(arr) {
  const obj = {};
  for (let ele of arr) {
    if (!obj[ele]) {
      obj[ele] = 1; //create object
    } else {
      obj[ele]++;
    }
  }
  const keys = Object.keys(obj); // keys from created obj
  const values = Object.values(obj); // values from created obj
  return +keys[values.lastIndexOf(Math.max(...values))]; // bracket notation so i can get the highest value of the highest amount of repeats from the original array
}
//TESTCASES--
console.log(highestRank([12, 10, 8, 12, 7, 111, 6, 4, 10, 12]), 12);
