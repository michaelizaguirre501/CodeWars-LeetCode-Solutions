//URL--https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript/60f199c48145d8003b297f15

//INSTRUCTIONS--
//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//What if the string is empty? Then the result should be empty object literal, {}.

//SOLUTION--
//i am taking in a single string
//i am returning an object where the keys are the characters of the strings, and the values are the amounts of times the characters appear in the given string
//i will create an empty obj variable so if the string is empty i will get an empty obj return, and i can send the key values to if not empty string
//i will create a for of loop that loops thru the spread string (for(x of[...string]))
//if the object does not contain the letter as a key then the value of that letter in the object is 1 if it does then the value needs to be incremented by 1
// finally return the obj
function count(string) {
  const obj = {};
  for (var letter of [...string]) {
    !obj[letter] ? (obj[letter] = 1) : obj[letter]++;
  }
  return obj;
}

//TESTCASES--
console.log(count("aba"));
console.log(count(""));
