//URL--https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript

//INSTRUCTIONS--Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

//SOLUTION-- I am going to create an array that contains ' ', '?', '!', and a-z ending with an empty string then reverse it because the instructions are asking for a reversed alphabet character placing, by doing this i 
//can plug in each value of the argument array as the index of my created string and they will line up correctly
function switcher(x) {
    let arr = [' ', '?', '!', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '']
    arr = arr.reverse()
    let newArr = [];
    x.forEach(y => {
        newArr.push(arr[y])
    })
    return newArr.join('')
}

//TESTCASES--
switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars';
switcher(['25', '7', '8', '4', '14', '23', '8', '25', '23', '29', '16', '16', '4']), 'btswmdsbd kkw';
switcher(['4', '24']), 'wc';