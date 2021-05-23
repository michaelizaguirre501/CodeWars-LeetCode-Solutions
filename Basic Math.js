//URL--https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript

//INSTRUCTIONS--In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
//Note: the input will not be empty.
//Examples
//"1plus2plus3plus4"  --> "10"
//"1plus2plus3minus4" -->  "2"

//SOLUTION-- the given string will have no spaces to split upon, it will only evaluate addition and subtraction
// i will start by replacing all occurences of the substring 'plus' or 'minus' with the corresponding mathematical operator
// using eval on the resuling replaced string i will be returned a number, the expected result is a string however so i will need to turn it into a string when returning
function calculate(str) {
  str = str.replace(/plus/g, "+").replace(/minus/g, "-");

  return eval(str).toString();
}

//TESTCASES--
calculate("1plus2plus3plus4");
calculate("1minus2minus3minus4");
calculate("1plus2plus3minus4");
