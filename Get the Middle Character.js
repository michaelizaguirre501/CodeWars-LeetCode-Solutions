//URL--https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

//INSTRUCTIONS--
//You are going to be given a word. Your job is to return the middle character of the word.
//If the word's length is odd, return the middle character as a string.
//If the word's length is even, return the middle 2 characters as a string.

//SOLUTION--
// i am immediately going to split the given string to an array
// i will define a variable for the halfway point by dividing length by 2 and rounding down, halfway starting at a 0 count that is
// next i will do a conditional if the string when split has an odd or even length
// if odd i will return the element at the halfway index (already is a string)
// if even i will return first the element one before my halfway variable and at my halfway variable as an array that will be joined into a string
function getMiddle(s) {
  const splitString = s.split("");
  const halfway = Math.floor(splitString.length / 2);
  if (splitString.length % 2 !== 0) {
    return splitString[halfway];
  } else {
    return [splitString[halfway - 1], splitString[halfway]].join("");
  }
}

//TESTCASES--

getMiddle("test");
getMiddle("testing");
getMiddle("middle");
getMiddle("A");
