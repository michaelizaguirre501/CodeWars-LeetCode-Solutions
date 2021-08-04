//URL--https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

//INSTRUCTIONS--
// In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

//SOLUTION--
//The function accepts an integer and returns an integer
// i want to split the number but in order to do that i have to make it a string,
//with the array created(array of numbers AS strings) i will map thru, reconvert it to a number and square each digit
// when i join it will be a string again, so i will add an unary operator to the beginning of the function to get my return as a number

function squareDigits(num) {
  return +String(num)
    .split("")
    .map((x) => (+x) ** 2)
    .join("");
}

//TESTCASES--
console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);
