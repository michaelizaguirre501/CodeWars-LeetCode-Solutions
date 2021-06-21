//URL--https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript

//INSTRUCTIONS--
//You will be given an array of objects (associative arrays in PHP) representing data about developers
//who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.
//Your task is to return one of the following strings:
//< firstName here >, < country here > of the first Python developer who has signed up; or
//There will be no Python developers if no Python developer has signed up.

//SOLUTION--
//i will create a result array
//I will loop thru the given array and push all objects where language is === python to a results array i create
//this is not the best solution if the array is very long, but since these given arrays are small and already ordered this is how i will handle
//next i will check if result array length is 0 in which case i will return there will be no python developers as per the instructions
// else i will return the firstName property and country of the 0 index of my result array as asked for in a string

function getFirstPython(list) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].language === "Python") {
      result.push(list[i]);
    }
  }
  if (result.length === 0) {
    return "There will be no Python developers";
  } else {
    return `${result[0].firstName}, ${result[0].country}`;
  }
}

//TESTCASES--

var list1 = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

var list2 = [
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 29,
    language: "JavaScript",
  },
  {
    firstName: "Amar",
    lastName: "V.",
    country: "Bosnia and Herzegovina",
    continent: "Europe",
    age: 32,
    language: "Ruby",
  },
];

getFirstPython(list1);
getFirstPython(list2);
