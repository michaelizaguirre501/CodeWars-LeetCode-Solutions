//URL--https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

//INSTRUCTIONS-- You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
//Your task is to return the number of JavaScript developers coming from Europe.

//SOLUTION-- I will declare a counter variable and loop thru the given array each time the continent is Europe and the language is JavaScript i will add one to the counter
// since they are asking only for the number of js coders from  europe i will return the counter
function countDevelopers(list) {
    let counter = 0;
    list.forEach(x => {
        if (x.language === "JavaScript" && x.continent === 'Europe') {
            counter++
        }
    })
    return counter
}

//TESTCASES--

var list1 = [{
        firstName: 'Noah',
        lastName: 'M.',
        country: 'Switzerland',
        continent: 'Europe',
        age: 19,
        language: 'JavaScript'
    },
    {
        firstName: 'Maia',
        lastName: 'S.',
        country: 'Tahiti',
        continent: 'Oceania',
        age: 28,
        language: 'JavaScript'
    },
    {
        firstName: 'Shufen',
        lastName: 'L.',
        country: 'Taiwan',
        continent: 'Asia',
        age: 35,
        language: 'HTML'
    },
    {
        firstName: 'Sumayah',
        lastName: 'M.',
        country: 'Tajikistan',
        continent: 'Asia',
        age: 30,
        language: 'CSS'
    }
];

countDevelopers(list1)

var list2 = [{
        firstName: 'Oliver',
        lastName: 'Q.',
        country: 'Australia',
        continent: 'Oceania',
        age: 19,
        language: 'HTML'
    },
    {
        firstName: 'Lukas',
        lastName: 'R.',
        country: 'Austria',
        continent: 'Europe',
        age: 89,
        language: 'HTML'
    }
];

countDevelopers(list2)