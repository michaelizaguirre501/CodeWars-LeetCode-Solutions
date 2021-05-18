//URL--https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

//INSTRUCTIONS--
//JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

//SOLUTION--
// i will make a new array which filters thru the first array and adds all values that %2 == 0
// this will create an empty array if no elements pass the filter
function getEvenNumbers(numbersArray) {
    const answer = numbersArray.filter(x => x % 2 == 0)
    return answer
}

const getEvenNumbers = (numbersArray) => numbersArray.filter(x => x % 2 == 0) //arrow function
//TESTCASES--
getEvenNumbers([1, 2, 3, 6, 8, 10])