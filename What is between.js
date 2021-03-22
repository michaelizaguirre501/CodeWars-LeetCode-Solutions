//URL--https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// Solution--
//Im going to declare an array, and then make a loop that starts at a and goes to b
//each loop pushing the number to the array



function between(a, b) {
    let arr=[]
    for(i=a;i<=b;i++){
    arr.push(i)
    }
    return arr
   }