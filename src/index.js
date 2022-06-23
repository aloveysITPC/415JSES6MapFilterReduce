// array of numbers

var numbers = [3, 56, 2, 48, 5];

function double(x) {
  return x * 2;
}
//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(double);

console.log(newNumbers);
// this is essentially a for each loop that does this
// var newNumbers[];

// function double(x){
//   newNumbers.push(x*2);
// }
// numbers.forEach(double);

// or even simpler
// var newNumbers = [];
// numbers.forEach(function (x){
//   newNumbers.push(x*2);
// }
// );

// simplfy the map function as the map function expects a functin - insert an anonymours function
//map returns an output which is an array (loops through and pushes to an arry)
const newNumber = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
const bigNumbers = numbers.filter(function (num) {
  return num > 10;
});

console.log(bigNumbers);
