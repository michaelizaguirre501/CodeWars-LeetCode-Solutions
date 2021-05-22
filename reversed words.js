//URL--https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/javascript

//INSTRUCTIONS--
//Complete the solution so that it reverses all of the words within the string passed in.

//SOLUTION--
//a simple split reverse join will work here
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
//TESTCASES--
reverseWords("hello world!");
reverseWords("yoda doesn't speak like this");
reverseWords("foobar");
