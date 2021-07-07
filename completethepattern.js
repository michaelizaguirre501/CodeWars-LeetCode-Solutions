//URL--https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/javascript

//INSTRUCTIONS--
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.

//SOLUTION--
//params i am intaking a number the number can be 0 or neg(use < logic first)
//return i am returning a string that string should be the given number repeated that numbers times, also all numbers leading to it repeated their own nummber of times in one string, with \n inbetween them
//psuedo first i will create an empty answer array , next i will check if the given number is less than 0 if so return empty string as per the instructions
//next  i will create a for loop that counts from 1 to n and on each loop i will push string(i).repeat(i)
//now i will have an array that has the numbers repeated correctly, if i join it with \n then thats my return value

function pattern(n) {
  let answer = [];
  if (n < 1) {
    return "";
  } else {
    for (let i = 1; i <= n; i++) {
      answer.push(String(i).repeat(i));
    }
  }
  return answer.join("\n");
}

//TESTCASES--
pattern(1);
pattern(2);
pattern(5);
