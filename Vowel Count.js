//URL--https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

//INSTRUCTIONS--
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

//SOLUTION--
// using match with regex i will check if the string has vowels
//if not return 0
//if so return the length of the string match returns
function getCount(str) {
  if (!str.match(/[aeiou]/gi)) {
    return 0;
  } else {
    return str.match(/[aeiou]/gi).length;
  }
}

//TESTCASES--
getCount("abracadabra");
