/* Stacks! */

// functions: push, pop, peek, lengthS

var letters = []; //our stack
var word = "bob";
var rword = "";
//// put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}
//// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}
if (word === rword) {
  console.log(word + " is a palindrome");
} else {
  console.log(word + "is not a palindrome");
}

//create a stack

var Stack = function() {
  this.count = 0; //keeps track of how many elements are in the stack
  this.storage = {};
  //add a value at the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };
  //remove a value at the top of the stack
  this.pop = function() {
    if (this.storage[this.count] === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete result;
    return result;
  };
  this.size = function() {
    return this.count;
  };
  //return the value at the end of the stack without removing the value
  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();
myStack.push(5);
myStack.push(6);
myStack.push("Shimwa Ian");
console.log(myStack.peek());
console.log(myStack.pop());
myStack.push("Shima Tehillah");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.pop());
