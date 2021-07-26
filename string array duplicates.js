//URL--https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

//INSTRUCTIONS--
//In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
//Strings will be lowercase only, no spaces.

//SOLUTION--
//i am taking in an array of strings
//i must return an array of strings each string in the array must not contain consecutive duplicate letters
//i am going to map over my array each element in that array i will split then filter removing all elements that are the same consecutively
function dup(s) {
  return s.map((x) =>
    x
      .split("")
      .filter((ele, i, arr) => arr[i] !== arr[i + 1])
      .join("")
  );
}

//TESTCASES--
console.log(
  dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]),
  ["codewars", "picaniny", "hubububo"]
);
console.log(dup(["abracadabra", "allottee", "assessee"]), [
  "abracadabra",
  "alote",
  "asese",
]);
console.log(dup(["kelless", "keenness"]), ["keles", "kenes"]);
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]), [
  "Wolomolo",
  "flodoromonlighters",
  "chuchchi",
]);
console.log(dup(["adanac", "soonness", "toolless", "ppellee"]), [
  "adanac",
  "sones",
  "toles",
  "pele",
]);
console.log(dup(["callalloo", "feelless", "heelless"]), [
  "calalo",
  "feles",
  "heles",
]);
console.log(dup(["putteellinen", "keenness"]), ["putelinen", "kenes"]);
console.log(dup(["kelless", "voorraaddoosspullen", "achcha"]), [
  "keles",
  "voradospulen",
  "achcha",
]);
