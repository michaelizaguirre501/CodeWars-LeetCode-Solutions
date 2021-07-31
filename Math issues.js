//URL--https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript

//INSTRUCTIONS--
// Oh no, our Math object was "accidently" reset.
// Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments.
// So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

//SOLUTION--
//This one is complicated to explain in words i will do my best tho
//I am writing functions to perform math ceil math floor and math round without using them explicitly
//each function will start by seeing if the number passed in contains a decimal if not then just return the number

//ROUND-- i am going to convert the number to a string slice it from the decimal convert it back to a number and see it its greater than or equal to .5
//           yes- return the number converted to a string sliced from the beginning to the decimal plus 1
//           no- return the number converted to a string sliced from the beginning to the decimal

//FLOOR-- return the no case for round

//CEIL-- return the yes case for round

Math.round = function (number) {
  if (!String(number).includes(".")) {
    return number;
  } else if (+String(number).slice(String(number).indexOf(".")) >= 0.5) {
    return +String(number).slice(0, String(number).indexOf(".")) + 1;
  } else {
    return +String(number).slice(0, String(number).indexOf(".") + 1);
  }
};

Math.ceil = function (number) {
  if (!String(number).includes(".")) {
    return number;
  } else {
    return +String(number).slice(0, String(number).indexOf(".")) + 1;
  }
};

Math.floor = function (number) {
  if (!String(number).includes(".")) {
    return number;
  } else {
    return +String(number).slice(0, String(number).indexOf("."));
  }
};
//TESTCASES--
console.log(Math.round(0.4), 0, "Math.round(0.4)");

console.log(Math.ceil(0.4), 1, "Math.ceil(0.4)");
console.log(Math.ceil(0.5), 1, "Math.ceil(0.5)");

console.log(Math.floor(0.4), 0, "Math.floor(0.4)");
console.log(Math.floor(0.5), 0, "Math.floor(0.5)");
