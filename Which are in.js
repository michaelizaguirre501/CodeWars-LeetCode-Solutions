//URL--https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

//INSTRUCTIONS--
// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

// #Example 1: a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns ["arp", "live", "strong"]

// #Example 2: a1 = ["tarp", "mice", "bull"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
// returns []

// Notes:
// Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
// In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.
// Don't mutate the inputs.

//SOLUTION--
// we are taking in 2 arrays, and checking which elements of array1 are substrings of array2
// my return must be an array that is sorted lexicographically and not contain duplicates
//im going to loop thru array 1 then loop thru array 2 inside of the first loop,
// then check if the second looped elements include the first and push the first element into an answer array
//next i will sort that array
//finally i will use the power of google to remove duplicates by splitting the sorted answer array into a new set and re joining it into an array

function inArray(array1, array2) {
  let answer = [];
  array1.forEach((x, i) => {
    array2.forEach((y, j) => {
      if (y.includes(x)) {
        answer.push(x);
      }
    });
  });
  answer.sort();
  return [...new Set(answer)];
}

//TESTCASES--

let a1 = ["xyz", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1, a2));
