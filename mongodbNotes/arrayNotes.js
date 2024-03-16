// Array Methods:
// 1. Iteration Methods:

// forEach(): Calls a function for each element in the array.
// map(): Creates a new array by calling a function on each element.
// filter(): Creates a new array with elements that pass a test.
// reduce(): Reduces the array to a single value (accumulator).
// some(): Checks if at least one element passes a test.
// every(): Checks if all elements pass a test.

// 2. Manipulation Methods:

// push(): Adds one or more elements to the end of an array.
// pop(): Removes the last element from an array.
// shift(): Removes the first element from an array.
// unshift(): Adds one or more elements to the beginning of an array.
// splice(): Adds or removes elements from an array.
// slice(): Extracts a portion of an array into a new array.
// concat(): Combines two or more arrays.

// 3. Searching and Sorting:

// indexOf(): Returns the index of the first occurrence of an element.
// lastIndexOf(): Returns the index of the last occurrence of an element.
// find(): Returns the first element that satisfies a condition.
// findIndex(): Returns the index of the first element that satisfies a condition.
// sort(): Sorts the elements of an array in place.
// reverse(): Reverses the order of the elements in an array.

// 4. Iteration and Conversion:

// entries(): Returns an iterable of key/value pairs.
// keys(): Returns an iterable of keys in the array.
// values(): Returns an iterable of values in the array.
// from(): Creates a new Array instance from an array-like or iterable object.


// Loops:
// For Loop:
for (let i = 0; i < array.length; i++) {
    // Code block to be executed
}
// For...in Loop (for Objects):
for (let key in object) {
    if (object.hasOwnProperty(key)) {
      // Code block to be executed
    }
}
// For...of Loop (for Iterables like Arrays):
for (let element of array) {
    // Code block to be executed
}
// forEach() Loop (for Arrays):
array.forEach(function(element, index) {
    // Code block to be executed
});
// Map() Loop (for Arrays):
const newArray = array.map(function(element, index) {
    return // Transformation of each element
});
// While Loop:
while (condition) {
    // Code block to be executed
}
// Do...While Loop:
do {
    // Code block to be executed
} while (condition);

// Advanced Iteration with Generators:
// Generator Function with for...of Loop:
function* generatorFunction() {
    yield 'a';
    yield 'b';
    yield 'c';
}
  
for (let value of generatorFunction()) {
    console.log(value);
}

// Async Generator Function with for await...of Loop:
async function* asyncGeneratorFunction() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
  
(async () => {
    for await (let value of asyncGeneratorFunction()) {
        console.log(value);
    }
})();
  
// ombine array
// Using the Spread Operator:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Using the concat() Method:
// The concat() method is specifically designed to concatenate arrays. It does not mutate the original arrays; instead, it returns a new array:
const arr101 = [1, 2, 3];
const arr201 = [4, 5, 6];

const combined2 = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Using the push() Method (Mutating Original Array):
const arr111 = [1, 2, 3];
const arr211 = [4, 5, 6];

arr1.push(...arr2);
console.log(arr1); // [1, 2, 3, 4, 5, 6]

  
  
  