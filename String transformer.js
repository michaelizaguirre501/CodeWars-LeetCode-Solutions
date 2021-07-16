//URL--codewars.com/kata/5878520d52628a092f0002d0/train/javascript/60ef76a51dad18004a91f83d

//INSTRUCTIONS--
// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

//SOLUTION--
//i am taking in a single string of multiple words, might have weird spacing that needs to be maintained.
//i am returning a single string of multiple words, all lowercase letters will now be capital and vice versa, maintaining any spacing
//i am going to split the given string into indiviual characters, which will allow me maintain the original spacing.
//next i will map over the array created from the split, if the character is === that charcter toUpperCase AND not equal to that character toLowerCase i will return that character to lowercase, else return it to uppercase. spaces will not be affected and be returned just as they went in
//i will join that array creating a single string in the original order with the original spacing
//i will split it again, this time on each space so when i reverse i wont reverse the characters in the words, just the order the words appear and this will keep the spacing
//reverse
//join on the spaces

const stringTransformer = (str) =>
  str
    .split("")
    .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
    .join("")
    .split(" ")
    .reverse()
    .join(" ");

//TESTCASES--
console.log(stringTransformer("Example string"));
console.log(stringTransformer("  bZG lJ   u   vHND   xHGJ dFLY"));
