//URL--https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript/60f83e5b2b23c0001943414d

//INSTRUCTIONS--
//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

//SOLUTION--
//i am taking in a string, it is one string, of numbers seperated by spaces
//i am returning the place in the original string where the number is different (odd or even) this will be a number
//I want to split the original string on spaces so i get an array of numbers and then map it to a new array where the values are type converted to numbers
//i will loop thru the array check for odd or even using modulous and push to an array named accordingly that i have created
//now i have 2 arrays with either odd or even values one array will always have a length of one because only one value from the orginal array since the order hasnt changed i can use that to my advantage
//i will use conditional logic to check the length of the arrays and use the array with the length of one
//my return will be the index of the odd or even value from my mapped array +1
function iqTest(numbers) {
  let odd = [];
  let even = [];
  const numArray = numbers.split(" ").map((x) => +x);
  numArray.forEach((x) => (x % 2 ? odd.push(x) : even.push(x)));

  if (odd.length === 1) {
    return numArray.indexOf(odd[0]) + 1;
  } else {
    return numArray.indexOf(even[0]) + 1;
  }
}

//TESTCASES--
console.log(iqTest("2 4 7 8 10"), 3);
console.log(iqTest("1 2 2"), 1);
console.log(iqTest("2 4 6 8 9 10"), 5);
