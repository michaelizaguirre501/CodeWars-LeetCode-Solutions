//INSTRUCTIONS--

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//SOLUTION--

function stocks(arr) {
  let lowest = [...arr].sort((a, b) => b - a)[0];
  let profit = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < lowest) {
      lowest = arr[i];
    } else {
      profit = arr[i] - lowest;
    }
  }
  return profit;
}

//TESTCASES--
console.log(stocks([7, 1, 5, 3, 6, 4]), 5);
console.log(stocks([7, 6, 4, 3, 1]), 0);
