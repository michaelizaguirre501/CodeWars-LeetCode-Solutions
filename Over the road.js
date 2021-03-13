//URL-- https://www.codewars.com/kata/5f0ed36164f2bc00283aed07

//Task
//You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:
//Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.
//Example
//Given your house number address and length of street n, give the house number on the opposite side of the street.


//Cheeky math Solution incase youre checking against a street with 500Billion house for some reason......  --

function overTheRoad(address, n){
    return (n*2+1)-address;
  }



  // My first solution which i think would be fine in a normal circumstance


function overTheRoad(address, n) {
  const totalHouses = n * 2;
  let evenArr = [];
  let oddArr = [];
  for (let i = 1; i <= totalHouses; i++) {
    if (i % 2 === 0) {
      evenArr.unshift(i)
    } else {
      oddArr.push(i)
    }

  }

  if (address % 2 === 0) {
    return oddArr[evenArr.indexOf(address)]
  } else {
    return evenArr[oddArr.indexOf(address)]
  }

}


