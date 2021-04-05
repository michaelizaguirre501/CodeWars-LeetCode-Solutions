//URL-- https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/javascript

//The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
// All inputs will be integers. Please return an integer. Round down.

//I will divide the discount parameter by 100 so i get a percentage,
//then the percentage times the normal price of the bottle will be the discounted price,
//if i divide the hol parameter(price of holiday) by the discounted price i will get the amount 
//i am looking for, finally i will wrap that all in a math.floor because it says round down

function dutyFree(normPrice, discount, hol) {
    discount = discount / 100;
    return (Math.floor(hol / (discount * normPrice)))

}