//URL--https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript

//INSTRUCTIONS--
//Your task is to remove all consecutive duplicate words from a string, leaving only first words entries

//SOLUTION--
//I am going to take in a single string of multple words there are repeating words in the string,
//I will return a string of multiple words taking the first occurrence of the word in the string if it repeats, basically i am removing consecutive duplicates
//im going to have to split the original string so i can use array methods on it and then join it in the end
//filter works the best for me here where i can filter the array and take only elements that do not have the same element before it

const removeConsecutiveDuplicates = (s) =>
  s
    .split(" ")
    .filter((ele, i, arr) => ele !== arr[i - 1])
    .join(" ");

//TESTCASES--

removeConsecutiveDuplicates(
  "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
);
