//URL--https://www.codewars.com/kata/58287977ef8d4451f90001a0/train/javascript

//INSTRUCTIONS--
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return either:
// true if all developers in the list code in the same language; or
// false otherwise.

// Notes:
// The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will upper-case 'J' and 'S'
// The input array will always be valid and formatted as in the example above.

//SOLUTION--
// i will create a counter variable starting at 0 
//then i will loop thru the list array of objects
// if any .language in the list does not eaqual the the first objects .language then i will one to the counter
//returning true if counter still equals 0 and false if its more than 0


function isSameLanguage(list) {
    let answer = 0
    list.forEach((x, i) => {
        if (list[i].language != list[0].language) {
            answer++
        }
    })
    if (answer > 0) {
        return false
    } else {
        return true
    }
}




//TESTCASES--
var list1 = [{
        firstName: 'Daniel',
        lastName: 'J.',
        country: 'Aruba',
        continent: 'Americas',
        age: 42,
        language: 'JavaScript'
    },
    {
        firstName: 'Kseniya',
        lastName: 'T.',
        country: 'Belarus',
        continent: 'Europe',
        age: 22,
        language: 'JavaScript'
    },
    {
        firstName: 'Hanna',
        lastName: 'L.',
        country: 'Hungary',
        continent: 'Europe',
        age: 65,
        language: 'JavaScript'
    },
];

isSameLanguage(list1)