//URL--https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript

//INSTRUCTIONS--
//You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
//Your task is to return:
//true if at least one Ruby developer has signed up; or
//false if there will be no Ruby developers.

//SOLUTION--
//i am taking in an array of objects
//as per the instructions all objects will have a language key
//if the value of any of those keys is 'Ruby' i am to return true
//i am going to create a counter variable starting at 0
//next if i loop thru the array and add 1 to the counter everytime ruby is the language
//if the counter is greater than 0 then return true else false

function isRubyComing(list) {
  let count = 0;
  list.forEach((x) => (x.language === "Ruby" ? count++ : ""));
  return count > 0 ? true : false;
}

//TESTCASES--
var list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

var list2 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
];

console.log(isRubyComing(list1));
console.log(isRubyComing(list2));
