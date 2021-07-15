//URL--https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

//INSTRUCTIONS--
//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//SOLUTION--
//I am taking in an array of numbers always 10 numbers always whole numbers always >0
//I am returning a string in the format of '(xxx) xxx-xxxx'
//the simplest way i can do this is using bracket notation, i know the amount of elements is always 10 as per the instructions
//using [0]-[9] i can make a template literal that will have the correct format
const createPhoneNumber = (numbers) =>
  `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

//if i wanted to save characters i would make the numbers variable n instead

//TESTCASES--
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
