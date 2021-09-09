//URL--https://www.codewars.com/kata/55a9c0994cb7e284d500005e/train/javascript

//INSTRUCTIONS--
// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

//SOLUTION--
//I am going to initialize any new Queue as an empty array.
//enque method is just pushing an item
//dequeue is returning the value when calling shift on the array(this mutates the array thus changing the lengths)
//size just wants the arrays length

var Queue = function () {
  this._queue = []; //initialize as empty array
};

Queue.prototype.enqueue = function (item) {
  this._queue.push(item);
};

Queue.prototype.dequeue = function () {
  return this._queue.shift();
};

Queue.prototype.size = function () {
  return this._queue.length;
};

//TESTCASES--

var queue = new Queue();

// starts with length of 0
console.log(queue.size(), 0);

//"Calling 'enqueue' on the queue increases the size by 1."
queue.enqueue("I'm number one!");
console.log(queue.size(), 1);
