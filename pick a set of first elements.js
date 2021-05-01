//URL--https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript

//Instructions--
//Write a function to get the first elements of asequence. 
//Passing a parameter n (default=1) will return the first n elements of the sequence.
//If n == 0 return an empty sequence []

//Solution--
// i will check first if the n parameter has been given, if not i will return the first element of the given array
// next i will check if the vakue of n === 0 by checking if n +1 == 1 because a value of 0 produces is a falsey value if so i will return an empty array
//finally i will return a sliced array starting at 0 and ending at n

function first(arr, n) {
    let answer = []
    if (n == null) {
        return [arr[0]]
    } else if (n + 1 == 1) {
        return answer
    } else {
        return arr.slice(0, n)
    }
}


//Test Cases--
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr)
first(arr, 2)