//URL--https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript/608867f44865f7004eac2cc6

//INSTRUCTIONS--
//We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
//So given a string "super", we should return a list of [2, 4]

//SOLUTION--
//i am taking in a string
//i am returning an array of the index of the vowels in the given string (vowels here are aeiouy) also they want index to start from 1 not 0
//i am going to create a answer empty array variable and a vowel array so i can check with includes
//i will split the given word into individual characters then using foreach i will loop over the array i just created and check if the letter is in the vowels array i created above(includes)
//if yes then push that index plus 1(not zero index for the result) to answer array
//i will use lowercase in my vowel array so when i loop i will check if that element toLowerCase is in the vowel array this way if the input has uppercase it will still work

function vowelIndices(word) {
  const answer = [];
  const vowels = ["a", "e", "i", "o", "u", "y"];

  word.split("").forEach((x, i) => {
    if (vowels.includes(x.toLowerCase())) {
      answer.push(i + 1);
    }
  });
  return answer;
}
//TESTCASES--

function vowelIndices(word) {
  const answer = [];
  const vowels = ["a", "e", "i", "o", "u", "y"];

  word.split("").forEach((x, i) => {
    if (vowels.includes(x.toLowerCase())) {
      answer.push(i + 1);
    }
  });
  return answer;
}
console.log(vowelIndices("mmm"), []);
console.log(vowelIndices("apple"), [1, 5]);
console.log(vowelIndices("super"), [2, 4]);
console.log(vowelIndices("orange"), [1, 3, 6]);
console.log(
  vowelIndices("supercalifragilisticexpialidocious"),
  [2, 4, 7, 9, 12, 14, 16, 19, 21, 24, 25, 27, 29, 31, 32, 33]
);
