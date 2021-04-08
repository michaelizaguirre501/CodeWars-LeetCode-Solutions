//URL-- Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1

// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'

//Solution--
//I will set up a table to replace the elements in the given x arrays with the points provided in the instructions 
//then i will get the sum of all points for the given array 
//I will then do some conditional logic based on the instruction table and return the proper value 

function paul(x) {
    const table = {
        'kata': 5,
        'Petes kata': 10,
        'life': 0,
        'eating': 1
    };

    const total = x.map(value => table[value]).reduce((a, b) => a + b, 0);
    return total < 40 ? 'Super happy!' : total < 70 ? 'Happy!' : total < 100 ? 'Sad!' : 'Miserable!'
}

// if (total < 40) {
//     return 'Super happy!'
// } else if (total >= 40 && total < 70) {
//     return 'Happy!'
// } else if (total >= 70 && total < 100) {
//     return 'Sad!'
// } else
//     return 'Miserable!'