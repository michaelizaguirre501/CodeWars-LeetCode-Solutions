//URL--https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

//Instructions--

//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

//Solution--
//I will split the given string into an array of the indviidual letters('Sam Harris') => ["S", "a", "m", " ", "H", "a", "r", "r", "i", "s"]
//then i will define the index of the space between the two orginal words in the above example the empty space is at index 3
//i will create an array that contains the zero index and the space index +1 so i get the letter following the space
// send those to uppercase
// finally i will return the joined array


function abbrevName(name) {
    name = name.split('')
    let space = name.indexOf(' ')
    let arr1 = [name[0].toUpperCase(), name[space + 1].toUpperCase()]
    return (`${arr1[0]}.${arr1[1]}`)

}