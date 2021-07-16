//URL--https://www.codewars.com/kata/582887f7d04efdaae3000090/train/javascript

//INSTRUCTIONS--
//You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order
//as they appeared in the original input array.

//SOLUTION--
//I will be given an array of objects describing developers all objects will be formatted the same, including an age key with number values
//i will return an array of the object(filter) with the highest age value(sort), if multiple have the same highest age value i will return all in the ORIGINAL order(create a copy)
//i am going to create  acopy using the spread operator, then sort that copy by age values(b.age-a.age), i will have an array where [0] is the highest age value
//i will then filter over my copied array and return all objects that that have the age value that is the same as my sorted copy at index 0

function findSenior(list) {
  const newList = [...list].sort((a, b) => b.age - a.age);
  return list.filter((x) => x.age === newList[0].age);
}

//TESTCASES--
var list3 = [
  {
    firstName: "Alexander",
    lastName: "F.",
    country: "Russia",
    continent: "Europe",
    age: 89,
    language: "Java",
  },
  {
    firstName: "Fatima",
    lastName: "K.",
    country: "Saudi Arabia",
    continent: "Asia",
    age: 21,
    language: "Clojure",
  },
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Nikola",
    lastName: "H.",
    country: "Serbia",
    continent: "Europe",
    age: 29,
    language: "Python",
  },
  {
    firstName: "Jakub",
    lastName: "I.",
    country: "Slovakia",
    continent: "Europe",
    age: 28,
    language: "Java",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 89,
    language: "JavaScript",
  },
  {
    firstName: "Luka",
    lastName: "J.",
    country: "Slovenia",
    continent: "Europe",
    age: 29,
    language: "Clojure",
  },
  {
    firstName: "Mariam",
    lastName: "B.",
    country: "Egypt",
    continent: "Africa",
    age: 89,
    language: "Python",
  },
];

console.log(findSenior(list3));
