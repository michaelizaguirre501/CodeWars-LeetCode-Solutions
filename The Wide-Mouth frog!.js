//URL--https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript

//INSTRUCTIONS--The wide mouth frog is particularly interested in the eating habits of other creatures.
//He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!
//When he meets the alligator, it then makes a tiny mouth.
//Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.

//SOLUTION--
//Using a ternary I will check if the argument when passed to lowercase is alligator and return small if so and wide if not
const mouthSize = (animal) => animal.toLowerCase() === 'alligator' ? 'small' : 'wide';


//TESTCASES--
mouthSize("toucan"), "wide"
mouthSize("ant bear"), "wide"
mouthSize("alligator"), "small"