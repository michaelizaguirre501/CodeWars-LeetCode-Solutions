//URL--https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript

//INSTRUCTIONS--
//Your task is to sum the differences between consecutive pairs in the array in descending order.
//If the array is empty or the array has only one element the result should be 0

//SOLUTION--
//i need to sort the array in descending order then break the array into pairs of 2 subtract them and then add beween them
function sumOfDifferences(arr) {
    if (arr.length <= 1) { //check if array is one elment or empty
        return 0
    } else { //actual function
        const answer = [];
        arr = arr.sort((a, b) => a - b).reverse() //sort array in descending order
        arr.forEach((x, i) => {
            answer.push(arr[i] - arr[i + 1]) //making new array with diferences between elements of original array
        })
        answer.pop() // last value of answer array is always NaN so imma just pop it off
        return (answer.reduce((a, b) => a + b)) // adding between the new array of differences
    }
}

//TESTCASES--

sumOfDifferences([1, 2, 10])
sumOfDifferences([-3, -2, -1])