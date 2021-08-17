//INSTRUCTIONS--
// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

//SOLUTION--
//@IN- string(ransom note), string(codex)
//@OUT- boolean if the words from ransom note can be cut out of the codex
//cut means that there cant be more occurances of a word in note than there are in codex

//i will create a hashmap with the words(split) from codex and values of the amount of times they appear in the original codex
//create a variable set to the boolean of true
// loop thru the ransomnote string word by word (split ' ') if you find the word in the hash map decrement it by 1 then check if the hashmap value is 0 or less if it is auto fail
//if the word is not in the hasmap auto fail
//if neither of those are the case it passes move onto next word
//if nothing above has been set to false then your variable will still be true

const magazine =
  " big Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

function ransomNote(str, codex) {
  const objCodex = {};
  for (let word of codex.split(" ")) {
    if (!objCodex[word]) {
      objCodex[word] = 1;
    } else {
      objCodex[word]++;
    }
  }
  let possible = true;

  str.split(" ").forEach((word) => {
    if (objCodex[word]) {
      objCodex[word]--;
      if (objCodex[word] < 0) {
        possible = false;
      }
    } else possible = false;
  });
  return possible;
}

//TESTCASES--
console.log(ransomNote(" sit ad big est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);
