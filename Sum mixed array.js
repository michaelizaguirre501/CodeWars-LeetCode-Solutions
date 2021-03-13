//URL-- https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Solution--

// I need to change all elements in the array we are taking in as a parameter into numbers
//then reduce (=>a+b) and return the sum

function sumMix(x){ 
    let nums = x.map(Number)
    return nums.reduce((a,b)=>a+b)
    
    }
