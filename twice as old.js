//URL-- https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

//Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//Solution-- 
// To find out how many years ago the father was two times as old as the son i will multiply the sons age by 2 and subtract
//that from the fathers age, if son is more that fathers age/2 then we need to calculate how long before the fater is 2 times the sons age
// our original formula does that, only it returns a negative number, so if reulting number is < 0
//then we will return result * -1 else just return the number

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let result = dadYearsOld - (sonYearsOld * 2);
    return (result < 0 ? result * -1 : result)
  }