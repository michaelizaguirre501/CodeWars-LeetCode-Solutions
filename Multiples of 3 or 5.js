//URL--https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript/60eb37aa79b34e0007d58aad

//INSTRUCTIONS--
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//SOLUTION--
//im going to create an answer counter variable starting at 0,
//then i will create a for loop that counts up to the number passed into the variable,
//inside the loop i will add a conditional that adds the counter variable(i) to the answer variable i have created earlier if i%3 or 1%5 === 0.
//finally i will return the answer varible.
function solution(number) {
  let answer = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      answer += i;
    }
  }
  return answer;
}

//TESTCASES--
solution(10);
