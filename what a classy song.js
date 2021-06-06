//URL--https://www.codewars.com/kata/6089c7992df556001253ba7d/train/javascript

//INSTRUCTIONS--
// Your job is to create a class called Song.
// A new Song will take two parameters, title and artist.
// You will also have to create an instance method named howMany() (or how_many()).
// The method takes an array of people who have listened to the song that day. The output should be how many new listeners
// the song gained on that day out of all listeners. Names should be treated in a case-insensitve manner, i.e. "John" is the same as "john".
// Also if the same person listened to it more than once a day it should only count them once.

//SOLUTION--
//i will create a class constructor to create a new song Object it will have title, artist, and a unique listener total counter which will be a set to eliminate duplicates
//next i will complete a howMany method it will take in arrays of names in differing capitilizations,
//everytime it gets a new array, i want it to store the size of this.listener SET before the function fires,
//then i want to map over the new array add it to the listener set in lowercase so i have uniform capitilization
//finally i will return the new size of the set - the oldSize that i stored earlier

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listener = new Set();
  }
  howMany(people) {
    let oldSize = this.listener.size;
    people.map((p) => this.listener.add(p.toLowerCase()));
    return this.listener.size - oldSize;
  }
}

//TESTCASES--
mountMoose = new Song("Mount Moose", "The Snazzy Moose");
mountMoose.howMany(["John", "Fred", "Bob", "Carl", "RyAn"]);
mountMoose.howMany(["JoHn", "Luke", "AmAndA"]);
mountMoose.howMany(["Amanda", "CalEb", "CarL", "Furgus"]);

console.log(mountMoose.listener.size);
