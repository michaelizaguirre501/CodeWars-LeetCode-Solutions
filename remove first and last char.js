//URL --https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript/607729b9b60f1e003db4fd09

//Instructions

//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Solution--
//I will split the given string
// then shift and pop and return joined

function removeChar(str) {
    str = str.split('')
    str.shift()
    str.pop()
    return str.join('')


}