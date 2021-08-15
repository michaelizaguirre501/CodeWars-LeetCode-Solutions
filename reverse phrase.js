//INSTRUCTIONS--
//Given a phrase, reverse the order of the characters of each word.
//DONT USE REVERSE METHOD

//SOLUTION--
//@IN- a single string of multiple words
//@OUT-- a single string, where each word from @IN in reversed i cant use reverse method

//i am going to create an array where reversed words can be pushed to and used as my return
//next split the string on the spaces (the string is multiple space separated words)
//chain the split string (now an array) with a forEach method
//i will create a temporary variable abouve the loop to come it will be an empty string
//for each word(element of the split @IN string array) i want to make a loop counting down from the length of the word to 0
//each iteration of that loop i will add the word[i] to the temporary variable(this is the reversing)
// when the loop is terminated push the contents of the temporary storage variable to the empty array i created in the beginning
// when all words have been reversed and stored in the array the foreach block is terminated and all i have to do is return the array joined with spaces inbetween each element

const reverseWords = (str) => {
  let wordsReversed = [];
  str.split(" ").forEach((word) => {
    let reversedWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    wordsReversed.push(reversedWord);
  });
  return wordsReversed.join(" ");
};

//TESTCASES--

console.log(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
