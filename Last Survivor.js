//URL--https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript/60a3d6d33e9071001536552f

//INSTRUCTIONS--
// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

//SOLUTION--
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.
// I will need to loop thru the give coordinates Array, for each element of the array i need to remove that indexed char of the string given to me,
// split splice and join concatenated with substring starting at that element +1

function lastSurvivor(letters, coords) {
  for (i = 0; i < coords.length; i++) {
    letters =
      letters.split("").splice(0, coords[i]).join("") +
      letters.substring(coords[i] + 1);
  }
  return letters;
}

//TESTCASES--

lastSurvivor("kbc", [0, 1]);
lastSurvivor("zbk", [2, 1]);
console.log(
  lastSurvivor(
    "foiflxtpicahhkqjswjuyhmypkrdbwnmwbrrvdycqespfvdviucjoyvskltqaqirtjqulprjjoaiagobpftywabqjdmiofpsr",
    [
      8, 59, 52, 93, 21, 40, 88, 85, 59, 10, 82, 18, 74, 59, 51, 47, 75, 49, 23,
      56, 1, 33, 39, 33, 34, 44, 25, 0, 51, 25, 36, 32, 57, 10, 57, 12, 51, 55,
      24, 55, 31, 49, 6, 15, 10, 48, 27, 29, 38, 30, 35, 42, 23, 32, 9, 39, 39,
      36, 8, 29, 2, 33, 14, 3, 13, 25, 9, 25, 18, 10, 1, 2, 20, 8, 2, 11, 5, 7,
      0, 10, 10, 8, 12, 3, 5, 1, 7, 7, 5, 1, 4, 0, 4, 0, 0, 1,
    ]
  )
);
