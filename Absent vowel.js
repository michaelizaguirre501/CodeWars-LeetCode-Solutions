//URL--https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript

//INSTRUCTIONS--
// Your job is to figure out the index of which vowel is missing from a given string:
// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

//SOLUTION--
//spread 'aeiou' use findindex on that checking each letter agains input string does not include
function absentVowel(x) {
  return [..."aeiou"].findIndex((letter) => !x.includes(letter));
}

//TESTCASES--
console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(
  absentVowel("Bb Smith sent us six neatly arranged range bicycles"),
  3
);
