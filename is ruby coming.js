// URL -- 

//You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

// Notes:

// The input array will always be valid and formatted as in the example above.

// Solution--
//I will take in an array of objects
//I will declare a variable called ruby and set to to false, because I will
//Loop thru the given array and then use a conditional
//to check if any object has the language of ruby
//if it does i will change the value of my ruby vaiable to true
// finally i will return ruby 






function isRubyComing(list) {
    let ruby = false;
    list.forEach(x => {
      if (x.language === 'Ruby') {
        ruby = true
      }
    })
    return ruby
  
  }