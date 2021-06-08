//URL--https://www.codewars.com/kata/60908bc1d5811f0025474291/train/javascript

//INSTRUCTIONS--
//You are to write a function that takes an odd integer which is the difference between two consecutive perfect squares and find the squares
//num : Odd Integer 0<n<1000000
//Answer: String containing the bigger and smaller squares in one line like "Max-Min"

//SOLUTION--
//The easiest way to find the required numbers is to find the largest 2 numbers that make the given number and square them.
//to find the largest numbers i will divide by 2 all given numbers will be odd so inorder to eliminate the remainder i will round one time up and round on time down (eg. 9/2 === 4.5 so i will return 5(rounded up) and 4(rounded down) )
//finally with those 2 numbers in hand i will square them giving me 2 the required numbers all of the math will be done in a template literal giving me the proper expected output.

const findSquares = (num) => {
  return `${Math.ceil(num / 2) ** 2}-${Math.floor(num / 2) ** 2}`;
};

//TESTCASES--
findSquares(81);
findSquares(9);
findSquares(5);
