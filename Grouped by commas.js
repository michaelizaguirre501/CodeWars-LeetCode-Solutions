//URL--https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript/60f9aa198b940b0006fd2841

//INSTRUCTIONS--
//Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

//SOLUTION--
// i am taking in a number
// i am returning a string where the numbers are in the format x,xxx,xxx (commas after every 3)
//toLocaleString() is a built in method that does exactly this (this can be called on a number)
//i also like regex for this one, i definitely had to look it up (this needs to be called on a string the number im intaking needs to be type casted)

const groupByCommas = (n) => n.toLocaleString();

// const groupByCommas = (n) =>
// n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

//TESTCASES--
console.log(groupByCommas(1), "1");
console.log(groupByCommas(10), "10");
console.log(groupByCommas(100), "100");
console.log(groupByCommas(1000), "1,000");
console.log(groupByCommas(10000), "10,000");
console.log(groupByCommas(100000), "100,000");
console.log(groupByCommas(1000000), "1,000,000");
console.log(groupByCommas(35235235), "35,235,235");
