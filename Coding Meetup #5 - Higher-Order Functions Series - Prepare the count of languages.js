//URL-- https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript

//You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP):

// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:

// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.


//Solution--
//I will loop thru the original list (ARRAY OF OBJECTS) and push each objects language(KEY) 
//into a new array.
// Then i will create a function that i can call on each language(IN THE LANGUAGES ARRAY I MADE) that will add them as keys to object(i make this) and add one to its value each time it appears
//finally return object


function countLanguages(list) {
    let languages = [];
    let obj = {};
    
    list.forEach(x => languages.push(x.language));
    
    let countFunc = keys => {
      obj[keys] = ++obj[keys] || 1;
    }
  
    languages.forEach(countFunc)
    return obj
  }