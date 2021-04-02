//URL-- https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers

//Solution--
//I will create a counter to keep track of times the elements in the given array are over the given limit parameter
//i will loop thru the array and add 1 to the counter variable everytime the number is higher than the limit
//if my counter is zero i will return true because no number in the given array was greater than the limit
// if the counter has a value higher than 0 then a number in the array was greater than the limit so i will return false

function smallEnough(a, limit) {
    let counter = 0
    a.forEach((x, i) => {
        if (x > limit) {
            counter += 1
        }
    })
    if (counter !== 0) {
        return false
    } else {
        return true
    }
}


//one liner
const smallEnough = (a, limit) => Math.max(...a) <= limit

//because i am being asked if any number in the array is greater than the limit
//i can just check if the largest number in the array is less than or equal
//to the limit 