//URL--https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript

//INSTRUCTIONS--
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?

//SOLUTION--
// I will map thru list and set the key of greeting in object to Hi < firstName here >, what do you like the most about < language here >? and returnt he new list
//using a template literal i will set the greeting to each objects first namea and language property dynamically 
function greetDevelopers(list) {
    list.map(x => x.greeting = `Hi ${x.firstName}, what do you like the most about ${x.language}?`)
    return (list)
}

//TESTCASES--
var list1 = [{
        firstName: 'Sofia',
        lastName: 'I.',
        country: 'Argentina',
        continent: 'Americas',
        age: 35,
        language: 'Java'
    },
    {
        firstName: 'Lukas',
        lastName: 'X.',
        country: 'Croatia',
        continent: 'Europe',
        age: 35,
        language: 'Python'
    },
    {
        firstName: 'Madison',
        lastName: 'U.',
        country: 'United States',
        continent: 'Americas',
        age: 32,
        language: 'Ruby'
    }
];

console.log(greetDevelopers(list1))