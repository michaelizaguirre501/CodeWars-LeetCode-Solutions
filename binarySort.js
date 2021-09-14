const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];
// find index of 8

function divideAndConq(array, target) {
  let lower = 0;
  let upper = array.length - 1;

  while (lower <= upper) {
    console.log("attempt");
    const middle = Math.floor((upper + lower) / 2);

    if (array[middle] === target) {
      return middle;
    }

    if (target < array[middle]) {
      upper = middle - 1;
    } else {
      lower = middle + 1;
    }
  }
  return -1;
}

console.log(divideAndConq(arr, 33));
