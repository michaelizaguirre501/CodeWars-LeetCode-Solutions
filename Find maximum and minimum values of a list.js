//URL--https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

// Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as
// input and outputs, respectively, the largest and lowest number in that array/vector.

//Solution-- Sort list in numerical order lowest to highest return last element for max, first element for min

var min = function(list){
    list = list.sort((a, b) => a - b)
    return list[0];
} 

var max = function(list){
    list = list.sort((a, b) => a - b)
    return list[list.length-1];
    
}
