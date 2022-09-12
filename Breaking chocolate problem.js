//URL--https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript

//INSTRUCTIONS--

// Your task is to split the chocolate bar of given dimension n x m into small squares.
// Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

//SOLUTION--
// because i have the test cases i can see that the answer is (argument 1 * argument 2)  - 1

function breakChocolate(n, m) {
  if (typeof n === "number" && typeof m === "number") {
    const answer = n * m - 1;
    if (answer > 0) {
      return answer;
    } else {
      return 0;
    }
  }
  return 0;
}

//cleaner answer
// var breakChocolate = function(n, m) {
//     return (n*m === 0) ? 0 : n * m - 1;
//    };

//TESTCASES--
breakChocolate(5, 5); // , 24)
breakChocolate(1, 1); //, 0)
