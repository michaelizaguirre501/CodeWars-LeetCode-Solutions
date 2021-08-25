//URL--https://leetcode.com/problems/jewels-and-stones/submissions/

//INSTRUCTIONS--
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0
// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

//SOLUTION--
// set up a counter to be returned start at 0 and an empty object
// pass stones to a hashmap that counter the times the characters appear in the string
//loop using the jewels.length and just add the value of that character from the hash map ggs

var numJewelsInStones = function (jewels, stones) {
  let counter = 0;
  const hashmap = {};

  for (const stone of stones) {
    hashmap[stone] ? hashmap[stone]++ : (hashmap[stone] = 1);
  }

  for (let i = 0; i < jewels.length; i++) {
    if (hashmap[jewels[i]]) {
      counter += hashmap[jewels[i]];
    }
  }
  return counter;
};

//TESTCASES--

console.log(numJewelsInStones("aA", "aAAbbbb"), 3);
