//URL--https://www.codewars.com/kata/59bd84b8a0640e7c49002398/train/javascript

//INSTRUCTIONS--
//Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle,
//find area of the triangle, one space will be equal to one length unit. 
//The smallest triangle will have one length unit.

//SOLUTION--
//the are of a triangle is base * height / 2  
//the measurements of the triangles given is the spce between the '.' that you are given
//im going to create an array called format which removes the \n 
//then i will calculate the height and base and return the formula  

function tArea(tStr) {
    let format = tStr.split('\n');
    format.shift(), format.pop();
    let base = (format[format.length - 1].split('.').join('').length)
    let height = (format.length - 1)
    return (base * height) / 2

}

//TESTCASES--
tArea('\n.\n. .\n')
tArea('\n.\n. .\n. . .\n')