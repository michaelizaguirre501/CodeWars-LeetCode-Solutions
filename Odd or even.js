//URL--https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

//INSTRUCTIONS--
// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

//SOLUTION--
// i will using if return 'even' if given array length is 0 if not i will move onto main function
// i will use reduce to get the sum of the array 
// using ternary statement i will return 'even' if that summed array % 2 === 0 or 'odd' if not 
function oddOrEven(array) {
    if (array.length === 0) {
        return 'even'
    } else {
        array = array.reduce((a, b) => a + b)
        return (array % 2 === 0 ? 'even' : 'odd')
    }
}



//TESTCASES--
Test.assertEquals(oddOrEven([0, -1, -5]), 'even')
Test.assertEquals(oddOrEven([0, -1, -3]), 'even')
Test.assertEquals(oddOrEven([-1023, 1, -2]), 'even')