//URL--https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

//INSTRUCTIONS--
//In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
//You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

//SOLUTION--
function wave(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    if (copy[i] !== " ") {
      copy[i] = copy[i].toUpperCase();
      newArr.push(copy.join(""));
    }
  }
  return newArr;
}

//TESTCASES--

wave("codewars");
wave(" gap ");
wave("two words");
