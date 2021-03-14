//URL--

//What is the most asked question on CodeWars?

// Can someone explain /*...*/?

// You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.

// Let's hope you don't write a solution that makes people ask that question at you!

//Solution--

//I am going to check if the function parameter starts with "Can someone explain" using the str.startsWith() method
//returning true if the if statement is truthy
//and false for falsy

function detect(comment) {
    if(comment.startsWith("Can someone explain")){
    return true
    }else{
    return false
    }
  }

