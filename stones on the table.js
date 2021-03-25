//URL-- https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a/train/javascript

//There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

// Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

// Examples:

// "RGBRGBRGGB"   => 1
// "RGGRGBBRGRR"  => 3
// "RRRRGGGGBBBB" => 9

//Solution--
//I will reassign given string to str.split so i can use filter on it
// i need to create a new array which filters the split string removing all adjacent duplicates
// then return the split array - the filtered array as the problem is asking how many elements were removed

function solve(stones) {
    stones = stones.split('');
     let filtered = stones.filter((x,y)=>stones[y-1]!==x);
        return stones.length - filtered.length
      }