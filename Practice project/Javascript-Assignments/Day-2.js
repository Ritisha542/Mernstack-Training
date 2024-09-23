//Write a JavaScript program that takes a first name and a last name as input, concatenates them to form a full name, and then prints the full name
let text1 = "Ritisha";
let text2 = "Sen";
let result = text1.concat(text2);
console.log(result);

//Write a JavaScript program that checks if a number is positive, negative, or zero. Print 'Positive', 'Negative', or 'Zero' accordingly.
let results;
let number = 1;
if (number > 0) {
    results = 'Positive';
} else if (number < 0) {
    results = 'Negative';
} else {
    results = 'Zero';
}
console.log(results);

//Write a JavaScript program that uses a `for` loop to print the numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//Write a JavaScript function called `greet` that takes a name as an argument and prints 'Hello, [name]!' to the
//console. Then, call the function with a sample name.
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Ritisha");

//Write a JavaScript program that creates an array of 5 numbers, calculates the sum of all the numbers in the array,
//and prints the result.
const numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`The sum of the numbers is: ${sum}`);

