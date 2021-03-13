//URL-- https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.
// The size will always be positive and will only use whole numbers.

// SOLUTION--

// I am going to make an array ['1'] so my result always begins with  1
// then i will make a for loop that counts up to the parameter starting at 0  
  //the for loop under counter will check for i % 2 === 0 then push '0' to reult array if not it will push '1'
  // i will then join the array to produce the string required by the problem

  //could probably start off with a string and just concat the numbers onto the end but i am practicing array methods


  
  function stringy(size) {
 let result = ['1']
 for (let i=0; i < size; i++){
  if(i%2==0){
  result.push('0')
  }else{
  result.push('1')
  }
 }
  result.pop();
  return result.join('')
}



