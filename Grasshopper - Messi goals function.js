//URL-- https://www.codewars.com/kata/55f73be6e12baaa5900000d4/train/javascript

//INSTRUCTIONS--

// Messi is a soccer player with goals in three leagues:
// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

//SOLUTION--
//Function takes three parameters that are numbers
//Since i know there will always be 3 parameters I can just return the sum of all params
//I could also create an array with all params and use reduce

// function goals (x, y, z) {
//     return x + y + z
//   }

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return [...arguments].reduce((a, b) => a + b, 0);
}

//TESTCASES--
goals(0, 0, 0); //, 0)
goals(43, 10, 5); //, 58)
