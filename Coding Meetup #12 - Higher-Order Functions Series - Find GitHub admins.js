//URL--https://www.codewars.com/kata/582dace555a1f4d859000058/train/javascript

//INSTRUCTIONS--
//You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
//write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:
//Notes:
// The original order should be preserved.
// If there are no GitHub admin developers in a given language then return an empty array [].
// The input array will always be valid and formatted as in the example above.
// The strings representing whether someone is a GitHub admin will always be formatted as 'yes' and 'no' (all lower-case).
// The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.

//SOLUTION--
//I will create an empty answer array where i will push objects that meet the required parameters
//next i will loop thru the array and if the objects value for the key of languge is equal to the lang parameter expected and the value of githubAdmin is yes then push the whole object into the answer array
//this will preserve the order as is expected by the katas instructions
// and finally return the array

function findAdmin(list, lang) {
    let answer = []
    list.forEach((x, i) => {
        if (list[i].language === lang && list[i].githubAdmin === 'yes') {
            answer.push(x)
        }
    })
    return answer
}

//TESTCASES--
var list1 = [{
        firstName: 'Harry',
        lastName: 'K.',
        country: 'Brazil',
        continent: 'Americas',
        age: 22,
        language: 'JavaScript',
        githubAdmin: 'yes'
    },
    {
        firstName: 'Kseniya',
        lastName: 'T.',
        country: 'Belarus',
        continent: 'Europe',
        age: 49,
        language: 'Ruby',
        githubAdmin: 'no'
    },
    {
        firstName: 'Jing',
        lastName: 'X.',
        country: 'China',
        continent: 'Asia',
        age: 34,
        language: 'JavaScript',
        githubAdmin: 'yes'
    },
    {
        firstName: 'Piotr',
        lastName: 'B.',
        country: 'Poland',
        continent: 'Europe',
        age: 128,
        language: 'JavaScript',
        githubAdmin: 'no'
    }
];

findAdmin(list1, 'JavaScript') //  answer = 
// [{
//     firstName: 'Harry',
//     lastName: 'K.',
//     country: 'Brazil',
//     continent: 'Americas',
//     age: 22,
//     language: 'JavaScript',
//     githubAdmin: 'yes'
// }, {
//     firstName: 'Jing',
//     lastName: 'X.',
//     country: 'China',
//     continent: 'Asia',
//     age: 34,
//     language: 'JavaScript',
//     githubAdmin: 'yes'
// }];
findAdmin(list1, 'Ruby') //answer = []
findAdmin(list1, 'Python') // answer = []