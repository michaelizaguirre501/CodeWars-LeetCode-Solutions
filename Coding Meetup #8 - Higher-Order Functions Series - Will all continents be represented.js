//URL--https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript

//INSTRUCTIONS--
// You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return:
// true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
// false otherwise.

//SOLUTION--
//I am taking in an array of objects of developers, each object has a continent key value pair
//i am returning a boolean, if the given array of objects has at least one object(developer) from these 5 continents ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'] <---- it is pre-sorted
//i am going to map over the given array, and create a new array, of the continents from the given array, i will create a set out of that to remove duplicates, and sort it so it will be in the order of the array i will check against
//i will return the evaluation of testing the 2 arrays values for equivalency using every

function allContinents(list) {
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const listContinents = [...new Set(list.map((x) => x.continent))].sort();

  return continents.every((val, index) => val === listContinents[index]);
}

//TESTCASES--
var list1 = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
];

var list2 = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
];

console.log(allContinents(list1));
console.log(allContinents(list2));
