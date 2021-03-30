//URL-- https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript

//This Kata is intended as a small challenge for my students

// All Star Code Challenge #22

// Create a function hat takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

// For example:

// 3600 --> "1 hour(s) and 0 minute(s)"
// 3601 --> "1 hour(s) and 0 minute(s)"
// 3500 --> "0 hour(s) and 58 minute(s)"
// 23500 --> "89 hour(s) and 51 minute(s)"

//Solution--

// This function takes in the parameter seconds, so to get to minutes you must divide by 60, however if it goes over 60
// it is an hour so i will use a modulus operator, to return the remainder instead(stored as a variable i will call minutes), 
//I will then divide the original paramater (seconds) by 3600 (amount of seconds in an hour) in a variable called hours,
// finally i will return a template literal so the formatting is nice and easy
// could just one line it if u throw that algebra into the template literal instead of storing as variables



function toTime(seconds) {
    const minutes = Math.floor((seconds / 60) % 60);
    const hours = Math.floor(seconds / 3600);
    return (`${hours} hour(s) and ${minutes} minute(s)`)

}

// one liner
const toTime = (seconds) => `${Math.floor(seconds/3600)} hour(s) and ${Math.floor((seconds/60)%60)} minute(s)`;