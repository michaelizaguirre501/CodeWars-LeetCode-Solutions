//URL--https://www.codewars.com/kata/606b43f4adea6e00425dff42/train/javascript

//INSTRUCTIONS--
//Write a function which maps a function over the lists in a list

//SOLUTION--
//i am going to be given an arrow function to be used as a callback in a map on an array of arrays which i am also given
//i am returning an array of arrays
//i am going to map over the array that i am given, inside of that map, i am going to use map again so i can call the function i am given on each element of the large array

const gridMap = (fn, a) => a.map((ele) => ele.map(fn));

//TESTCASES--
const numberGrid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [0, 2, 4],
];

console.log(gridMap((x) => x + 1, numberGrid));
gridMap((x) => x * 2, numberGrid);
gridMap((x) => x ** 2, numberGrid);
