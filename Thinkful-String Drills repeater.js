//URL-- https://www.codewars.com/kata/585a1a227cb58d8d740001c3/train/javascript

//Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example:
// Repeater.repeat("a", 5)

// should return
// "aaaaa"


//I will make an empty array and loop the given number of times each time pushing the given string to the array 
//then return the joined array

function repeater(string, n) {
    let arr = []
    for (let i = 0; i < n; i++) {
        arr.push(string)
    }
    return arr.join('')


}

//also you could just use repeat method

function repeater(string, n) {
    return string.repeat(n)
}