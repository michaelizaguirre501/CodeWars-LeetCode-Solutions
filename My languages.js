//URL--https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript

//INSTRUCTIONS--
// You are given a dictionary/hash/object containing some languages and your test results in the given languages.
// Return the list of languages where your test score is at least 60, in descending order of the results.
// Note: the scores will always be unique (so no duplicate values)

//SOLUTION--
//I am taking in an object key==language(string) value==score(integer)
//i am returning all keys where the values are 60 or greater in descending order
//i am going to pass results into Object.entries() which returns an array of subarrays the sub arrays have this structure[key,value]
// on the array of sub arrays i will call filter and filter any results where the 1 index is less than 60 (value)
//i will then sort all the sub arrays again by th 1 index (value)
// and finally the return only wants the language(key) so i will map out the 1 index(value) and just retun the language

function myLanguages(results) {
  return Object.entries(results)
    .filter(([key, value]) => value >= 60)
    .sort((a, b) => b[1] - a[1])
    .map((x) => x[0]);
}

//LESS CODE
// function myLanguages(results) {
//   return Object.keys(results)
//     .filter((r) => results[r] > 59)
//     .sort((a, b) => results[b] - results[a]);
// }

//TESTCASES--
console.log(
  myLanguages({
    Java: 10,
    Ruby: 80,
    Python: 65,
  }),
  ["Ruby", "Python"]
);
console.log(
  myLanguages({
    Hindi: 60,
    Greek: 71,
    Dutch: 93,
  }),
  ["Dutch", "Greek", "Hindi"]
);
console.log(
  myLanguages({
    "C++": 50,
    ASM: 10,
    Haskell: 20,
  }),
  []
);
