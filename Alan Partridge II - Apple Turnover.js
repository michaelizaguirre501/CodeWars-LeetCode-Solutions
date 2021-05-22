//URL--

//INSTRUCTIONS--
// Alan is known for referring to the temperature of the apple turnover as 'Hotter than the sun!'.
// According to space.com the temperature of the sun's corona is 2,000,000 degrees C, but we will ignore the science for now.
// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than the sun!!',
// else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

//SOLUTION--
//the parameter checked against will always be a valid integer, however sometimes it will be a string
//must convert it first to number to be sure
//conditional if x**2 > 1000 return the silly english shenanigans strings given in the instructions
function apple(x) {
  x = Number(x);
  return x ** 2 > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

//TESTCASES--
apple("50");
apple(4);
