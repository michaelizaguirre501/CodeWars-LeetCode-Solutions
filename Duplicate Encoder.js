//URL--https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

//INSTRUCTIONS--
//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string.
//Ignore capitalization when determining if a character is a duplicate.

//SOLUTION--
//taking in a string it can be all sorts of characters
//returning a string of '(' or ')' opening parens if the word is a unique character and closing if it is a repeating character
//i am going to convert the given string to lowercase because we are told to ignore casing when judging for duplicates.
//then i will split it at every character for the glorious array methods
//i am going to map over this new split array ive created. using a ternary i will test each element to see if the index of the element is the last index and replacing with the proper parenthesis
//finally join that as the return

const duplicateEncode = (word) =>
  word
    .toLowerCase()
    .split("")
    .map((x, i, a) => (a.indexOf(x) === a.lastIndexOf(x) ? "(" : ")"))
    .join("");

//TESTCASES--
console.log(duplicateEncode("din"), "(((");
console.log(duplicateEncode("recede"), "()()()");
console.log(duplicateEncode("(( @"), "))((");
