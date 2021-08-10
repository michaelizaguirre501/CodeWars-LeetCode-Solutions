// reverse string no reverse method

//First method is very brute forcey i am mutating the input, and creating a new variable space complexity is higher than needs to be time complexity is linear(every new character from the string makes another iteration)
//I loop thru the string that i take in from the length -1 (last character) until 0(first character)
//each loop i add the last character to the answer variable
//

function reverseStr(str) {
  let answer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    answer += str[i];
  }
  return answer;
}
console.log("---------Brute-----------");
console.log(reverseStr("Hello"));
console.log(reverseStr("If you don't know"));
console.log(reverseStr("Now you Know"));
console.log(reverseStr("The reverse method would be much easier"));

//less bruteforcey
//no new variable space complexity is lower, time complexity is still linear because there is no delimiter in split and reduce's call back is constant
//I split the string and then call reduce on it adding the next element to the accumulator resulting in a reversed string

const reverseReduce = (str) => str.split("").reduce((a, b) => b + a, "");
console.log("-------reduce--------");
console.log(reverseReduce("Hello"));
console.log(reverseReduce("If you don't know"));
console.log(reverseReduce("Now you Know"));
console.log(reverseReduce("The reverse method would be much easier"));
