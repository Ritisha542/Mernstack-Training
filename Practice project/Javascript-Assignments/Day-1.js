//1)-- Write a function named `sayHello` that takes no parameters and returns the string "Hello, World!".
function sayHello() {
    return "Hello, World!";
}
console.log(sayHello());
//2)-- Create a function `doubleNumber` that takes a number as an argument and returns the number multiplied by 2.
function doubleNumber(number) {
    return number * 2;
}
//3)-- Write a function `addTwoNumbers` that accepts two numbers as arguments and returns their sum.
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
//4)-- Convert the `doubleNumber` function from question 2 into an arrow function.
const doubleNumber = (number) => number * 2;
//5)-- Create a function `subtractTen` that takes a number as an argument and returns the result of subtracting 10 from it.
function subtractTen(number) {
    return number - 10;
}
 //Write a function `isGreaterThanFive` that takes a number as an argument and returns `true` if the number is greater than 5, otherwise `false`.
 function isGreaterThanFive(number) {
    return number > 5;
}
 //Write a function `isBetweenOneAndTen` that takes a number as an argument and returns `true` if the number is between 1 and 10 (inclusive), otherwise `false`.
 function isBetweenOneAndTen(number) {
    return number >= 1 && number <= 10;
}
 //Write a function `isEven` that takes a number as an argument and returns "Even" if the number is even, and "Odd" if the number is odd
 function isEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
//Write a function `checkAge` that takes an age as an argument and returns "Adult" if the age is 18 or above, and "Minor" if the age is below 18. Implement this using the ternary operator.
function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
}
 //Create a function `getDayType` that takes a number (1-7) as an argument and returns:
 //- "Weekend" if the number is 6 (Saturday) or 7 (Sunday),
 //- "Weekday" if the number is between 1 and 5.
 //Use a `switch` statement to implement this logic.
 function getDayType(dayNumber) {
    switch(dayNumber) {
        case 6: 
             Saturday;
             break;
        case 7:
            Sunday;
            break;
            return "Weekend";
        case 1:
            Monday;
            break;
        case 2:
            Tuesday;
            break;
        case 3:
            Wednesday;
            break;
        case 4:
            Thursday;
            break;
        case 5:
            Friday;
            break;

            return "Weekday";
        default:
            return "Invalid day number";
    }
}
