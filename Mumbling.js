//URL-- 
//This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


// Solution--
// I am intaking a string, the problem is asking me to repeat each character of that string the amount of times
// based on its indexed position in the string with the first character in uppercase and the rest in lower case
// i will do this in three blocks 
// the first block will handle the array declarations and splitting the string
// i will split the string into an array all in lowercase, and declare 2 empty arrays for the next methods
// i am doing this so i can clearly see each step along the way which will make debugging easy for me
// the second block i will iterate thru my array and push each element into array 2 repeated based on its indexed position
// now i have arr2 holding all values properly repeated, however in all lowercase characters
// the third block will handle uppercasing the first character
// i will do that by iterating thru arr2 and pushing [0] to uppercase + the rest of that string(which already is lowercased)
// finally i will return the joined array with - inbetween because that is the formatting required


function accum(s) {
    const arr = s.toLowerCase().split('') //declariations and splitting
    let arr2 = []
    const finalArr = [];

    arr.forEach((x, i) => {
        arr2.push(x.repeat(i + 1)) //repeating
    })

    arr2.forEach(x => {
        finalArr.push(x[0].toUpperCase() + x.substring(1)) //case formatting
    })
    return (finalArr.join('-')) // added '-' in between each element

}

// this can be done with less lines using maps
//but i prefer it to be in seperate blocks in this case so each step is clearly defined