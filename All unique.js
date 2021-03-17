// URL-- https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript/60525320dd584e0030df7519

// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.


//Solution--
//i will split the string into an array so i can use the sort method on it
//i will sort the array and then make a loop to check if any element in the array is === to the one after it

function hasUniqueChars(str) {
    let arr = str.split('')
    arr.sort();
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        return false
      }
    }
    return true
  }
  