//URL-- https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

//Given a string str, reverse it omitting all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str

// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

// Solution--
//I will replace all non letter characters with regex  
//Then return standard split reverse join reversal 
//I must remember to also replace '_' in my regex

function reverseLetter(str) {
    str = str.replace(/[0-9]|\W|_/g, '');
    return str.split('').reverse().join('')
  
  }