//Write a JavaScript program that uses the `push()` method to add an element to an array.
let fruits = ['Apple', 'Banana'];
console.log('Initial array:', fruits);
fruits.push('Orange');
console.log('Updated array:', fruits);

//Create a JavaScript program that removes the last element from an array using the `pop()` method.
let fruit = ['Apple', 'Banana', 'Cherry', 'Orange'];
console.log('Initial array:', fruits);
let removedFruit = fruits.pop();

console.log('Removed fruit:', removedFruit);
console.log('Updated array:', fruits);

//Use the `shift()` method to remove the first element from an array.
let arr = ['Apple', 'Banana', 'Cherry', 'Orange'];

console.log('Initial array:', arr);

let removedarr = arr.shift();

console.log('Removed arr:', removedarr);
console.log('Updated array:', arr);

//Write a program that adds an element to the beginning of an array using the `unshift()` method
let arr1 = ['Banana', 'Cherry', 'Orange'];

console.log('Initial array:', arr1);

arr1.unshift('Apple');

console.log('Updated array:', arr1);

//Modify an array by removing and/or adding elements using the `splice()` method
let arr2 = ['Apple', 'Banana', 'Cherry', 'Orange'];

console.log('Initial array:', arr2);

arr2.splice(1, 1);

// Use splice() to add 'Grapes' at index 1
arr2.splice(1, 0, 'Grapes');

console.log('Updated array:', arr2);
//Use the `slice()` method to create a new array from a portion of an existing array.
let arr3 = ['Apple', 'Banana', 'Cherry', 'Orange', 'Grapes'];

let slicedarr3 = arr3.slice(1, 4); 

console.log('Sliced array:', slicedarr3);

//Find the index of an element in an array using the `indexOf()` method.
let arr4 = ['Apple', 'Banana', 'Cherry', 'Orange'];

let index = arr4.indexOf('Cherry'); // 2

console.log('Index of Cherry:', index);

// Create a new array by transforming each element in an existing array using the `map()` method.
let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(num => num * num); // [1, 4, 9, 16, 25]

console.log('Squared numbers:', squaredNumbers);

// Filter elements from an array that meet a certain condition using the `filter()` method
let number = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log('Even numbers:', evenNumbers);

// Write a program that calculates a single value from an array using the `reduce()` method.
let numb = [1, 2, 3, 4, 5];

let sum = numb.reduce((accumulator, current) => accumulator + current, 0);

console.log('Sum of numbers:', sum);


