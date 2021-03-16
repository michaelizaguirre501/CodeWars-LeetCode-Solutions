//URL-- https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

//Write a function called repeat_string which repeats the given string str exactly count times.

//Solution--

// function takes in a number and a string,
//the string must be returned with number amount of characters so (6,'o') would return 'oooooo'
// i will make a loop that counts up to the given number and every loop concatentate the string into a new
// variable i create at the start of the function 


function repeatStr(n, s) {
    let str = s;
    for (let i = 0; i < n - 1; i++) {
      str += s
    }
  
    return str;
  }