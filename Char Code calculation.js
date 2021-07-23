//URL--https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript/604c45289b40dd000cbae74a

//INSTRUCTIONS--
// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':
// Then return the difference between the sum of the digits in total1 and total2:

//SOLUTION--
// i am given a single string of letters
// i am returning a number
// VARIABLE 1 there are a few steps to this problem first i want to split the original string then map over it and get the char code of each letter of the string, finally rejoin it so i have a string of all original letters replaced by their char code
// VARIABLE 2 i will then take variable 1 and replace all 7s with ones and store it here
// next i will reduce var 1 and var 2 individually to get the sum of the digits and subtract them from themselves

function calc(x) {
  let num1 = x
    .split("")
    .map((letter) => letter.charCodeAt())
    .join("");
  let num2 = num1.replace(/7/g, 1);
  return (
    [...num1].reduce((a, b) => Number(a) + Number(b), 0) -
    [...num2].reduce((a, b) => Number(a) + Number(b), 0)
  );
}

//TESTCASES--

console.log(calc("ABC"), 6);
console.log(calc("abcdef"), 6);
