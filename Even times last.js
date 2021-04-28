//URL--https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript

//INSTRUCTIONS--
// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.
// Indices in sequence start from 0.
// If the sequence is empty, you should return 0.

//SOLUTION--
//i will create an accumulator variable that i will set to zero so i can add numbers onto
// using an if statement i will return 0 if the given array is empty if not i will move onto the main function
// next i will create a for loop so i can refer to the index of numbers as i
// if i % 2 (index number is even) i will add the element of numbers at that index to accumulator
// after that has run thru the array i will mutiply the final accumulator number by the last element in the array
// and retun that number 

function evenLast(numbers) {
    let accumulator = 0
    if (numbers.length === 0) {
        return 0
    } else {
        for (i = 0; i < numbers.length; i++) {
            if (i % 2 === 0) {
                accumulator += numbers[i]
            }
        }
    }
    return accumulator * numbers[numbers.length - 1]
}

//TESTCASES--
console.log(evenLast([2, 3, 4, 5])) //expected 30