//URL--https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript

//INSTRUCTIONS--
//Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!
//In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

//SOLUTION--
// i need to return the index of the first instance of 'O' but if no 'O' is present then retrun non available
function meeting(x) {
    if (x.indexOf('O') >= 0) {
        return x.indexOf('O')
    } else {
        return "None available!"
    }
}

//TESTCASES--
meeting(['X', 'O', 'X'])
meeting(['O', 'X', 'X', 'X', 'X'])
meeting(['X', 'X', 'X', 'X', 'X'])