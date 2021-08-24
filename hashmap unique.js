function unique(nums) {
  const obj = {};

  for (let num of nums) {
    obj[num] ? obj[num]++ : (obj[num] = 1);
  }

  return !Object.values(obj).every((x) => x == 1);
}

// const unique = (nums) => nums.length === [...new Set(nums)].length?false:true;

console.log(unique([1, 2, 3, 4, 5, 6, 7, 8]), false);
console.log(unique([1, 2, 3, 4, 5, 6, 7, 7]), true);
