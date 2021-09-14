//this is an ascending merge sort

//to merge sort we divide the original data structure recursively until we are left with multiple single element arrays
//we then pair them i use left and right so i can picture them mentally
// we compare the first element of the left array to the first element of the right array pushing the smaller value to a result array we initialized empty at the start of the merging function
// we do that until all divided elements are joined into one array

// start off by defining a merge function(this will be called in the mergesort function later)
//then divide using splice until we are left with single element arrays (array.length < 2)
//then combine using the merge function

let theOne = [9, 27, 38, 3, 43, 10, 82]; //i just watched the matrix, chill
//sort til => [3,9,10,27,38,43,82]

function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift());
  }

  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const half = array.length / 2;

  if (array.length < 2) {
    return array;
  }
  console.log("splitting is happening here");
  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

console.log(mergeSort(theOne));

// O(n*logn)
