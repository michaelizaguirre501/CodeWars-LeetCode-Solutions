//URL-- https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript


// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

// The list will never be empty and will only contain values that are greater than or equal to zero.

//Solution--

//iterate thru original array
//conditional logic if even square it
// if not return square root
// i think i should push all values to new array so i can reduce (a,b =>a+b)
//return new reduced array

const sumSquareEvenRootOdd = ns => {
    let mathed = [];
    ns.forEach(x => x % 2 == 0 ? mathed.push(x ** 2) : mathed.push(Math.sqrt(x)))
    mathed = mathed.reduce((a, b) => a + b)
    return Number(mathed.toFixed(2))
   }