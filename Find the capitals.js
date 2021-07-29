//URL--https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript/6102e0dcc135de00192828bd

//INSTRUCTIONS--
//Write a function that takes a single string (word) as argument.
//The function must return an ordered list containing the indexes of all capital letters in the string.

//SOLUTION--
//I am going to create a answer variable with an empty array
//I will split the string to an array of letters (spread) then loop over it(forEach)
//if the element in the spread array is equal to itself capitilized then push the index of that element into the answer array
//and then return answer

function capitals(word) {
  let answer = [];
  [...word].forEach((x, i) => {
    if (x === x.toUpperCase()) {
      answer.push(i);
    }
  });
  return answer;
}

//TESTCASES--

capitals("CodEWaRs");
console.log(capitals("WoWoWWoWoWWoWoWWoWoWWoWoWWoWoWWoWoWWoWoW"));
