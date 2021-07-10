//URL--https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

//INSTRUCTIONS--
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.
//Essentially, rearrange the digits to create the highest possible number.

//SOLUTION--
//I am going to take in a number and return a number, but in order to spread it i need to type cast it as a string.
//once its in an array i can sort it in decsending order and the join it back to a string, finally since i am asked to return a number
//i will need to change the type of the string to a number.

function descendingOrder(n) {
  return +[...String(n)].sort((a, b) => b - a).join("");
}

//TESTCASES--
descendingOrder(123456789);
descendingOrder(1238752);
descendingOrder(1111);
descendingOrder(0);
