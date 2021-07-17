//URL--https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

//INSTRUCTIONS--
// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!)
// and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only).
// It will never give you an empty array (that's not a walk, that's standing still!).

//SOLUTION--
//I am taking in an array of strings they are always 'n' 's' 'e' 'w' to represent the cardinal directions
//i am returning a boolean, true only if the length of the array is 10 and if you were to move in the direction that each element represents in order you would end up back where you started
//i am going to create a new array by mapping over the original array replacing 'n' with 1 and 's' with -1 'w' with 2 and 'e' with -2
//i am going to do that because a move north is 'canceled out' by a move south and same with east and west
//if you move north 3 times, to get back to where you started you have to move 3 times south same principal with east and west however a move east is not canceled by north or south so i will use 2 for horizonatal directions
//...
//now that i have the array how i would like to proceed i need to do a few steps
//if the length of the array is not 10 it automatically is false
//then if the array with the length of 10 THAT I CREATED witht he map earlier reduces to 0 it will return true
//other wise it will return false

function isValidWalk(walk) {
  let numbers = walk.map((x) => {
    if (x === "n") {
      return 1;
    } else if (x === "s") {
      return -1;
    } else if (x === "w") {
      return 2;
    } else if (x === "e") {
      return -2;
    }
  });

  if (walk.length != 10) {
    return false;
  } else if (numbers.reduce((a, b) => a + b) === 0) {
    return true;
  } else {
    return false;
  }
}

//TESTCASES--
console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return true"
);
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
  "should return false"
);
