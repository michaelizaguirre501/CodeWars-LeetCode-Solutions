//URL-- https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

//Instructions--
//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".


//Solution--
// I will create a template literal that plugs is the given parameter to the string
// I will also make it a arrow function because i need practice in that.

const greet = (name) => `Hello, ${name} how are you doing today?`;

//TESTCASES--
greet("Ryan");
greet("Shingles");