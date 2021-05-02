//URL--https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

//INSTRUCTIONS--
//Simple, remove the spaces from the string, then return the resultant string.

//SOLUTION--
// i will split the string at every space then join that array
const noSpace = (x) => x.split(' ').join('')
//TESTCASES--

noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')
noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')
noSpace('8aaaaa dddd r     ')