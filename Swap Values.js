//URL-- https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/javascript

//INSTRUCTIONS--
//I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.
//Can you figure out what's wrong here?

// GIVEN ARRAY
function swapValues(arguments) {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

//SOLUTION--

function swapValues() {
    var args = Array.prototype.slice.call(arguments)[0];
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

//TESTCASES--

var arr = [1, 2]
swapValues(arr);
arr[0], 2, "Failed swapping numbers"
arr[1], 1, "Failed swapping numbers"