// Object Functions:

// Object.keys():
// Returns an array of a given object's own enumerable property names.
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj); // ["a", "b", "c"]

// Object.values():
// Returns an array of a given object's own enumerable property values.
const obj1 = { a: 1, b: 2, c: 3 };
const values = Object.values(obj1); // [1, 2, 3]

// Object.entries():
// Returns an array of a given object's own enumerable property [key, value] pairs.
const obj2 = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj2); // [["a", 1], ["b", 2], ["c", 3]]

// Object.assign():
// Copies the values of all enumerable own properties from one or more source objects to a target object.
const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source); // { a: 1, b: 2, c: 3 }

// Object.create():
// Creates a new object with the specified prototype object and properties.
const objs = Object.create(null); // Creates an object with no prototype

// Object.freeze():
// Freezes an object: other code can't delete or modify any properties.
const obj3 = { prop: 123 };
Object.freeze(obj3);
obj.prop = 456; // Won't work in strict mode

// Object.seal():
// Seals an object: prevents new properties from being added and marks all existing properties as non-configurable.
const obj = { prop: 123 };
Object.seal(obj);
obj.prop = 456; // Works
obj.newProp = 789; // Won't work


// Loops:

// for Loop:
// Traditional loop with a counter.
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for...of Loop:
// Iterates over iterable objects like arrays, strings, maps, sets, etc.
const arr = [1, 2, 3];
for (const element of arr) {
  console.log(element);
}

// for...in Loop:
// Iterates over the enumerable properties of an object.
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}

// forEach():
// Invokes a function for each element in an array.
const arr1 = [1, 2, 3];
arr1.forEach((element) => {
  console.log(element);
});

// while Loop:
// Executes a block of code while a specified condition is true.
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do...while Loop:
// Similar to a while loop, but it will always execute the block of code at least once.
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// map():
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
const arrs = [1, 2, 3];
const doubled = arr.map((num) => num * 2);

// filter():
// Creates a new array with all elements that pass the test implemented by the provided function.
const arrss = [1, 2, 3, 4, 5];
const even = arr.filter((num) => num % 2 === 0);

// reduce():
// Executes a reducer function on each element of the array, resulting in a single output value.
const arr11 = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr) => acc + curr, 0);

// some():
// Checks if at least one element in the array passes the test implemented by the provided function.
const arr9 = [1, 2, 3, 4, 5];
const hasNegative = arr.some((num) => num < 0);

// every():
// Checks if all elements in the array pass the test implemented by the provided function.
const arr8 = [1, 2, 3, 4, 5];
const allPositive = arr.every((num) => num > 0);

// Object.keys() with forEach:
// Iterates over an object's own enumerable property names.
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});


// Using the Spread Operator (Shallow Merge):
const obj11 = { a: 1, b: 2 };
const obj21 = { b: 3, c: 4 };

const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 3, c: 4 }

// Using Object.assign() (Shallow Merge):
const obj22 = { a: 1, b: 2 };
const obj23 = { b: 3, c: 4 };

const merged1 = Object.assign({}, obj1, obj2);
console.log(merged); // { a: 1, b: 3, c: 4 }


// Deep Merge (Lodash Library):
// If you need to merge objects deeply (including nested objects), you can use a library like Lodash.
// npm install lodash
const _ = require('lodash');

const obj101 = { a: 1, b: { c: 2 } };
const obj201 = { b: { d: 3 }, e: 4 };

const merged3 = _.merge({}, obj1, obj2);
console.log(merged);
// { a: 1, b: { c: 2, d: 3 }, e: 4 }

