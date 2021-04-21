//URL--https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript

//INSTRUCTIONS--
//You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from/to the array.

//SOLUTION--
//I will sort the given array which will alphabetize them
//then I will split the first element of the sorted given array
//then i will map an answer array which will add '***' to the end of each character of the split array
// finally i will return the answer arry minus the last 3 *** characters because that is the required format 
function twoSort(s) {
    s.sort();
    let answer = s[0].split('');
    answer = answer.map(x => x + '***').join('')
    return (answer.substring(0, answer.length - 3))

}



//TESTCASES--
console.log(
    twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]),
    twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])
)