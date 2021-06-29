//URL--https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

//INSTRUCTIONS--In this kata you get the start number and the end number of a region and should
//return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
//The result may contain fives.
//The start number will always be smaller than the end number. Both numbers can be also negative!

//SOLUTION--
//i will create an empty array variable
//i will create a loop from start til end
//next i will check using regex if each number when made to strings contains a 5 using .match if it doesnt i will push to the array i created
//finally i will return the length of my created array
function dontGiveMeFive(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    if (!i.toString().match(/5/)) {
      array.push(i);
    }
  }
  return array.length;
}

//TESTCASES--
dontGiveMeFive(1, 9);
dontGiveMeFive(4, 17);
