//URL--https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

//INSTRUCTIONS--

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.

//SOLUTION--
// I am taking in a String
// i am returning an array
// I will split the string and sort by the last character
// i will either flip each word and sort and then reflip the words or i will sort using charcodeat and target the last letter

function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

//TESTCASES--
last("man i need a taxi up to ubud"); //, ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']);
last("what time are we climbing up the volcano"); //, ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']);
last("take me to semynak"); //, ['take', 'me', 'semynak', 'to']);
