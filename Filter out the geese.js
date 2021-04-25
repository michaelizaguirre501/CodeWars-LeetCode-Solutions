//URL--https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

//INSTRUCTIONS--
//Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
//The geese are any strings in the following array, which is pre-populated in your solution:

//SOLUTION--
// i will filter thru birds removing all instances where a geese is present 

function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(bird => geese.indexOf(bird) < 0);
};
//TESTCASES--

gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])

gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])