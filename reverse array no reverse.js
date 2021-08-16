//INSTRUCTIONS--
//reverse an array without using reverse

//SOLUTION--
function reverseArray(arr) {
  return arr.map((_, i, array) => array[array.length - 1 - i]);
}
//TESTCASES--

console.log(reverseArray(["a", "b", "c", "d", "e"]));
