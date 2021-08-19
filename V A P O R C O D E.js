//URL--https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/javascript

//INSTRUCTIONS--
//Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase,
//and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

//SOLUTION--
//@IN- string regular casing and spaceing
//@OUT- string, all letters uppercase all LETTERS have 2 spaces in between, the spaces from the original string should be gone for this to work

// im going to use regex to replace all the spaces from the original string
// then split all characters into an array, map it to uppercase, and join with 2 spaces
function vaporcode(string) {
  return string
    .replace(/ /g, "")
    .split("")
    .map((x) => x.toUpperCase())
    .join("  ");
}

//NO MAP

// function vaporcode(string) {
//   return string.replaceAll(/ /g, "").toUpperCase().split("").join("  ");
// }

console.log(
  vaporcode("Let's go to the movies"),
  "L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
);
console.log(
  vaporcode("Why isn't my code working?"),
  "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
);

//TESTCASES--
