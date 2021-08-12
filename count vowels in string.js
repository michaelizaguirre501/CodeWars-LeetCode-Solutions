//INSTRUCTIONS--
//count the vowels in a string

//SOLUTION--
//i will create an array of lowercased vowels and a counter variable at 0
//i will then create a for loop looping from 0 to string.length
//on each loop i will use an if statement to see if vowels includes str[i] if yes increment count

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

//TESTCASES--

console.log(countVowels("hello"), 2);
console.log(countVowels("how are you"), 5);
console.log(countVowels("javascript"), 3);
