//URL-- https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript

// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value.
// Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

//ORIGINAL FUNCTION TO BE FIXED--
// function findLongest(str) (
  
//     var spl = str.split(" ");
//     var longest = 0
    
//     for (var i = 0; i > spl.length; i+) (
//       if (spl(i).length > longest) {
//         longest = spl[i].length
//       )
//       }
//       return longest
//   )

//Function uses () to begin the expression, in the for loop to indicate index of spl and in the for loop expression 
// the incrementor only has 1 + symbol and it is checking that i (which is set as zero) is greater than spl.length

//My Solution-- 
 function findLongest(str) {
      
      var spl = str.split(" ");
      var longest = 0;
      
      for (var i = 0; i < spl.length; i++) {
        if (spl[i].length > longest) {
          longest = spl[i].length
        }
        }
        return longest
 }

 //Could be shortened further to 

 const findLongest = input => Math.max(...input.split(" ").map(i => i.length));
